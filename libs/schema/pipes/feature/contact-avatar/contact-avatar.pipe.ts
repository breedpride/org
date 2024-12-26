import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '@bh/entity/config';
import { ContactPage } from '@bh/types';
const DEFAULT_CONTACT_IMAGE = 'assets/images/pettypes/dog.jpeg';
export const contactAvatarFn = (
  contact: Contact | ContactPage | undefined
): string =>
  contact ? contact.AvatarUrl || DEFAULT_CONTACT_IMAGE : DEFAULT_CONTACT_IMAGE;
@Pipe({
  name: 'contactAvatar',
  standalone: true,
})
export class ContactAvatarPipe implements PipeTransform {
  transform = (contact: Contact | ContactPage | undefined): string =>
    contactAvatarFn(contact);
}
