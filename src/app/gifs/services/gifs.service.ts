import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gifs, GifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  public resultado: Gifs[] = [];
  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || []


  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(termino: string) {
    termino = termino.trim().toLowerCase();
     const { url, apiKey } = environment;
    if (!this._historial.includes(termino)) {
        this._historial.unshift(termino);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    this._http.get<GifsResponse>(`${environment.url}/search?api_key=${environment.apiKey}&q=${termino}&limit=10`).subscribe((data) => {
      this.resultado = data.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultado));
    });

  }
  getGifsTrending()
  {
    // const { url, apiKey } = environment;
    // return
  }
}
