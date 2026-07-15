import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-epi-detalhe',
  imports: [],
  templateUrl: './epi-detalhe.html',
  styleUrl: './epi-detalhe.scss',
})

export class EpiDetalhe implements OnInit {

  id: number = 0; 

constructor(private route: ActivatedRoute) { }​

ngOnInit() {  

  this.route.queryParams.subscribe(params => {   

    this.id = params['id'];​

  });
}

}