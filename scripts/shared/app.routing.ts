import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { BindingComponent } from '../pages/product/binding.component';
import { ProductComponent } from '../pages/product/product.component';
import { PostListingComponent } from '../pages/post/posts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'products', component: ProductComponent },
    {path:'posts', component:PostListingComponent}
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);