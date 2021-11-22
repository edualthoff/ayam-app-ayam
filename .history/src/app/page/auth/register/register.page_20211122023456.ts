import { Usuario, Pessoa } from './../../../core/interfaces/user.interface';
import { UsuarioRequestService } from './../../../core/services/http/auth/usuario-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: UsuarioRequestService,
    private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.creatForm();
    if(this.activedRoute.snapshot.params['username'] !== undefined) {
      this.form.get(['email']).setValue(this.activedRoute.snapshot.params['username']);
    }
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  buttonSave() {
    const user: Usuario = {} as Usuario
    user.pessoa = {} as Pessoa;
    user.username = this.form.get(['email']).value;
    user.password = this.form.get(['senha']).value;
    user.pessoa.nome = this.form.get(['nome']).value;
    user.pessoa.sobrenome = this.form.get(['sobrenome']).value;
    user.pessoa.telefone = this.form.get(['telefone']).value;
    user.pessoa.genero = this.form.get(['genero']).value;
    user.pessoa.email = this.form.get(['email']).value;

    /** Caso retornar error é porque o usuario existe o mesmo volta para a pagina de login com o campo username preenchido */
    this.http.saveUsuario(user).subscribe(
      (x) => {this.router.navigateByUrl('./tabs/tab1')},
      () => { this.router.navigate([`../login/${user.username}`], {relativeTo: this.activedRoute}) },
      () => {}
    );
  }
}
