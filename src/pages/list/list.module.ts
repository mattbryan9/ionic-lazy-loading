import { NgModule } from '@angular/core';
import { ListPage} from './list';
import { IonicPageModule } from 'ionic-angular';
import { DataModule } from '../../data/data.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ListPage],
  imports: [IonicPageModule.forChild(ListPage), HttpModule, DataModule, SharedModule],
})
export class ListPageModule { }