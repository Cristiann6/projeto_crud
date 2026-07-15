import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList, EpiDetalhe, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  titulo = "Sistema de controle de EPIs";
  subtitulo = "Gestão de segurança do trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individal";
  
}
