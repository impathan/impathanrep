import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './pages/home/home.component';
import {BindingComponent} from './pages/product/binding.component';
import {ProductListingComponent} from './pages/product/product.listing.component';
import {PostListingComponent} from './pages/post/posts.component';
import {ProductComponent} from './pages/product/product.component';
import {FormsModule} from "@angular/forms"
import { routing } from './shared/app.routing';
import {PostService} from './services/post.service';
import {MessageService} from './services/message.service'; 
import { HttpClientModule }    from '@angular/common/http';
 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './services/in-memory';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
  //   InMemoryDataService, { dataEncapsulation: false }//
//)
        ],
    providers: [ PostService, MessageService ],
    declarations: [LayoutComponent,HomeComponent,BindingComponent, ProductListingComponent,ProductComponent,PostListingComponent],
    bootstrap: [LayoutComponent]
})
export class MainModule { } 
   
