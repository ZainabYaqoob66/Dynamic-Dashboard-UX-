// shared/shared.config.ts
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TranslateModule } from '@ngx-translate/core';

export const sharedConfig = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  FormlyBootstrapModule
];

