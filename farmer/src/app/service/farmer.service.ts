import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { Farmer } from "./../models/farmer.model";

@Injectable()
export class FarmerService {
 	private farmer: Farmer;

  	constructor(private http: Http) {}

  	searchFarmers(): Observable<Farmer> {
  		console.log('teste');
    	return this.http.get('http://localhost:4211/farmer').map((res: Response) => res.json().response.map((farmer: Farmer) => new Farmer().deserialize(farmer)));
  	}
}