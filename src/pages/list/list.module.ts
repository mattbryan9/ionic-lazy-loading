import { NgModule } from '@angular/core';
import { ListPage} from './list';
import { IonicPageModule } from 'ionic-angular';
import { PlanetService } from '../../services/planet/planet.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ListPage],
  imports: [IonicPageModule.forChild(ListPage), HttpModule],
  providers: [PlanetService]
})
export class ListPageModule { }