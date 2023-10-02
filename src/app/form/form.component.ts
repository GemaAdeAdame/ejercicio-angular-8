import { Component } from '@angular/core';
import { Form } from 'src/app/form/form.model'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  Form: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      name: ['', Validators.required],
      nif: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/\d/), // Al menos un número
        ],
      ],
      phone: [
        '',
        [Validators.pattern(/^\d{9}$/)] // 9 dígitos numéricos
      ],
      description: [''],
      lastName: [''],
      privacyPolicy: [false, Validators.requiredTrue], // Checkbox
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      console.log(this.Form.value);
    }
  }
}

