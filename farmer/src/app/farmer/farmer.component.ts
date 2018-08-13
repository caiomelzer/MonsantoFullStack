import { Component, OnInit } from '@angular/core';
import { FarmerService } from './farmer.service';
import { Farmer } from './farmer';
import { FarmerDetailComponent } from './../farmer-detail/farmer-detail.component'
import { MatDialog, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

	farmers: Farmer[];

  	constructor(private farmerService: FarmerService, private dialog: MatDialog){}

  	ngOnInit() {
    	this.farmers = this.farmerService.searchFarmers('');
  	}

  	inputSearchFarmer(event){
  		this.farmers = this.farmerService.searchFarmers(event.target.value);
  	}

  	getFarmer(farmer){
  		console.log(farmer);
  		let dialogConfig = new MatDialogConfig();
  			dialogConfig = {
  				data: farmer,
  				width: '80%'
		};


        this.dialog.open(FarmerDetailComponent, dialogConfig);
  	}

}


  