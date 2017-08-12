import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';
import { FormComponent } from './pages/form/form.component';
import { UserComponent } from './pages-admin/user/user.component';
import { AdminResultComponent } from './pages-admin/admin-result/admin-result.component';
import { ItemComponent } from './pages-admin/item/item.component';

export const routes:Routes = [
  { path: '', component: FormComponent},
  { path: 'result', component: ResultComponent},
  { path: 'admin/user', component: UserComponent},
  { path: 'admin/result', component: AdminResultComponent},
  { path: 'admin/item', component: ItemComponent},
];

export const Routing = RouterModule.forRoot(routes);