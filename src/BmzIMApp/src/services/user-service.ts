import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {SOCKET_HOST} from "./constants";

export class UserService {
    static get parameters() {
        return [[Http]];
    }

    private static myUserDetail:{'userCode':'','Avatar':''};

    const_url:string;

	constructor(private http:Http) {
        this.const_url = "";//SOCKET_HOST
	}

    init(userDetail){
        UserService.myUserDetail = userDetail;
    }

    public static getMyUserDetail(){
        return UserService.myUserDetail;
    }
 
    getUsers(code) {
        var url = this.const_url+'/api/user/nearby/'+code;
        var response = this.http.get(url).map(res => res.json());
		return response;
    }

    getUserDetail(code){
        var url = this.const_url+'/api/user/detail/'+code;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    login(code,pwd){
        var url = this.const_url+'/api/user/login';
        var headers =  new Headers();
        headers.append("Content-Type","application/json");
        let params = JSON.stringify({"code":code,"pwd":pwd});
        let options = new RequestOptions({headers:headers});
        var response = this.http.post(url,params,options).map(res => res.json());
        return response;
    }
}