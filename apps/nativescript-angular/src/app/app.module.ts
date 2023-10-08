import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeDialogModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home.component'
import { DetailComponent } from './detail.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeDialogModule],
  declarations: [AppComponent, HomeComponent, DetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
