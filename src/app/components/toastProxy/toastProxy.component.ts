import { Component, Injectable, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastProxyComponent {
    constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

    showSuccess(message: string) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
    }

    showInfo(message: string) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: message });
    }

    showWarn(message: string) {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: message });
    }

    showError(message: string) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }

    showTopLeft(message: string) {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: message });
    }

    showTopCenter(message: string) {
        this.messageService.add({ key: 'tc', severity: 'info', summary: 'Info', detail: message });
    }

    showBottomCenter(message: string) {
        this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: message });
    }

    showConfirm(message: string) {
        this.messageService.clear();
        this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    }

    // showMultiple(messages: string[]) {
    //     let messageList = [];
    //     this.messageService.addAll([
    //         { severity: 'info', summary: 'Message 1', detail: message },
    //         { severity: 'info', summary: 'Message 2', detail: message },
    //         { severity: 'info', summary: 'Message 3', detail: message }
    //     ]);
    // }

    showSticky(message: string) {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: message, sticky: true });
    }

    onConfirm() {
        this.messageService.clear('c');
    }

    onReject() {
        this.messageService.clear('c');
    }

    clear() {
        this.messageService.clear();
    }
}
