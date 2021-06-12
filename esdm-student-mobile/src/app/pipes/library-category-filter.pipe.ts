import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'libraryCategoryFilter'
})
export class LibraryCategoryFilterPipe implements PipeTransform {

	transform(resource: any, category: any): any {

		if(category == '') {
			return resource;
		}

		let output = [];

		for(let res of resource) {
			if(res.r_category == category) {
				output.push(res);
			}
		}

		return output;

	}

}
