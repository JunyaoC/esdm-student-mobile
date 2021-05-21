import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import axios from 'axios';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import QrcodeDecoder from 'qrcode-decoder';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  attendance_records:any = []

  constructor(
    private router:Router,
    public userService:UserServiceService,
    public loadingController: LoadingController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    private route:ActivatedRoute,
    private zone: NgZone,
    public toastController: ToastController
    ) { }

  ngOnInit() {

    this.fetchAttendance(0);


    this.route.queryParamMap.subscribe(params => {
      let data = params.get("d");
      if(data){

        this.signAttendance(data)
      }
    });
    
  }

  ionViewDidEnter(){

  }

  fetchAttendance(event){
    let body = {
      u_id: '2',
      action:'list_attendance',
    }

    axios.post(this.server + '/attendance/attendance-student.php', JSON.stringify(body)).then((res:any) => {
      this.attendance_records = [...res.data.attendance]
      this.attendance_records.forEach( _r => {
        _r.attendance_timestamp = moment(_r.attendance_timestamp).add(8,'hours')
      })

      if(event != 0){
        event.target.complete();
      }
    })

  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  openCamera(){
  	// console.log(this.userService.currentUserData)

    // this.signAttendance(0)

    this.barcodeScanner.scan().then(barcodeData => {
      this.signAttendance(barcodeData.text)
    }).catch(err => {
      console.log('Error', err);
    });


  }

  pickPicture(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 100,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      var canvas:any = document.getElementById("c");
      var ctx = canvas.getContext("2d");

      var image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);

        var qr = new QrcodeDecoder();

        qr.decodeFromImage(image).then((res) => {
          this.signAttendance(res.data)
        });

      };
      
      image.src = base64Image;

      


    }, (err) => {
      // Handle error
      console.log(err)
    });

  }

  async signAttendance(data){

    console.log(data)

    if(data){

      let parsedData = JSON.parse(data)

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Signing Attendance',
        duration: 2000
      });
      
      await loading.present();


      let body = {
        action:'sign_attendance',
        u_id: '2',
        class_id: parsedData.class_id,
      }


      axios.post(this.server + '/attendance/attendance-student.php', JSON.stringify(body)).then((res:any) => {
        if(res.data.success){
          this.presentToast(res.data.msg,"success")
        }else{
          this.presentToast(res.data.msg,"warning")
        }
        this.loadingController.dismiss();
        this.fetchAttendance(0);
        this.router.navigate(['.'], { relativeTo: this.route } );
      })


    }

  }

  viewSchedule(){
    this.router.navigate(['./class-schedule'], { relativeTo: this.route } );
  }

  async presentToast(_msg,_color) {
    const toast = await this.toastController.create({
      message: String(_msg),
      duration: 2000,
      color:_color
    });
    toast.present();
  }

}

