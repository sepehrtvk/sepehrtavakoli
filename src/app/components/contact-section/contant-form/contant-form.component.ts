import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contant-form',
  templateUrl: './contant-form.component.html',
  styleUrls: ['./contant-form.component.css'],
})
export class ContantFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private http: HttpClient) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  
  onSubmit(form: FormGroup) {
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

    // this.http
    //   .post<any>('https://formspree.io/f/xrgdzwqe', {
    //     email: form.value.email,
    //     message: form.value.message,
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}

