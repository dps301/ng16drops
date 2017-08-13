import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';
import { FormComponent } from './pages/form/form.component';
import { AdminLayoutComponent } from './pages-admin/admin.layout.component';

export const routes:Routes = [
  { path: '', component: FormComponent},
  { path: 'result', component: ResultComponent},
  { path: 'admin', component: AdminLayoutComponent, loadChildren: './pages-admin/admin.module#AdminModule'},
];

export const Routing = RouterModule.forRoot(routes);