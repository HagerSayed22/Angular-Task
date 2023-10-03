import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DetailsProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,NgOptimizedImage,
    HttpClientModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
