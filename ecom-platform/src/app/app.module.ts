import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
@NgModule({
  declarations: [AppComponent, ItemComponent, ProductLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeconfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
