import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/product/product.html"
})
export class ProductComponent {
    inputVariable:string='';

    outputVariable:string='';
    outputEvent(outputVariable){
this.outputVariable = outputVariable;
    }
}