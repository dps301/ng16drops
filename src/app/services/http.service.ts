import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    public server_addr = 'http://form16.cafe24app.com/v';
    // public server_addr = 'http://127.0.0.1:3100/v';

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    apikey = 'l7xx9c5343035508484aba02d77569cb40fc';

    public post(url: string, body = {}, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        // parameters.set('apikey', this.apikey);
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.post(this.server_addr + url, body, this.options);
    }

    public put(url: string, body = {}, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        // parameters.set('apikey', this.apikey);
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.put(this.server_addr + url, body, this.options);
    }

    public delete(url: string, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        // parameters.set('apikey', this.apikey);
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.delete(this.server_addr + url, this.options);
    }

    public get(url: String, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        // parameters.set('apikey', this.apikey);
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.get(this.server_addr + url, this.options);
    }
}
