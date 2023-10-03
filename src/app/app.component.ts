import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  
 forma!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.crearFormulario();
  }


  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get nifNoValido() {
    return this.forma.get('nif')?.invalid && this.forma.get('nif')?.touched;
  }

  get emailNoValido() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

  get passwordNoValido() {
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }


  crearFormulario(){
   this.forma = this.fb.group({
    nombre:['', Validators.required],
    apellidos:[''],
    nif:['', [Validators.required, Validators.pattern(/^[0-9]{8}[A-Za-z]$/)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*\d).{6,}$/)]],
    telefono:['', [Validators.pattern(/^[0-9]{9,}$/)]],
    comment:[''],
    checkbox:['', [Validators.required]],
    pais: ['', Validators.required]
   })
  }

paises = [
  'argentina',
  'españa',
  'francia',
  'eeuu'
];
  

  
guardar(){
  console.log(this.forma);

  if (this.forma.invalid) {
    return Object.values(this.forma.controls).forEach(control=>{
      control.markAllAsTouched();
    })
  }
}

limpiar(){
  this.forma.reset();
}
}

