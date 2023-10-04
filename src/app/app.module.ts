import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
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
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
