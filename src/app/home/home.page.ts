import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, Config } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bulbOutline, partlySunnyOutline,sunnyOutline } from 'ionicons/icons';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, HttpClientModule,],
  providers: [HomeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomePage implements OnInit{
  public uvData: any;
  public uvResult: any;
  constructor( private homeService: HomeService,) {
    addIcons({bulbOutline,partlySunnyOutline,sunnyOutline});
  }
  
  updateUv(){
    this.homeService.getUv().subscribe((data) => {
      this.uvData = data; 
      if(parseFloat(this.uvData.result.uv) > 3){
        this.uvResult = {
          advice: "Aangeraden om zonnebrand op te doen" };
      }
      else{
        this.uvResult = {
          advice: "U hoeft geen zonnebrand op"};
      };
    console.log(data)});

  };

  ngOnInit(): void {
    this.updateUv();    
  }
}
