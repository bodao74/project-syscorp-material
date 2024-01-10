import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArmaFogo } from '../models/arma.model';
import { AcervoArmas } from '../models/acervo.model';
import { CAC } from '../models/cac.model';
import { TitleStrategy } from '@angular/router';



@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  formulario: FormGroup;


  arma1 = new ArmaFogo('H&K', 'VP9 OR', '9mm', 'GR4567', 'CRA123', new Date('10/10/2030'));

  acervo1 = new AcervoArmas('Atirador', []);

  novoCac: CAC = new CAC('Michael', 'Av. Brasil, 456', 112257, new Date('10/10/2033'), []);

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cr: new FormControl(null, [Validators.required]),
      endereco: new FormControl(null, Validators.required),
      validade: new FormControl(null, Validators.required)
    });
    this.acervo1.armas.push(this.arma1);
    this.formulario.patchValue(
      {
        'nome': this.novoCac.nome,
        'cr': this.novoCac.num_cr,
        'endereco': this.novoCac.endereo,
        'validade': this.novoCac.val_cr
      }
    );
  }
  onSalvar() {
    console.log(this.formulario);
    console.log(this.arma1);
    console.log(this.acervo1);
    this.novoCac.acervo_cac.push(this.acervo1);
    console.log(this.novoCac);

  }

}
