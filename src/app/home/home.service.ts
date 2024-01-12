import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getUv(){
    const myHeaders = {"x-access-token": "openuv-1bhhgrlr6mnt1q-io",
    "Content-Type": "application/json",
    }
    const requestOptions = {
      headers: new HttpHeaders(myHeaders),
    };

    return this.http.get("https://api.openuv.io/api/v1/uv?lat=51.5&lng=-0.11&alt=100&dt=", requestOptions)
  }
}

