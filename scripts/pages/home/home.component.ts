import {Component} from "@angular/core"
import {NgModule} from '@angular/core'
import {ProductModel} from './home-model'
@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/home/index.html"
})
export class HomeComponent {
    product = new ProductModel();
}