import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from '../service/epi.service';
import { RiscoService } from 'src/service/risco.service';

@Controller('risco')
export class RiscoController {
  constructor(private readonly appService: RiscoService) { }

  @Get()
  getDados() {
    return this.appService.getDados()
  }

  @Get(':id')
  getEpi(@Param('id') id: string) {
    return this.appService.getEpiById(Number(id));

  }

  @Post() // responde ao POST /epis
  create(@Body() body: { nome: string; tipo: string }) {
    return this.appService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { return this.appService.delete(Number(id)); }

  @Put(':id') // → PUT Exemplo/epis/42 
  update(@Param('id') id: string, @Body() body: any) { return this.appService.update(Number(id), body); }
  @Patch(':id') // → PATCH Exemplo /epis/42 
  patch(@Param('id') id: string, @Body() body: any) {
    return this.appService.patch(Number(id), body);
  }

}