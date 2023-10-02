import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DetailsProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule,
    BrowserAnimationsModule,NgOptimizedImage,
    HttpClientModule,MatIconModule,MatTooltipModule,MatButtonModule,MatButtonToggleModule,MatCardModule
    ,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
