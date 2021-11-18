import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})
export class NewPassPage implements OnInit {

  form: FormGroup;

  get senha() {
    return this.form.get(['senha']);
  }

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      senha: ['', [Validators.required]],
    });
  }
}
