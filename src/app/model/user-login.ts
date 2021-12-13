export class UserLogin{

  constructor(access_token?: string,expires_in?: number, token_type?: string) {
    this.access_token = access_token;
    this.expires_in = expires_in;
    this.token_type = token_type;
  }

  access_token?: string;
  expires_in?: number;
  token_type?: string;
  user?: any;

}
