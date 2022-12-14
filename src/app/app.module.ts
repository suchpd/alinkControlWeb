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
import { QRCodeModule } from 'angular2-qrcode';
import { SensorManagementComponent } from './modules/sensorManagement/sensorManagement.component';
import { TagBindEntityComponent } from './modules/tagBindEntity/tagBindEntity.component';
import { ToastModule } from 'primeng/toast';
import { ToastProxyComponent } from './components/toastProxy/toastProxy.component';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, HomeComponent, TagManagementComponent, SystemManagementComponent, SensorManagementComponent, TagBindEntityComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, BrowserAnimationsModule, HttpClientModule, QRCodeModule, ToastModule],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
