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
  constructor(private _http:HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(termino: string) {
    termino = termino.trim().toLowerCase();
     const { url, apiKey } = environment;
    if (!this._historial.includes(termino)) {
        this._historial.unshift(termino);
      this._historial = this._historial.slice(0, 10);
      this._http.get<GifsResponse>(`${url}/trending?api_key=${apiKey}&q=${termino}&limit=10`).subscribe((data) => {
        this.resultado=data.data;
      });
    }
  }
  getGifsTrending()
  {
    // const { url, apiKey } = environment;
    // return
  }
}
