import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NgSearchFilterService } from 'ng-search-filter';
import { DomSanitizer } from '@angular/platform-browser';
import { UserServiceService } from '../user-service.service';
import { ToastController } from '@ionic/angular';
import { Clipboard } from "@angular/cdk/clipboard"
import { Router } from '@angular/router';

@Component({
	selector: 'app-library',
	templateUrl: './library.page.html',
	styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

	server : string = 'http://localhost/php-folder/';

	resourceArray : any;

	searchKeyword : any = '';
	selectedCategory : any = '';
	categoryArray : any = [];

	wishlistArray : any = [];

	constructor(private _ngSearchFilterService: NgSearchFilterService, public sanitizer: DomSanitizer, public us:UserServiceService, private toastController:ToastController, private clipboard: Clipboard, private router:Router) {
		this._ngSearchFilterService.setDefaultLang('en');
	}

	ngOnInit() {
		this.initFetching();
	}

	initFetching() {
		Promise.all([this.fetchCategory(),this.fetchResource(),this.fetchWishlist()]).then((data:any) => {
			console.log(data);

			for(let resource of this.resourceArray) {
				for(let wish of this.wishlistArray) {
					if(wish.u_id == this.us.currentUserData.u_id && wish.r_id == resource.r_id) {
						resource['addInWishlist'] = true;
					}
				}
			}

			console.log(this.resourceArray, this.wishlistArray, this.categoryArray, this.us.currentUserData);
		})
	}


	fetchWishlist() {
		return new Promise((resolve:any) => {
			let body = {
				action: 'read_wishlist'
			}

			axios.post(this.server + 'library/wishlist.php', JSON.stringify(body)).then((res:any) => {
				console.log(res);

				resolve(true);
				if(res.data.success) {
					this.wishlistArray = [];
					for(let d of res.data.response) {
						d['addInWishlist'] = false;
						this.wishlistArray.push(d);
					}
				} else {

				}

			})
		})
	}


	fetchCategory() {
		return new Promise((resolve:any) => {
			let body = {
				action: 'read_category'
			}

			axios.post(this.server + 'library/category.php', JSON.stringify(body)).then((res:any) => {
				console.log(res);

				resolve(true);
				if(res.data.success) {
					this.categoryArray = res.data.response;
				} else {

				}

			})
		})
	}


	fetchResource() {
		return new Promise((resolve:any) => {
			let body = {
				action: 'read_resource'
			}

			axios.post(this.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
				console.log(res);

				resolve(true);
				if(res.data.success) {
					this.resourceArray = res.data.response;
				} else {

				}

			})
		})
	}



	onCategoryChange(event) {
		this.selectedCategory = event.detail.value;
	}


	openURL(url:any){
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

	addToWishlist(resource) {

		console.log(this.us.currentUserData);

		let body = {
			r_id : resource.r_id,
			u_id : this.us.currentUserData.u_id,
			action : 'create_wishlist'
		}

		axios.post(this.server + 'library/wishlist.php', JSON.stringify(body)).then((res:any) => {
			console.log(res);
			this.initFetching();
			if(res.data.success) {
				this.presentToast('Saved to Wishlist ❤.', 'success');
			} else {

			}

		})

	}

	removeFromWishlist(resource) {
		console.log(this.us.currentUserData);

		let body = {
			r_id : parseInt(resource.r_id),
			u_id : parseInt(this.us.currentUserData.u_id),
			action : 'delete_wishlist'
		}

		console.log(body);

		axios.post(this.server + 'library/wishlist.php', JSON.stringify(body)).then((res:any) => {
			console.log(res);
			this.initFetching();
			if(res.data.success) {
				this.presentToast('Removed From Wishlist.', 'secondary');
			} else {

			}

		})
	}


	openResource(url) {
		window.open(url, '_blank');
	}

	copyURL(url:any) {
		this.clipboard.copy(url);
		this.presentToast('Copied!', 'primary');
	}


	back() {
		this.router.navigate(['/home']);
	}


	async presentToast(message:any ,color:any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}

}
