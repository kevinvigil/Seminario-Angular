import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Wine } from './wine-list/Wine';

const URL = 'https://60ca66bd772a760017205f9b.mockapi.io/api/Productos'

@Injectable({
  providedIn: 'root'
})

export class WineDataService {

  constructor(private http:HttpClient) { }
  
  public getAll(): Observable<Wine[]>{
    return  this.http.get<Wine[]>(URL).pipe(
      tap((wines: Wine[]) => wines.forEach(
        wines => wines.quantity = 0
        ))
    );
  }
}