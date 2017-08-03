import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class UserService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    getUsers() {
        var url = '/api/user/nearby';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }

    login(code,pwd){
        var url = '/api/user/login';
        var headers =  new Headers();
        headers.append("Content-Type","application/json");
        headers.append("code",code);
        headers.append("pwd",pwd);
        let options = new RequestOptions({headers:headers});
        var response = this.http.get(url,options).map(res => res.json());
        return response;
    }
}