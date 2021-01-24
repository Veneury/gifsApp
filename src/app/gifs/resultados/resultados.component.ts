import { Component, OnInit } from '@angular/core';
import { Gifs } from '../interface/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private _GifsServices:GifsService) { }

  ngOnInit(): void {

  }

  get GifsData() {
    return this._GifsServices.resultado;
  }
}
