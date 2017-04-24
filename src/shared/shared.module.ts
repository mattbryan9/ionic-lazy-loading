import { NgModule } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
@NgModule({
	declarations: [ArticleComponent],
	exports: [ArticleComponent]
})
export class SharedModule { }