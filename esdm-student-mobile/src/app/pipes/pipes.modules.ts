import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LibraryCategoryFilterPipe } from './library-category-filter.pipe';
import { LibraryWishlistFilterPipe } from './library-wishlist-filter.pipe';

@NgModule({
  declarations: [LibraryCategoryFilterPipe,LibraryWishlistFilterPipe],
  imports: [IonicModule],
  exports: [LibraryCategoryFilterPipe,LibraryWishlistFilterPipe]
})
export class PipesModule {}