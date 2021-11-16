import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPassPage implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.creatForm();
    if(this.activedRoute.snapshot.params['username'] !== undefined) {
      this.form.get(['email']).setValue(this.activedRoute.snapshot.params['username']);
    }
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

}
