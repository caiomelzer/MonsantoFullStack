import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'; 
import { Farmer } from './farmer';
import { Observable } from 'rxjs/Observable';

@Injectable({
  	providedIn: 'root'
})
export class FarmerService {

	private restURL: string = 'http://localhost:4211/farmer';
	constructor(private http: HttpClient) { }

	getFarmers(): Observable<Farmer[]>{
		return this.http.get<Farmer[]>(this.restURL);
	}
}