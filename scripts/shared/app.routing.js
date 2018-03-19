"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../pages/home/home.component");
var binding_component_1 = require("../pages/product/binding.component");
var product_component_1 = require("../pages/product/product.component");
var posts_component_1 = require("../pages/post/posts.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'binding', component: binding_component_1.BindingComponent },
    { path: 'products', component: product_component_1.ProductComponent },
    { path: 'posts', component: posts_component_1.PostListingComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map