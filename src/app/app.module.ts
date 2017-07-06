import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { ResultComponent } from './pages/result/result.component';
import { HttpService } from './services/http.service';
import { FormComponent } from './pages/form/form.component';

import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormCheckComponent } from './components/form-check/form-check.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TrackScrollDirective } from './directives/track-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    FormComponent,
    FormSelectComponent,
    FormCheckComponent,
    FormInputComponent,
    TrackScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
