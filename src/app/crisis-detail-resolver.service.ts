import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CrisisDetailResolverService implements Resolve<any> {
  constructor(private http: HttpClient) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc")
  }

}
