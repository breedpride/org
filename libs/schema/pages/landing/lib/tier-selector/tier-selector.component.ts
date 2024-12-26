import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Params, Router } from '@angular/router';

import { TIERS } from '@bp/core/consts';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import {
  MONTHLY_NUMBER,
  THREE_YEARLY_NUMBER,
  YEARLY_NUMBER,
} from './pricing.consts';
import { Tier } from './pricing.types';
import { ME } from '@bh/filter';

@Component({
  imports: [CommonModule, ButtonModule, InputNumberModule, ReactiveFormsModule],
  selector: 'bp-tier-selector',
  styles: [],
  templateUrl: './tier-selector.component.html',
})
export class TierSelectorComponent implements OnInit {
  tierDisabled(tier: Tier) {
    if (tier.isComingSoon) return true;
    if (tier.name === 'Supreme Patron' && !this.canStartPayment()) return true;
    return false;
  }
  destroyRef = inject(DestroyRef);
  canStartPayment = signal(true);
  ngOnInit(): void {
    this.customPrice.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.setBillingType(this.monthly);
        this.canStartPayment.set(this.customPrice.valid);
      });
  }
  tiers: Tier[] = TIERS;
  threeYearly: number = THREE_YEARLY_NUMBER;
  monthly: number = MONTHLY_NUMBER;
  yearly: number = YEARLY_NUMBER;
  @Input() billingType = signal(0);
  @Input() mode = 'pricing';
  router = inject(Router);
  @Input() queryParams!: Params;
  @Input() starTier = 0;
  customPrice: UntypedFormControl = new UntypedFormControl(20, [
    Validators.required,
    Validators.min(20),
    Validators.max(1000),
  ]);
  setBillingType(type: number) {
    this.billingType.set(type);
  }
  startCustomPayment(tier: { name: string }) {
    if (tier.name === 'Supreme Patron') {
      this.setBillingType(this.monthly);
    }

    this.startPayment(tier);
  }
  startPayment(tier: { name: any }) {
    const customPrice = this.customPrice.value;
    // for getStartee
    console.log(tier);
    console.log(tier.name === 'Free forever');
    if (tier.name === 'Free forever') {
      this.router.navigate(['/edit/', ME], {
        queryParams: { model: 'Settings' },
      });
    } else {
      this.router.navigate(['../', 'payments'], {
        queryParams: {
          ...this.queryParams,
          billingType: this.billingType(),
          customPrice,
          product: tier.name,
        },
      });
    }
  }
}
