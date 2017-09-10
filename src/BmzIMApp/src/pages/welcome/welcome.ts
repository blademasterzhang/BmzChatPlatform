import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  slides = [
    {
      title: "百里玄策",
      description: "玄策应该优先选择穿透铭文搭配暗影战斧，针对后排进行突进输出。",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "百里守约",
      description: "物理攻击和物理穿透提升前期输出能力，移动速度保证游走逃脱能力。",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "王昭君",
      description: "法术攻击的叠加，提高昭君带线能力，前期较有优势，达到四级时就可以带走敌方中单，或者边路支援打野抓人。CD的缩减主要针对后期，可以使昭君技能频繁使用，进行消耗。吸血效果可以很好的提升线上续航能力。",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

constructor(public navCtr: NavController){ 
    }
    
  goToLogin(){
        this.navCtr.setRoot(LoginPage);
    }
}