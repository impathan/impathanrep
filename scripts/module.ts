import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {FormsModule} from "@angular/forms"

@NgModule({
    imports: [
        BrowserModule,
FormsModule        
        ],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class MainModule { } 
  