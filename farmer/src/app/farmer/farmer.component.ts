import { Component, OnInit } from '@angular/core';
import { FarmerService } from './farmer.service';
import { FarmerDetailComponent } from './../farmer-detail/farmer-detail.component'
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Farmer } from './farmer';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'; 


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements OnInit {
	public searchField: string;
	public farmers = [];

	constructor(private farmerService: FarmerService, private dialog: MatDialog){}

  	ngOnInit() {
    	this.farmerService.getFarmers()
  			.subscribe(data => {
  				this.farmers = data; 
  			});
    }

	inputSearchFarmer(event){
		this.searchFarmers(this.searchField);
  	}

  	searchFarmers(params: string){
		this.farmerService.getFarmers().subscribe((data) => {
  			this.farmers = [];
  			data.forEach((d) => {
  				if(d.name.match(params) || d.document.documentNumber.match(params))
  					this.farmers.push(d);
  			});
		});
  	}

  	getFarmer(farmer){
  		let dialogConfig = new MatDialogConfig();
  			dialogConfig = {
  				data: farmer,
  				width: '80%'
		};
		this.dialog.open(FarmerDetailComponent, dialogConfig);
  	}

}


  