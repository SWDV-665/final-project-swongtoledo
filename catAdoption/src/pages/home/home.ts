import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {

     this.isAndroid = platform.is('android');

  }


  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Yay! You adopted me',
      buttons: ['Ok']
    });
    alert.present()
  }


  sponsorAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Sponser Friend!',
      message: 'Thank you for sponsering me, Your donation will make my life so much better',
      buttons: ['Ok']
    });
    alert.present()
  }

}
