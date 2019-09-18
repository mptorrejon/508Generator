import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { ErrorsComponent } from './errors/errors.component';
import { PotentialProblemsComponent } from './potential-problems/potential-problems.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsService } from './tabs/tabs.service';
@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    PotentialProblemsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [ 
    AppService, 
    TabsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
