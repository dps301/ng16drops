import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { ItemComponent } from './item/item.component';
import { HttpService } from '../services/http.service';
import { Routing } from "./admin.routes";
import { AdminLayoutComponent } from './admin.layout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    UserComponent,
    AdminResultComponent,
    ItemComponent,
  ],
  imports: [
    Routing,
    FormsModule,
    CommonModule
  ],
  providers: [HttpService],
})
export class AdminModule { }
