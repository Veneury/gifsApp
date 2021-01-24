import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar: ElementRef<HTMLInputElement> ;
  constructor(private _GifsServices:GifsService) { }

  ngOnInit(): void {
  }

  buscar()
  {
    const termino = this.txtBuscar.nativeElement.value;
    if (termino.trim().length == 0) {
      return;
    }
    this._GifsServices.buscarGifs(termino);
    this.txtBuscar.nativeElement.value = "";
  }
}
