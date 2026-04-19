import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article, NewsResponse } from 'src/app/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll!: IonInfiniteScroll;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines()
      .subscribe((articles: Article[]) => {
        console.log(articles);
        this.articles.push(...articles);
        //.articles = [...articles, ...this.articles];
      });
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory('business', true)
      .subscribe(articles => {

        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
          return;
        }

        console.log('More articles for category', 'business', articles);
        this.articles = articles;
        this.infiniteScroll.complete();
      });
  }
}
