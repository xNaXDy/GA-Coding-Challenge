import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Wine } from './schema/wine.schema';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public async getAllWines(): Promise<{ wines: Wine[] }> {
    return this.http.get<{ wines: Wine[] }>(environment.apiUrl + '/wine/all').toPromise();
  }

  public async getWine(id: string): Promise<Wine> {
    return this.http.get<Wine>(environment.apiUrl + '/wine/' + id).toPromise();
  }

  public async updateWine(wine: Wine): Promise<object> {
    return this.http.put(environment.apiUrl + '/wine', wine).toPromise();
  }

  public async createWine(wine: Wine): Promise<object> {
    return this.http.post(environment.apiUrl + '/wine', wine).toPromise();
  }

  public async deleteWine(id: string): Promise<object> {
    return this.http.delete(environment.apiUrl + '/wine/' + id).toPromise();
  }
}
