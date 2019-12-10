import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'menu-page',
    loadChildren: () => import('./menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },
  {
    path: 'payment-page',
    loadChildren: () => import('./payment-page/payment-page.module').then( m => m.PaymentPagePageModule)
  },
  {
    path: 'produc-page',
    loadChildren: () => import('./produc-page/produc-page.module').then( m => m.ProducPagePageModule)
  },
  {
    path: 'create-product-page',
    loadChildren: () => import('./create-product-page/create-product-page.module').then( m => m.CreateProductPagePageModule)
  },
  {
    path: 'confirm-page',
    loadChildren: () => import('./confirm-page/confirm-page.module').then( m => m.ConfirmPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
