import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DemoMaterialModule } from './demo-module/demo-material.module';
import { CompanyService } from './services/company.service';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanyContainerComponent,
    CompanySettingsComponent],
  bootstrap: [AppComponent],
  providers: [CompanyService,SettingsService]
})
export class AppModule { }
