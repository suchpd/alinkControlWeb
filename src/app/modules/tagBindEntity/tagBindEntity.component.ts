import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastProxyComponent } from 'src/app/components/toastProxy/toastProxy.component';
import { AlinkService } from 'src/app/services/alinkService';

@Component({
    selector: 'app-tagBindEntity',
    templateUrl: './tagBindEntity.component.html',
    styleUrls: ['./tagBindEntity.component.css']
})
export class TagBindEntityComponent implements OnInit {
    bindStatus: any = {};
    dev: string = '';
    constructor(public alinkService: AlinkService, private route: ActivatedRoute, private toastProxy: ToastProxyComponent) {
        this.route.queryParams.subscribe((queryParams) => {
            let data = queryParams['dev'];
            if (data) {
                this.dev = data;
            }
        });
    }

    ngOnInit() {
        this.getBindStatus();
    }

    getBindStatus() {
        if (this.dev == null || this.dev == '') {
            this.toastProxy.showError('请输入标签Id');
            return;
        }

        this.alinkService.getBindStatus({ dev: this.dev }).subscribe((res) => {
            this.bindStatus = res.data;
        });
    }

    bind() {
        if (this.bindStatus.dev == null || this.bindStatus.dev == '') {
            this.toastProxy.showError('请输入标签Id');
            return;
        }
        let command = { ...this.bindStatus };
        command.devType = command.id;
        this.alinkService.bind(command).subscribe((res) => {
            this.toastProxy.showSuccess('绑定成功！');
        });
    }

    unbind() {
        this.alinkService.unbind(this.dev).subscribe((res) => {
            this.toastProxy.showSuccess('解除绑定成功！');
        });
    }
}
