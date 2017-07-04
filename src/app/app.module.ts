import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { ResultComponent } from './pages/result/result.component';
import { HttpService } from './services/http.service';
import { FormComponent } from './pages/form/form.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormCheckComponent } from './components/form-check/form-check.component';
import { FormInputComponent } from './components/form-input/form-input.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    FormComponent,
    FormSelectComponent,
    FormCheckComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
