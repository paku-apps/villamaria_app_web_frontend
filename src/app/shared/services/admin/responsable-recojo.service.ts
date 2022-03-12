import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../common/http-request.service';
import { Parameter } from 'src/app/models/common/parameter';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRecojosService {

  constructor(private _request: HttpRequestService) { }

  getResponsableRecojo(parametro: Parameter): Observable<any> {
    return this._request.http(parametro);
  }

  updateStatus(parametro: Parameter): Observable<any> {
    return this._request.http(parametro);
  }
}
