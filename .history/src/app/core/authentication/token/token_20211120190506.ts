import { toByteArray } from 'base64-js';
import { capitalize, nowTimestampSecond, timeLeft } from '../utils/helpers';
import { Token, TokenAttribute, UserPayload } from './token.interface';

export abstract class BaseToken implements Token {

  userPayload() {
    return null;
  }

  sub() {
    return null;
  }

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
    return !!this.accessToken() && this.isExpired();
  }

  isExpired() {
    return this.exp() !== 0 && this.exp() > nowTimestampSecond();
  }

  headerValue() {
    return !!this.accessToken() ? [capitalize(this.tokenType()), this.accessToken()].join(' ') : '';
  }

  refreshTime() {
    return timeLeft(this.exp() - 60 * 1000);
  }
  roles() {
    return null;
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

  roles() {
    if (!this.payload && this.payload.roles === undefined ) {
      return null;
    }
    return this.payload.roles;
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

  userPayload() {
    if (!this.payload && this._payload.email === undefined ) {
      return null;
    }
    const user = {} as UserPayload;
    user.id = this.payload.sub;
    user.name = this.payload.name;
    user.sobrenome = this.payload.given_name;
    user.email = this.payload.email;
    user.emailVerified = this.payload.email_verified;
    return this.payload.sub;
  }

  sub() {
    if (!this.payload && this._payload.sub === undefined ) {
      return null;
    }
    return this.payload.sub;
  }

  private get payload() {
    if (!this.accessToken()) {
      return null;
    }

    if (!this._payload) {
      const [, payload] = this.accessToken().split('.');

      this._payload = JSON.parse(JwtToken.decode(payload));
    }

    return this._payload;
  }
}
