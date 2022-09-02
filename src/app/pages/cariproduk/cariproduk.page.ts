import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cariproduk',
  templateUrl: './cariproduk.page.html',
  styleUrls: ['./cariproduk.page.scss'],
})
export class CariprodukPage implements OnInit {
  cari: any = localStorage.getItem("search");
  produk: any = [];

  constructor(
    private getapi: GetapiService,
    private alert: AlertService,
    private loading: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loadProduk();
  }

  async loadProduk(){
    const loadings = await this.loading.create({
      message: 'Mencari produk...',
      spinner: 'circular'
    });
    await loadings.present();
    this.getapi.cariProduk(this.cari).subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.produk = res['result'];
      }else{
        this.alert.presentToast("gagal memuat produk");
      }
    });
  }

}
