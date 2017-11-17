import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {HttpModule} from '@angular/http';
import {JsonpModule} from '@angular/http';
// import { JsonpClientBackend } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {AccordionModule, AlertModule} from 'ngx-bootstrap';


import {MatButtonModule, MatInputModule, MatExpansionModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    JsonpModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSnackBarModule
    // JsonpClientBackend
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
