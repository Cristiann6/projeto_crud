import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class TreinamentoRepository {

    findAll() {

        const dados = fs.readFileSync(
            './bd/treinamento.json',
            'utf8'
        );

        return JSON.parse(dados);
    }
    findById(id: number) {
        const treinamentos = this.findAll();
        return treinamentos.find((treinamento) => treinamento.id === id);
    }

    create(treinamento: any) {
        const treinamentos = this.findAll();
        const novoId = treinamentos.length > 0
            ? Math.max(...treinamentos.map(e => e.id)) + 1
            : 1;
        const novotreinamento = { id: novoId, ...treinamento };
        treinamentos.push(novotreinamento);
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return novotreinamento;
    }

    delete(id: number) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos.splice(idx, 1);
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }

    update(id: number, treinamento: any) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos[idx] = { id, ...treinamento };
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }
    patch(id: number, treinamento: any) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos[idx] = { ...treinamentos[idx], ...treinamento };
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }
}
