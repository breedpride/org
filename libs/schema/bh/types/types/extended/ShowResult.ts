import { PetInProject } from '@bh/entity/config';
import { PublicProject } from './Project';

export interface PublicShowResult extends PetInProject {
  Image: string; //thumb

  Project?: PublicProject;
}
