import { Component, Input } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: 'article.component.html'
})
export class ArticleComponent {
  @Input() public text: string;
  @Input() public title: string;
  constructor() { }
}