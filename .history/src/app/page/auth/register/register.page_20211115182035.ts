import { Usuario } from './../../../core/interfaces/user.interface';
import { UsuarioRequestService } from './../../../core/services/http/auth/usuario-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: UsuarioRequestService) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  buttonSave() {
    const user = {} as Usuario
    console.log(""+this.form.get['genero'].value+"' "+this.form.get['email'].value)
    user.username = this.form.get['email'].value;
    user.password = this.form.get['senha'].value;
    user.pessoa.nome = this.form.get['nome'].value;
    user.pessoa.sobrenome = this.form.get['sobrenome'].value;
    user.pessoa.telefone = this.form.get['telefone'].value;
    user.pessoa.genero = this.form.get['genero'].value;
    user.pessoa.email = this.form.get['email'].value;


    this.http.saveUsuario(user).subscribe();
  }
}
