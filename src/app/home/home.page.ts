import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filmes:any = [];
  destaque:any = [];

  constructor(private alertController: AlertController,
    private rota: Router,
    private filmesservice: FilmesService) {}
  
   async ngOnInit()
    {
      console.log('passo no home');
      //this.carregarFilme();
      this.filmesservice.getProductions();
      this.carregarFilmes();  
    }
      
    async carregarFilmes(){
      this.filmes  = await this.filmesservice.getProductions();
      console.log("filmes carregados", this.filmes)
      const [firstKey] = Object.keys(this.filmes);
      this.destaque = this.filmes[firstKey];
      this.filmes.splice(firstKey, 1)
      console.log('firstKey',firstKey)
      console.log('destaque',this.destaque)
      console.log('filmes',this.filmes)
    }



  detalhesFilme(id)
  {
    console.log("passou"+id);
    this.rota.navigate(['/detalhesfilme',{id:id}])
   // this.detalhesfilme.pegarFilmes(paramID)
  }
  pegaDetalls()
  {
    this.rota.navigate(['/detalhesfilme'])

  }
  pageHome()
  {
    this.rota.navigate(['/home'])

  }
  


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });
  
  
  


    await alert.present();
  }

}
