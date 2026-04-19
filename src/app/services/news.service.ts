import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewsResponse, Article, ArticlesByCategoryAndPage, QueryParams } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private apiKey = environment.apiKey;
  private urlApi = environment.urlApi;
  private articlesByCategoryAndPage: ArticlesByCategoryAndPage = {};

  constructor(private http: HttpClient) { }

  private executeQuery<T>(endpoint: string, params: QueryParams = {}): Observable<T> {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.urlApi}${endpoint}`, {
      params: {
        apiKey: this.apiKey,
        ...params,
      }
    })
  }

  private getArticlesByCategory(category: string): Observable<Article[]> {
    //if (Object.keys(this.articlesByCategoryAndPage[category] )) {
    if (Object.keys(this.articlesByCategoryAndPage).includes(category)) {
      // ya existe
      //this.articlesByCategoryAndPage[category].page += 1;
    } else {
      // no existe
      this.articlesByCategoryAndPage[category] = {
        page: 0,
        articles: []
      }
    }

    const page = this.articlesByCategoryAndPage[category].page + 1;

    return this.executeQuery<NewsResponse>('/top-headlines', {
      category,
      page,
    }).pipe(
      map(({ articles }: NewsResponse) => {
        if (articles.length === 0) return this.articlesByCategoryAndPage[category].articles;

        this.articlesByCategoryAndPage[category] = {
          page,
          articles: [...this.articlesByCategoryAndPage[category].articles, ...articles]
        }
        return this.articlesByCategoryAndPage[category].articles;
      })
    );
  }

  getTopHeadlines(): Observable<Article[]> {
    return this.getArticlesByCategory('business');
  }

  // getTopHeadlines(): Observable<Article[]> {
  //   return this.executeQuery<NewsResponse>('/top-headlines', {
  //     country: 'us',
  //     category: 'business',
  //   }).pipe(
  //     map(({ articles }: NewsResponse) => articles)
  //   );
  // }

  getTopHeadlinesByCategory(category: string, loadMore: boolean = false): Observable<Article[]> {

    if (loadMore) {
      return this.getArticlesByCategory(category);
    }

    if (this.articlesByCategoryAndPage[category]) {
      // of convierte en observable lo que se pasa por argumento
      return of(this.articlesByCategoryAndPage[category].articles);
    }

    return this.getArticlesByCategory(category);

    // return this.executeQuery<NewsResponse>('/top-headlines', {
    //   category,
    // }).pipe(
    //   map(({ articles }: NewsResponse) => articles)
    // );
  }

}
