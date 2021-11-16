import { Data } from "@angular/router";

export interface Usuario {
  userId: string;
  username: string;
  password: string;
  verificado: string;
  pessoa: Pessoa;
}

export interface Pessoa {
  pessoaId: string;
  nome: string;
  sobrenome: string;
  genero: string;
  dateNascimento: Data;
  telefone: string;
  email: string;
  cpf: string;
}
