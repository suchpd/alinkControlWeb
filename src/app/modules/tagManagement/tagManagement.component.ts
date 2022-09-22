import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/components/toast-service';
import { ToastProxyComponent } from 'src/app/components/toastProxy/toastProxy.component';
import { AlinkService } from 'src/app/services/alinkService';

@Component({
    selector: 'app-tagManagement',
    templateUrl: './tagManagement.component.html',
    styleUrls: ['./tagManagement.component.css'],
    providers: [MessageService]
})
export class TagManagementComponent implements OnInit {
    devId: any;
    devs: any;
    status: any = '1';
    bindStatus: any = {};
    qrCodeValue: string = '';
    constructor(
        public toastService: ToastService,
        public alinkService: AlinkService,
        private messageService: MessageService
    ) // private toastProxy: ToastProxyComponent
    {}

    ngOnInit() {}

    getBindStatus() {
        if (this.devId == null || this.devId == '') {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: '请输入标签Id' });
            return;
        }

        this.alinkService.getBindStatus({ dev: this.devId }).subscribe((res) => {
            this.bindStatus = res.data;
            this.qrCodeValue = JSON.stringify(res.data);

            this.qrCodeValue = 'http://alinkWeb.frp.xama.vip/tag_bind_entity?showTab=false&dev=' + this.devId;
        });
    }

    batchActivateDevs() {
        if (this.devs == null || this.devs == undefined) {
            return;
        }
    }
}
