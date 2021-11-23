import { UserPayload } from './../../authentication/token/token.interface';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Pessoa } from './../../interfaces/user.interface';
import { TokenService } from './../../authentication/token/token.service';
import { Injectable, OnDestroy } from '@angular/core';
import { iif, of, Unsubscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnDestroy {

  private _pessoa: Pessoa = {} as Pessoa;
  get pessoa(){
    return this._pessoa;
  }
  private unsubcription: Unsubscribable;

  constructor(private tokenService: TokenService) {
    this.unsubcription = this.userFromToken();
  }

  ngOnDestroy(): void {
    this.unsubcription.unsubscribe();
  }


  userFromToken(){
    return this.tokenService.changed().pipe(tap(() => this.flushPessoa()),
    mergeMap(x => iif(() => !!x, of(x) )),
    map(x => {this.setPessoaToekn(x.userPayload())})
    ).subscribe();

  }

  private setPessoaToekn(value: UserPayload) {
    const pessoaNew = {} as Pessoa;
    pessoaNew.pessoaId = String(value.id);
    pessoaNew.nome = value.name;
    pessoaNew.sobrenome = value.sobrenome;
    pessoaNew.email = value.email;
    this._pessoa = pessoaNew;
  }

  private flushPessoa() {
    this._pessoa = {} as Pessoa;
  }
}
