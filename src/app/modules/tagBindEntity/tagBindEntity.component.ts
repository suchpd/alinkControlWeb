import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlinkService } from 'src/app/services/alinkService';

@Component({
    selector: 'app-tagBindEntity',
    templateUrl: './tagBindEntity.component.html',
    styleUrls: ['./tagBindEntity.component.css']
})
export class TagBindEntityComponent implements OnInit {
    bindStatus: any = {};
    dev: string = '';
    constructor(public alinkService: AlinkService, private route: ActivatedRoute) {
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
            return;
        }

        this.alinkService.getBindStatus({ dev: this.dev }).subscribe((res) => {
            this.bindStatus = res.data;
        });
    }

    bind() {
        let command = { ...this.bindStatus };
        command.devType = command.id;
        this.alinkService.bind(command).subscribe((res) => {});
    }

    unbind() {
        this.alinkService.unbind(this.dev).subscribe((res) => {});
    }
}
