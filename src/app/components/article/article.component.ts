import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: false
})
export class ArticleComponent {


  @Input() article!: Article;
  @Input() index!: number;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing
  ) { }

  openArticle() {
    console.log('openArticle');

    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, '_blank');

  }

  async onOpenMenu() {
    console.log('onOpenMenu');

    const normalBtns: ActionSheetButton[] = [
      {
        text: 'Add to Favorites',
        icon: 'heart-outline',
        handler: () => {
          console.log('Add to Favorites clicked');
          this.onToggleFavorite();
        }
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    if (this.platform.is('capacitor')) {
      const shareBtn: ActionSheetButton = {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
          this.onShareArticle();
        }
      };

      normalBtns.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons: [
        ...normalBtns
      ]
    });

    await actionSheet.present();
  }

  onShareArticle() {
    console.log('onShareArticle');

    const { title, source, urlToImage, url } = this.article;

    this.socialSharing.share(
      title,
      source.name,
      urlToImage,
      url
    );
  }

  onToggleFavorite() {
    console.log('onToggleFavorite');
  }


}
