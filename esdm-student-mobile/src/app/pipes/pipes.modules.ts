import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LibraryCategoryFilterPipe } from './library-category-filter.pipe';
import { LibraryWishlistFilterPipe } from './library-wishlist-filter.pipe';
import { LibrarySortPipe } from './library-sort.pipe';

@NgModule({
  declarations: [LibraryCategoryFilterPipe,LibraryWishlistFilterPipe,LibrarySortPipe],
  imports: [IonicModule],
  exports: [LibraryCategoryFilterPipe,LibraryWishlistFilterPipe,LibrarySortPipe]
})
export class PipesModule {}