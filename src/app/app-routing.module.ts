import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'resolve',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    resolve: {
      soccer: CrisisDetailResolverService
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    // Poniżej preloading strategy
    // routes,
    // {
    //   preloadingStrategy: PreloadAllModules
    // }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
