
export class ToolHelper {  
 
	constructor() {
		
	}

  getSexName(sex){
    return sex == 0?"女":"男";
  }

  getAge(birthday){
    var now = new Date();
    var date = new Date(birthday);
    return (now.getFullYear() - date.getFullYear())+"岁";
  }
}