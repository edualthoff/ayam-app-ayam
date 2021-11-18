import { toByteArray } from 'base64-js';
import { capitalize, now, nowTimestampSecond, timeLeft } from './helpers';
import { Token, TokenAttribute } from './interface';

export abstract class BaseToken implements Token {
  accessToken(): string {
    return '';
  }

  tokenType() {
    return '';
  }

  exp(): number {
    return 0;
  }

  valid() {
    console.log("valid 1 "+!!this.accessToken());
    console.log("valid "+(now() < this.exp()));
    console.log("valid 2 "+(nowTimestampSecond()));
    console.log("valid 4 "+(this.exp()));

    console.log("valid 3 "+(this.exp() > nowTimestampSecond()));

    return !!this.accessToken() && !this.isExpired();
  }

  isExpired() {
    return this.exp() !== 0 && this.exp() - now() < 0;
  }

  headerValue() {
    return !!this.accessToken() ? [capitalize(this.tokenType()), this.accessToken()].join(' ') : '';
  }

  refreshTime() {
    return timeLeft(this.exp() - 60 * 1000);
  }
}

export class SimpleToken extends BaseToken {
  constructor(protected attributes: TokenAttribute) {
    super();
  }

  accessToken() {
    return this.attributes.accessToken;
  }

  tokenType() {
    return this.attributes.tokenType;
  }

  exp() {
    return this.attributes.exp;
  }
}

export class JwtToken extends SimpleToken {
  private _payload: {
    exp: number, email_verified: string, email: string, roles: string[], name: string, given_name: string, sub: string
  } | null = null;

  static is(accessToken: string) {
    try {
      const [_header] = accessToken.split('.');
      const header = JSON.parse(JwtToken.decode(_header));

      return header.typ === 'JWT';
    } catch (e) {
      return false;
    }
  }

  static decode(b64: string) {
    b64 = b64.replace(/[-_]/g, m => {
      return { '-': '+', '_': '/' }[m] as string;
    });
    while (b64.length % 4) {
      b64 += '=';
    }

    return String.fromCharCode(...toByteArray(b64));
  }

  accessToken() {
    return this.attributes.accessToken;
  }

  tokenType() {
    return this.attributes.tokenType;
  }

  exp() {
    if (!this.payload) {
      return 0;
    }

    if (!this.payload.exp === undefined) {
      return this.attributes.exp;
    }

    return this.payload.exp;
  }

  private get payload() {
    if (!this.accessToken()) {
      return { exp: 0 };
    }

    if (!this._payload) {
      const [, payload] = this.accessToken().split('.');

      this._payload = JSON.parse(JwtToken.decode(payload));
    }

    return this._payload;
  }
}
