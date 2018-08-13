import { Injectable } from '@angular/core';

import { Farmer } from './farmer';
import { FARMERS } from './mock-farmers';

@Injectable({
  	providedIn: 'root'
})
export class FarmerService {

  constructor() { }
	searchFarmers(params){
  		return FARMERS.filter(FARMERS => { return FARMERS.name.match(params) || FARMERS.document.documentNumber.match(params)});	 
  	}
}