import { inject, Injectable } from '@angular/core';
import { EmptyFieldConfig } from '@bh/superfield';
import { Breed, PetType } from '@bh/entity/config';
import { FIELD_NAMES_LOOKUP_MINIMUN } from '@bh/filtering';
import {
  byAny,

  kennelByOwner,
} from '@bh/filter';
import { merge } from 'lodash-es';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiHelper {
  api = inject(ApiService);

  getOwnerKennels(ownerId: string) {
    const config = merge({}, EmptyFieldConfig, {
      entitiesColumns: FIELD_NAMES_LOOKUP_MINIMUN,
      entitySchemaName: 'Account',
      id: 'Account',
    });
    return this.api.selectTopOne(config, kennelByOwner(ownerId));
  }

  async getBreedPetType(breedId: string): Promise<any> {
    const config = merge({}, EmptyFieldConfig, {
      entitiesColumns: ['PetType', 'PetType.Name'],
      entitySchemaName: 'Breed',
      id: 'Pet',
    });
    let petType;
    try {
      // TODO rework with selector for top1
      const result = await this.api
        .selectTopOne<{ PetType: PetType }>(config, byAny('Id', breedId))
        .toPromise();
      console.log(result);
      if (result) {
        petType = result['PetType'];
      }
      console.log(petType);
      return petType;
    } catch (error) {
      // Handle any errors that may occur during the API call
      console.error(error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  async getPetBreed(petId: string): Promise<any> {
    const config = merge({}, EmptyFieldConfig, {
      entitiesColumns: ['Breed'],
      entitySchemaName: 'Pet',
      id: 'Pet',
    });
    let breedId;
    try {
      // TODO rework with selector for top1
      const result = await this.api
        .selectTopOne<{ Breed: Breed }>(config, byAny('Id', petId))
        .toPromise();
      console.log(result);
      if (result) {
        breedId = result['Breed']?.Id;
      }
      // console.log(breedId);
      return breedId;
    } catch (error) {
      // Handle any errors that may occur during the API call
      console.error(error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
}
