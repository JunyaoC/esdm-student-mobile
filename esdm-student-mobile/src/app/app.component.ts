import { Component, NgZone  } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Platform, NavController } from '@ionic/angular';
import { UserServiceService } from './user-service.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { AttendancePage } from './attendance/attendance.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private storage: Storage,
		public navCtrl: NavController,
		private us:UserServiceService,
		private platform: Platform,
		private deeplinks: Deeplinks,
		private router:Router,
		private zone: NgZone
		) {

		this.storage.create();
		// this.storage.get('storage_xxx').then((res:any) => {

		// 	if(res == null) {
		// 		this.navCtrl.navigateRoot('/login');
		// 	} else {
		// 		this.us.currentRole = res;
		// 		// this.navCtrl.navigateRoot('/home');
		// 	}
		// })

		this.platform.ready().then(() => {
      this.deeplinks.route({
        '/attendance': '/attendance',
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
        this.zone.run(() => {
      this.router.navigate([match.$route],{queryParams:{...match.$args}})
    });
        
      },
      (nomatch) => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
    });


	}




}
