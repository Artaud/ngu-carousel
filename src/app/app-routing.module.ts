import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: 'tile',
    loadChildren: () => import('./tile/tile.module').then(m => m.TileModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
