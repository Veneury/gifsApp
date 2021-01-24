import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar: ElementRef<HTMLInputElement> ;
  constructor() { }

  ngOnInit(): void {
  }

  buscar()
  {
    console.log(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = "";
  }
}
