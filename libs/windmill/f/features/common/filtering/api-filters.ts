import {ComparisonType,LogicalOperatorType} from '@bh/windmill';
import {FilterGroup,FilterValue,NullableFilterGroup} from './filter-group';
import { FilterFn, FilterFnParam } from '../editing';

export const runFilterFn = async <T>(
  fn: FilterFn<T> | null | undefined,
  param: FilterFnParam<T>
): Promise<NullableFilterGroup> => {
  return fn ? await fn(param) : null;
};


export const ME = '__me';
//TODO rework
export const simpleNameFilter = (
  form: { get: (name: string) => { value: any } },
  name: string
): NullableFilterGroup => {
  const value = form.get(name).value;
  return value ? byName(value) : null;
};

export const IDS = (key: string, ids: string[]): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: key,
    rightExpressionValues: ids,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const And = (...args: NullableFilterGroup[]): NullableFilterGroup => {
  const filters = args.filter((e) => !!e);
  return filters.length > 0
    ? {
      filters: filters,
      logicalOperation: LogicalOperatorType.AND,
    }
    : null;
};

export const my: FilterGroup = {
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Owner',
    rightExpressionValue: ME,
  },
  logicalOperation: LogicalOperatorType.AND,
};

export const myBreeding: FilterGroup = {
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Breeder',
    rightExpressionValue: ME,
  },
  logicalOperation: LogicalOperatorType.AND,
};

export const createdByMe: FilterGroup = {
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'CreatedBy',
    rightExpressionValue: ME,
  },
  logicalOperation: LogicalOperatorType.AND,
};

export const byName = (name: FilterValue): NullableFilterGroup =>
  name && name !== ''
    ? {
      filter: {
        comparisonType: ComparisonType.START_WITH,
        leftExpressionPath: 'Name',
        rightExpressionValue: name,
      },
      logicalOperation: LogicalOperatorType.AND,
    }
    : null;

export const byNameContain = (name: string): NullableFilterGroup =>
  name && name !== ''
    ? {
      filter: {
        comparisonType: ComparisonType.CONTAIN,
        leftExpressionPath: 'Name',
        rightExpressionValue: name,
      },
      logicalOperation: LogicalOperatorType.AND,
    }
    : null;

export const byNameWithFilter = (
  name: string,
  filter: FilterGroup
): NullableFilterGroup => And(byName(name), filter);

export const byAny = (
  leftExpressionPath: string,
  rightExpressionValue: string | number | boolean | undefined | null
): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: leftExpressionPath,
    rightExpressionValue: rightExpressionValue,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const byDateRange = (
  leftExpressionPath: string,
  startDate: Date,
  dueDate: Date
): FilterGroup => ({
  filters: [
    {
      filter: {
        comparisonType: ComparisonType.GREATER_OR_EQUAL,
        leftExpressionPath: leftExpressionPath,
        rightExpressionValue: startDate.getTime(),
      },
      logicalOperation: LogicalOperatorType.AND,
    },
    {
      filter: {
        comparisonType: ComparisonType.LESS_OR_EQUAL,
        leftExpressionPath: leftExpressionPath,
        rightExpressionValue: dueDate.getTime(),
      },
      logicalOperation: LogicalOperatorType.AND,
    },
  ],
  logicalOperation: LogicalOperatorType.AND,
});

export const kennelByOwner = (breederId: string): FilterGroup => ({
  filters: [
    {
      filter: {
        comparisonType: ComparisonType.EQUAL,
        leftExpressionPath: 'Owner',
        rightExpressionValue: breederId,
      },
      logicalOperation: LogicalOperatorType.AND,
    },
    {
      filter: {
        comparisonType: ComparisonType.EQUAL,
        leftExpressionPath: 'Type',
        rightExpressionValue: '5717637b-9886-465f-80d1-037ce9b86310',
      },
      logicalOperation: LogicalOperatorType.AND,
    },
  ],
  logicalOperation: LogicalOperatorType.AND,
});

export const isPatron = (): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EXISTS,
    leftExpressionPath: null,
    rightExpressionValue: '[ContactInBreed:Contact:Id].Id',
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const isMarketplace = (): FilterGroup => ({
  filters: [
    {
      filter: {
        comparisonType: ComparisonType.EXISTS,
        leftExpressionPath: null,
        rightExpressionValue: '[PetService:Pet:Id].Id',
      },
      logicalOperation: LogicalOperatorType.AND,
    },
    {
      filter: {
        comparisonType: ComparisonType.NOT_EQUAL,
        leftExpressionPath: '[PetService:Pet:Id].ServiceType',
        rightExpressionValue: '3370ee61-86de-49ae-a8ec-5cef5f213ecd',
      },
      logicalOperation: LogicalOperatorType.AND,
    },
    {
      filter: {
        comparisonType: ComparisonType.EQUAL,
        leftExpressionPath: '[PetService:Pet:Id].PetServiceStatus',
        rightExpressionValue: '5a314d87-0979-47da-b8b1-eb8372156cbf',
      },
      logicalOperation: LogicalOperatorType.AND,
    },
  ],
  logicalOperation: LogicalOperatorType.AND,
});

export const publicIdentifiers = (): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'PetIdentifierType.IsPublic',
    rightExpressionValue: 'true',
    // rightExpressionValues: [
    //   'dcfe82e4-6e63-4a05-81be-6674c8c205df', //Micro
    //   'c0bf8289-b6bf-42a1-8935-12839699b740', // stamp
    //   '3bf56934-3c85-488e-a572-98a6396c202d', //pedigree n
    // ],
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const coatColorByBreed = (breedId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[CoatColorInBreed:CoatColor].Breed',
    rightExpressionValue: breedId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const coatTypeByBreed = (breedId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[CoatTypeInBreed:CoatType].Breed',
    rightExpressionValue: breedId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const male = (): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Sex.Code',
    rightExpressionValue: 'male',
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const female = (): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Sex.Code',
    rightExpressionValue: 'female',
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const litterPetType = (petTypeId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'PetType',
    rightExpressionValue: petTypeId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const healthExamObjectByBreed = (breedId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[HealthExamObjectInBreed:HealthExamObject].Breed',
    rightExpressionValue: breedId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const AccountByBreed = (breedId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[BreedInAccount:Account].Breed',
    rightExpressionValue: breedId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const AccountByPetType = (petTypeId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[BreedInAccount:Account].Breed.PetType',
    rightExpressionValue: petTypeId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const PatronByBreed = (breedId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: '[ContactInBreed:Contact].Breed',
    rightExpressionValue: breedId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const AccountByType = (typeId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Type',
    rightExpressionValue: typeId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const AccountByFederation = (federationId: string): FilterGroup => ({
  filter: {
    comparisonType: ComparisonType.EQUAL,
    leftExpressionPath: 'Federation',
    rightExpressionValue: federationId,
  },
  logicalOperation: LogicalOperatorType.AND,
});

export const EmptyFilter = {
  filter: null,
  logicalOperation: LogicalOperatorType.AND,
};
