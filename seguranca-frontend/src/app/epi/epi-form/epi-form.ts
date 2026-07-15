import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EpiService } from '../epi';
import { Router } from '@angular/router';
@Component({
  selector: 'app-epi-form',
  imports: [ReactiveFormsModule],
  templateUrl: './epi-form.html',
  styleUrl: './epi-form.scss',
})
export class EpiForm {
  private fb = inject(FormBuilder);
  private epiService = inject(EpiService);
  private router = inject(Router)
  formulario = this.fb.nonNullable.group({
    nome: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)
    ]],
    categoria: ['', Validators.required],
    ca: ['', [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ]]
  });

  salvar(): void {
    if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
    }
    this.epiService.cadastrar(this.formulario.getRawValue()).subscribe({
    next: () => this.router.navigate(['/epi']),
    error: (erro) => console.error('Erro ao cadastrar EPI:', erro)
    });
    }
}