import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpiDetalhe } from '../epi-detalhe/epi-detalhe';
import { Epi } from '../epi.model';
import { EpiService } from '../epi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-epi-list',
  imports: [RouterModule, EpiDetalhe, CommonModule],
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.scss',
})
export class EpiList implements OnInit {
  epis: Epi[] = [];
  constructor(private epiService: EpiService) { }
  ngOnInit(): void {
    this.epiService.listar().subscribe({
      next: (epis) => this.epis = epis,
      error: (error) => console.error('Erro ao listar os EPIs:', error)
    });
  }
}


