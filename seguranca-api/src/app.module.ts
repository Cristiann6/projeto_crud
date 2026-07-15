import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.contoller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento.service';
import { TreinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';
import { RiscoRepository } from './repository/risco.repository';
import { RiscoService } from './service/risco.service';
import { RiscoController } from './controller/risco.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, RiscoController],
  providers: [AppService,  EpiRepository, TreinamentoService, TreinamentoRepository, RiscoService, RiscoRepository ],
})
export class AppModule {}
