"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListingComponent = (function () {
    function ProductListingComponent() {
        this.outputVariable = "";
        this.inputVariable = '';
        this.output = new core_1.EventEmitter();
    }
    ProductListingComponent.prototype.outputEvent = function () {
        this.output.emit(this.outputVariable);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProductListingComponent.prototype, "inputVariable", void 0);
    __decorate([
        core_1.Output("output"),
        __metadata("design:type", core_1.EventEmitter)
    ], ProductListingComponent.prototype, "output", void 0);
    ProductListingComponent = __decorate([
        core_1.Component({
            selector: "product-listing",
            templateUrl: "../../views/pages/product/listing.html"
        })
    ], ProductListingComponent);
    return ProductListingComponent;
}());
exports.ProductListingComponent = ProductListingComponent;
//# sourceMappingURL=product.listing.component.js.map