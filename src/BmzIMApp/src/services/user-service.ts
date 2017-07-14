import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class UserService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    getUsers() {
        var url = '/';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }
}