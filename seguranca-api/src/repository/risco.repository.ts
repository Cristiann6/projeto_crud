
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class RiscoRepository {

    findAll() {

        const dados = fs.readFileSync(
            './bd/risco.json',
            'utf8'
        );
   
        return JSON.parse(dados);
    }
    findById(id: number) {
        const riscos = this.findAll();
        return riscos.find((risco) => risco.id === id);
    }

   
    create(risco: any) {
        const riscos = this.findAll();
        const novoId = riscos.length > 0
            ? Math.max(...riscos.map(e => e.id)) + 1
            : 1;
        const novorisco = { id: novoId, ...risco };
        riscos.push(novorisco);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return novorisco;
    }

    delete(id: number) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos.splice(idx, 1);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }

    update(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos[idx] = { id, ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }
    patch(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos[idx] = { ...riscos[idx], ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }
}
