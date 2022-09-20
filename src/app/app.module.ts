import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TagManagementComponent } from './modules/tagManagement/tagManagement.component';
import { SystemManagementComponent } from './modules/systemManagement/systemManagement.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, TagManagementComponent, SystemManagementComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, BrowserAnimationsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
