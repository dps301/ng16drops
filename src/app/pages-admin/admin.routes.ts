import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { ItemComponent } from './item/item.component';
import { BtnComponent } from './btn/btn.component';

export const routes:Routes = [
  { path: '', component: UserComponent},
  { path: 'user', component: UserComponent},
  { path: 'result', component: AdminResultComponent},
  { path: 'item', component: ItemComponent},
  { path: 'btn', component: BtnComponent},
];

export const Routing = RouterModule.forChild(routes);