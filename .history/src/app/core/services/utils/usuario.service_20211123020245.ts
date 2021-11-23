import { UserPayload } from './../../authentication/token/token.interface';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Pessoa } from './../../interfaces/user.interface';
import { TokenService } from './../../authentication/token/token.service';
import { Injectable } from '@angular/core';
import { iif, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private pessoa: Pessoa = {} as Pessoa;

  constructor(private tokenService: TokenService) { }


  userFromToken(){
    return this.tokenService.changed().pipe(tap(() => this.flushPessoa()),
    mergeMap(x => iif(() => !!x, of(x) )),
    map(x => {this.setPessoaToekn(x.userPayload())})
    ).subscribe();

  }

  private setPessoaToekn(value?: UserPayload) {
    const pessoaNew = {} as Pessoa;
    pessoaNew.pessoaId = value.id.toString();
    pessoaNew.nome = value.name;
    pessoaNew.sobrenome = value.sobrenome;
    pessoaNew.email = value.email;
    this.pessoa = pessoaNew;
  }

  private flushPessoa() {
    this.pessoa = {} as Pessoa;
  }
}
