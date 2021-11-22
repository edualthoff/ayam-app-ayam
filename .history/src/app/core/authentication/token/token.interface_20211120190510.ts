export interface UserPayload {
  [propName: string]: any;

  id: number | string | null;
  name?: string;
  sobrenome?: string;
  email?: string;
  emailVerified?: string;
  avatar?: string;
}
/**
 *  Token
 */
export interface TokenResponse {
  tokenType?: string;
  token?: string;
  refreshToken?: string;
}

export interface TokenAttribute {
  accessToken: string;
  tokenType: string;
  exp: number;
}

export interface Token {
  accessToken: () => string;
  tokenType: () => string;
  exp: () => number;
  valid: () => boolean;
  refreshTime: () => number;
  headerValue: () => string;
  roles: () => string[];
  userPayload: () => UserPayload;
  sub: () => string;
}

