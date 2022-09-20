import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../toast-service';

@Component({
    selector: 'app-toast-global',
    templateUrl: './toast-global.component.html',
    styleUrls: ['./toast-global.component.css']
})
export class ToastGlobalComponent implements OnInit, OnDestroy {
    ngOnInit() {}
    constructor(public toastService: ToastService) {}

    showStandard() {
        this.toastService.show('I am a standard toast');
    }

    showSuccess() {
        this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    }

    showDanger(dangerTpl: string | TemplateRef<any>) {
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
    }

    ngOnDestroy(): void {
        this.toastService.clear();
    }
}
