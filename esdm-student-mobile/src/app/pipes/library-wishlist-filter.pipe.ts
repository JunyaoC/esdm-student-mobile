import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libraryWishlistFilter'
})
export class LibraryWishlistFilterPipe implements PipeTransform {

  transform(resource:any, toggle:any): any {

  	let output = []

  	if(!toggle) {
  		return resource;
  	}


  	for(let r of resource) {
  		if(r.addInWishlist) {
  			output.push(r);
  		}
  	}

    return output;
  }

}
