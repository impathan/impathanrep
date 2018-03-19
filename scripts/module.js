"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var layout_component_1 = require("./layout.component");
var home_component_1 = require("./pages/home/home.component");
var binding_component_1 = require("./pages/product/binding.component");
var product_listing_component_1 = require("./pages/product/product.listing.component");
var posts_component_1 = require("./pages/post/posts.component");
var product_component_1 = require("./pages/product/product.component");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./shared/app.routing");
var post_service_1 = require("./services/post.service");
var message_service_1 = require("./services/message.service");
var http_1 = require("@angular/common/http");
//import { InMemoryDataService }  from './services/in-memory';
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpClientModule,
            ],
            providers: [post_service_1.PostService, message_service_1.MessageService],
            declarations: [layout_component_1.LayoutComponent, home_component_1.HomeComponent, binding_component_1.BindingComponent, product_listing_component_1.ProductListingComponent, product_component_1.ProductComponent, posts_component_1.PostListingComponent],
            bootstrap: [layout_component_1.LayoutComponent]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=module.js.map