import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPassPage implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

}
