import { Pipe, PipeTransform } from '@angular/core';
import { PublicAccount } from '@bh/types';

const DEFAULT_ACCOUNT_IMAGE = 'assets/images/pettypes/dog.jpeg';
@Pipe({
  name: 'accountAvatar',
  standalone: true,
})
export class AccountAvatarPipe implements PipeTransform {
  transform(account: PublicAccount): unknown {
    return account.AvatarUrl || DEFAULT_ACCOUNT_IMAGE;
  }
}
