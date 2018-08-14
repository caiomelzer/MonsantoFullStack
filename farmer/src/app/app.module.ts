import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


import { FarmerComponent } from './farmer/farmer.component';
import { FarmerDetailComponent } from './farmer-detail/farmer-detail.component';

import { FarmerService } from './farmer/farmer.service'



const appRoutes: Routes = [
  	{ path: 'search', component: FarmerComponent },
  	{ path: '**',redirectTo: '/search' }
];

@NgModule({
  	declarations: [
    	AppComponent,
    	FarmerComponent,
    	FarmerDetailComponent
  	],
  	imports: [
  		RouterModule.forRoot(
      		appRoutes
    	),
    	HttpModule,
	    BrowserModule,
	    BrowserAnimationsModule,
	    MatCheckboxModule,
	    MatGridListModule,
	    MatFormFieldModule,
	    MatInputModule,
	    MatToolbarModule,
	    MatIconModule,
	    MatCardModule,
	    MatListModule,
	    MatDialogModule,
	    MatDividerModule,
	    MatButtonModule,
	    HttpClientModule,
	    FormsModule
	  ],
	  providers: [FarmerService],
	  entryComponents: [FarmerDetailComponent],
	  bootstrap: [AppComponent]
})
export class AppModule { }
