import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoinComponent } from './add-coin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddCoinComponent,
    data: { title: 'Agregar nueva moneda' },
  },
];

@NgModule({
  declarations: [AddCoinComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AddCoinModule {}
