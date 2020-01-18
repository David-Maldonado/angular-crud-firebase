import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/products/product/product.component';
import {ProductListComponent} from './components/products/product/product-list/product-list.component';
//Animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
//services
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
