import { Injectable } from '@nestjs/common'
import { RiscoRepository } from 'src/repository/risco.repository';

@Injectable()
export class RiscoService {
  
  constructor(private repository: RiscoRepository) { }

  getHello(): string {
    return 'Alô mundo!';
  }
  getDados() {
    return this.repository.findAll();

  }
  getEpiById(id: number) {
    return this.repository.findById(id);
  }

  create(epi: any) { return this.repository.create(epi); }
  delete(id: number) { return this.repository.delete(id); }

  update(id: number, epi: any) { return this.repository.update(id, epi); }
  patch(id: number, epi: any) { return this.repository.patch(id, epi); }

}