import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'librarySort',
	pure: false
})
export class LibrarySortPipe implements PipeTransform {

	transform(array: Array<string>, args?: any): Array<string> {

		console.log('args', args);

		return array.sort(function(a, b){
			if(a[args.property] < b[args.property]){
				return -1 * args.order;
			}
			else if( a[args.property] > b[args.property]){
				return 1 * args.order;
			}
			else{
				return 0;
			}
		});
	}

}
