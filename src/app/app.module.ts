import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
// npm install material-table @material-ui/core --save
import {MatTableModule} from '@angular/material/table';
// ng generate module app-routing --flat --module=app
import { AppRoutingModule } from './app-routing.module';
// npm i ng2-search-filter --save
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './search-filter.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
// npm install ng2-filter-pipe --save
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2FilterPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
