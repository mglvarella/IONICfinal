import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })

  export class toast {
    constructor(public toastController: ToastController) {}
    
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      await toast.present();
    }
  }

