import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoListViewComponent } from 'src/app/views/cryptoListView/crypto-list-view/crypto-list-view.component';
import { CryptoListComponent } from './views/cryptoListView/components/crypto-list/crypto-list.component';
import { CryptoSeekerComponent } from './views/cryptoListView/components/crypto-seeker/crypto-seeker.component';
import { HomeViewComponent } from './views/homeView/home-view/home-view.component';
import { NavBarComponent } from './sharedComponents/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    CryptoListViewComponent,
    CryptoListComponent,
    CryptoSeekerComponent,
    HomeViewComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
