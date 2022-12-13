import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhesfilme',
  templateUrl: './detalhesfilme.page.html',
  styleUrls: ['./detalhesfilme.page.scss'],
})
export class DetalhesfilmePage implements OnInit {

  filmes:any = []
  codigo:number =0;
  constructor(
    private filmesService:FilmesService,
    private rota:Router,
    private router:ActivatedRoute) { }

  async ngOnInit() 
  {
    this.router.params.subscribe (params=> {this.carregarFilmesDetalhes(params['id'])})
  }

    async carregarFilmesDetalhes(id)
    {
      this.filmes  = await this.filmesService.getDetalhesFilmes(id);
      console.log("filmes carregados", this.filmes)
  }


}
