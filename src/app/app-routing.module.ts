import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListViewComponent } from './views/cryptoListView/crypto-list-view/crypto-list-view.component';
import { HomeViewComponent } from './views/homeView/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'crypto-info',
    component: CryptoListViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
