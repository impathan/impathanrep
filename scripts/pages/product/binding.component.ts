import {Component, OnInit,OnChanges} from "@angular/core"

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/product/binding.html"
})
export class BindingComponent implements OnInit,OnChanges  {

    name:string='Hello';

    constructor() {
        console.log("Constructor fired"); // 1
    }
    ngOnInit() {
        console.log("On init"); // 2
    }
    ngAfterContentInit() {
        console.log("After content init"); //3
    }

    ngAfterViewInit() {
        console.log("After view init"); //4
    }
    ngDoCheck() {
        console.log("Do Check");
    }
    ngAfterContentChecked() {
        console.log("After content Checked");
    }
    ngAfterViewChecked() {
        console.log("After View  Checked");
    }
    ngOnChanges() {
        console.log("On changes fired");
    }
}