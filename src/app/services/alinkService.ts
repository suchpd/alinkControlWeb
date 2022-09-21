import { Injectable } from '@angular/core';
import { ApiService } from './apiService';

@Injectable({
    providedIn: 'root'
})
export class AlinkService {
    constructor(private apiService: ApiService) {}

    getBindStatus(params: any) {
        return this.apiService.get(`logistics/getBindStatus`, params);
    }

    bind(params: any) {
        return this.apiService.post('logistics/bind', params);
    }

    unbind(dev: string) {
        return this.apiService.get(`logistics/unbind?dev=${dev}`);
    }
}
