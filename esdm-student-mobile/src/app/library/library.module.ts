import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';
import { NgSearchFilterModule } from 'ng-search-filter';
import { PipesModule } from '../pipes/pipes.modules';
import { ClipboardModule } from '@angular/cdk/clipboard'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    PipesModule,
    NgSearchFilterModule,
    ClipboardModule
  ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}
