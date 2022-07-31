import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sales', component: SalesComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'categories/:cid/:cprice', component: CategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
