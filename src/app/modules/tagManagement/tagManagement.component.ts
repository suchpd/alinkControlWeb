import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/components/toast-service';
import { AlinkService } from 'src/app/services/alinkService';

@Component({
    selector: 'app-tagManagement',
    templateUrl: './tagManagement.component.html',
    styleUrls: ['./tagManagement.component.css']
})
export class TagManagementComponent implements OnInit {
    devId: any;
    devs: any;
    status: any = '1';
    bindStatus: any = {};
    qrCodeValue: string = '';
    constructor(public toastService: ToastService, public alinkService: AlinkService) {}

    ngOnInit() {}

    getBindStatus() {
        if (this.devId == null || this.devId == '') {
            this.toastService.show('请输入标签Id');
            return;
        }

        this.alinkService.getBindStatus({ dev: this.devId }).subscribe((res) => {
            this.bindStatus = res.data;
            this.qrCodeValue = JSON.stringify(res.data);

            // this.qrCodeValue = '标签Id：' + res.data.dev + '\n' + '换行';
            // this.qrCodeValue = 'http://www.baidu.com';
        });
    }

    batchActivateDevs() {
        if (this.devs == null || this.devs == undefined) {
            return;
        }
    }
}
