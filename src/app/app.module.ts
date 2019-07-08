import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoService2Component } from './demo-service2/demo-service2.component';
import { ObservablesExampleComponent } from './observables-example/observables-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoServiceComponent,
    DemoService2Component,
    ObservablesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
