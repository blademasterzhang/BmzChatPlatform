import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { AboutPage } from '../pages/about/about';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { MessagePage } from '../pages/message/message';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DynamicPage } from '../pages/dynamic/dynamic';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WelcomePage,
    ContactPage,
    HomePage,
    ChatPage,
    MessagePage,
    TabsPage,
    LoginPage,
    DynamicPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WelcomePage,
    ContactPage,
    HomePage,
    ChatPage,
    MessagePage,
    TabsPage,
    LoginPage,
    DynamicPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
