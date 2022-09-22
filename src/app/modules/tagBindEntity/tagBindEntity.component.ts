import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlinkService } from 'src/app/services/alinkService';

@Component({
    selector: 'app-tagBindEntity',
    templateUrl: './tagBindEntity.component.html',
    styleUrls: ['./tagBindEntity.component.css'],
    providers: [MessageService]
})
export class TagBindEntityComponent implements OnInit {
    bindStatus: any = {};
    dev: string = '';
    constructor(public alinkService: AlinkService, private route: ActivatedRoute, private messageService: MessageService) {
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
            this.messageService.add({ severity: 'error', summary: 'Error', detail: '请输入标签Id' });
            return;
        }

        this.alinkService.getBindStatus({ dev: this.dev }).subscribe((res) => {
            this.bindStatus = res.data;
        });
    }

    bind() {
        if (this.bindStatus.dev == null || this.bindStatus.dev == '') {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: '请输入标签Id' });
            return;
        }
        let command = { ...this.bindStatus };
        command.devType = command.id;
        this.alinkService.bind(command).subscribe((res) => {
            this.messageService.add({ severity: 'success', summary: 'success', detail: '绑定成功！' });
        });
    }

    unbind() {
        this.alinkService.unbind(this.dev).subscribe((res) => {
            this.messageService.add({ severity: 'success', summary: 'success', detail: '解除绑定成功！' });
        });
    }
}
