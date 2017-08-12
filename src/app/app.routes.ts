import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';
import { FormComponent } from './pages/form/form.component';

export const routes:Routes = [
  { path: '', component: FormComponent},
  { path: 'result/:id', component: ResultComponent},
];

export const Routing = RouterModule.forRoot(routes);