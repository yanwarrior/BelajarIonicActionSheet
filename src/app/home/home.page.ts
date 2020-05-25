import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  actionSheet: any;

  constructor(
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
      this.actionSheet = this.actionSheetController.create({
        header: 'Aksi',
        buttons: [{
          text: 'Hapus',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Hapus diklik');
          }
        }, {
          text: 'Bagikan',
          icon: 'share',
          handler: () => {
            console.log('Bagikan diklik');
          }
        }, {
          text: 'Mainkan (buka popup)',
          icon: 'play',
          handler: () => {
            console.log('Mainkan diklik');
          }
        }, {
          text: 'Suka',
          icon: 'heart',
          handler: () => {
            console.log('Suka dikil');
          }
        }, {
          text: 'Batal',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Batal diklik');
          }
        }]
      })
        .then(actionsheet => {
          actionsheet.present();
        });
  }
}
