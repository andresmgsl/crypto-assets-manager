import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./containers/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'add-new-coin',
        loadChildren: () =>
          import('./containers/add-coin/add-coin.module').then(
            (m) => m.AddCoinModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./containers/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
