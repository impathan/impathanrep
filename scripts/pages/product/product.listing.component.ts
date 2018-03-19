import {Component, Input, Output, EventEmitter} from "@angular/core"
import { Product } from '../../models/product/product.model';

@Component({
    selector: "product-listing",
    templateUrl: "../../views/pages/product/listing.html"
})
export class ProductListingComponent {

    outputVariable:string="";

    @Input()
    inputVariable : string='';

    @Output("output")
    output: EventEmitter<Object> = new EventEmitter<Object>();

    outputEvent(){
        this.output.emit(this.outputVariable);
    }
}