import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SensorManagementComponent } from './modules/sensorManagement/sensorManagement.component';
import { SystemManagementComponent } from './modules/systemManagement/systemManagement.component';
import { TagBindEntityComponent } from './modules/tagBindEntity/tagBindEntity.component';
import { TagManagementComponent } from './modules/tagManagement/tagManagement.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tag_management',
        component: TagManagementComponent
    },
    {
        path: 'system_management',
        component: SystemManagementComponent
    },
    {
        path: 'sensor_management',
        component: SensorManagementComponent
    },
    {
        path: 'tag_bind_entity',
        component: TagBindEntityComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
