import { Component, OnInit } from '@angular/core';
import { faShippingFast,faBox,faBoxes } from '@fortawesome/free-solid-svg-icons';
import { GetapiService } from 'src/app/services/getapi.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detailpesanan',
  templateUrl: './detailpesanan.page.html',
  styleUrls: ['./detailpesanan.page.scss'],
})
export class DetailpesananPage implements OnInit {
  shipping = faShippingFast;
  box = faBox;
  boxes = faBoxes;
  produk:any = [];
  id: string;
  alamat: any;
  harga: any;
  ongkir: any;
  total: any;
  status: any = 0;
  paket: any;
  kurir: any;

  constructor(
    private getapi: GetapiService,
    private activatedRoute: ActivatedRoute,
    private loding: LoadingController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.openDetail();
  }

  async openDetail(){
    const lod = await this.loding.create({
      message: "loading...",
      spinner: "crescent"
    });
    lod.present();
    
    this.getapi.pesananSingle(this.id).subscribe(res=>{
      lod.dismiss();
      this.produk = res['produk'];
      this.alamat = res['data']['alamat'];
      this.harga = res['data']['harga'];
      this.ongkir = res['data']['ongkir'];
      this.paket = res['data']['paket'];
      this.kurir = res['data']['kurir'];
      this.total = res['data']['total'];
      this.status = res['data']['status'];
    });
  }

}
