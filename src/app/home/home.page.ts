import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  splash = true;


  constructor(  private platform: Platform,
    private splashScreen: SplashScreen) {


   
  }

  ionViewDidEnter() {
    setTimeout(() => {
      if(this.platform.is('cordova')  || this.platform.is('android')){
        this.splashScreen.hide();
      }
    }, 300)
  }
}

