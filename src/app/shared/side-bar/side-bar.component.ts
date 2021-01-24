import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private _GifsServices:GifsService) { }

  ngOnInit(): void {
  }

  get historial()
  {
    return this._GifsServices.historial;
  }
  buscar(termino:string)
  {
    // alert("Hola")
    this._GifsServices.buscarGifs(termino);
  }
}
