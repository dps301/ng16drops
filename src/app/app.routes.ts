import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';

export const routes:Routes = [
  { path: '', component: ResultComponent},
];

export const Routing = RouterModule.forRoot(routes);