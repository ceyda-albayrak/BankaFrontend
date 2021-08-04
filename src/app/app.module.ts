
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HesapComponent } from './components/hesap/hesap.component';
import { HttpClientModule } from '@angular/common/http';
import { MusteriSorguComponent } from './components/musteri-sorgu/musteri-sorgu.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterSurnamePipe } from './pipes/filter-surname.pipe';
import { FilterNumberPipe } from './pipes/filter-number.pipe';
import { FilterTcPipe } from './pipes/filter-tc.pipe';
import { FilterUnvanPipe } from './pipes/filter-unvan.pipe';
import { FilterDurumPipe } from './pipes/filter-durum.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HesapComponent,
    MusteriSorguComponent,
    FilterNamePipe,
    FilterSurnamePipe,
    FilterNumberPipe,
    FilterTcPipe,
    FilterUnvanPipe,
    FilterDurumPipe,
    FirstUppercasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  
  
   
   
 
  ],
  exports:[

  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
