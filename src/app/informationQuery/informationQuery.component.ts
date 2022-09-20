import { Component, OnInit } from '@angular/core';
import { ToastService } from '../components/toast-service';
import { AlinkService } from '../services/alinkService';

@Component({
    selector: 'app-informationQuery',
    templateUrl: './informationQuery.component.html',
    styleUrls: ['./informationQuery.component.css']
})
export class InformationQueryComponent implements OnInit {
    devId: string;
    bindStatus: any = {};
    constructor(public toastService: ToastService, public alinkService: AlinkService) {
        this.devId = '';
    }

    ngOnInit() {}

    getBindStatus() {
        if (this.devId == null || this.devId == '') {
            this.toastService.show('请输入标签Id');
            return;
        }

        this.alinkService.getBindStatus({ dev: this.devId }).subscribe((res) => {
            this.bindStatus = res.data;
        });
    }
}
