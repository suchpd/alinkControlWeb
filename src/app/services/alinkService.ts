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
}
