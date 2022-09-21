import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    environment: {
        apiUrl: string;
    };
    constructor(private http: HttpClient) {
        this.environment = {
            apiUrl: 'http://192.168.137.249:8080/'
        };
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${this.environment.apiUrl}${path}`, { params });
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${this.environment.apiUrl}${path}`, body);
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${this.environment.apiUrl}${path}`, body);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.environment.apiUrl}${path}`);
    }
}
