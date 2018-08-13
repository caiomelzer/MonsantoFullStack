import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-farmer-detail',
  templateUrl: './farmer-detail.component.html',
  styleUrls: ['./farmer-detail.component.css']
})
export class FarmerDetailComponent implements OnInit {
	farmer : any;
  	constructor(public dialogRef: MatDialogRef<FarmerDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  	ngOnInit() {
  		console.log(this.data);
  		this.farmer = this.data;
  	}
  	close(){
  		this.dialogRef.close();
  	}
}
