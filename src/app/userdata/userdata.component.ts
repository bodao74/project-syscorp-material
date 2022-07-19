import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cr: new FormControl(null, [Validators.required]),
      endereco: new FormControl(null),
      validade: new FormControl(null)
    });
  }
  onSalvar() {
    console.log(this.formulario);
  }

}
