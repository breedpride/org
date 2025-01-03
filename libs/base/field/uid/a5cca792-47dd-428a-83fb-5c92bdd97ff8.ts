 
import { Name_FieldName } from '@base-field-name';
import { MediumText  } from '@base-field-type';

const field = [
  Name_FieldName,
  MediumText,
  {label: 'Full name'} as const,
  {required: true } as const,
   
  {uId: 'a5cca792-47dd-428a-83fb-5c92bdd97ff8'} as const
  ] as const
export default field;
  