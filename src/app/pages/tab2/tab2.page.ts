import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, SegmentChangeEventDetail } from '@ionic/angular';
import { IonInfiniteScrollCustomEvent, IonSegmentCustomEvent } from '@ionic/core';
import { NewsService } from '../../services/news.service';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll!: IonInfiniteScroll;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getTopHeadlinesByCategory(this.selectedCategory);
  }

  private getTopHeadlinesByCategory(category: string) {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
      console.log('Articles for category', this.selectedCategory, articles);
      this.articles = [...articles];
    });
  }

  segmentChanged(event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    console.log('Segment changed', event.detail.value);
    this.selectedCategory = event.detail.value as string;
    this.getTopHeadlinesByCategory(this.selectedCategory);
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory, true)
      .subscribe(articles => {

        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
          return;
        }

        console.log('More articles for category', this.selectedCategory, articles);
        this.articles = articles;
        this.infiniteScroll.complete();
      });
  }
}
