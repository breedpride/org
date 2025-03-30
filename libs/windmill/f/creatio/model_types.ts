import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Contact_Schema = {
      Id: string;
  Age: number;
  Job: Job;
  Url: string;
  Zip: string;
  City: City;
  Name: string;
  Cover: Cover;
  Email: string;
  Notes: string;
  Phone: string;
  Skype: string;
  Gender: Gender;
  Rating: number;
  Region: Region;
  Account: Account;
  Address: string;
  Country: Country;
  Surname: string;
  Twitter: string;
  Facebook: string;
  JobTitle: string;
  Language: SysLanguage;
  LinkedIn: string;
  AvatarUrl: string;
  BirthDate: Date;
  Confirmed: boolean;
  CreatedBy: Contact;
  CreatedOn: Date;
  GivenName: string;
  HomePhone: string;
  TwitterId: string;
  FacebookId: string;
  LinkedInId: string;
  MiddleName: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  AddressType: AddressType;
  MobilePhone: string;
  DecisionRole: ContactDecisionRole;
  AlternateNames: string;
  SalutationType: ContactSalutationType;
  IsEmailConfirmed: boolean;
  IsNonActualEmail: boolean;
  VerificationStatus: VerificationStatus
    };

    export type Contact = Partial<Contact_Schema>;
    export function Contact<T extends Partial<Contact>>(config: T): T;
    export function Contact<T extends Partial<Contact>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Contact<T extends Partial<Contact> | Partial<Contact>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactCommunication_Schema = {
      Id: string;
  Number: string;
  Contact: Contact;
  Primary: boolean;
  Position: number;
  NonActual: boolean;
  SearchNumber: string;
  DateSetNonActual: Date;
  CommunicationType: CommunicationType
    };

    export type ContactCommunication = Partial<ContactCommunication_Schema>;
    export function ContactCommunication<T extends Partial<ContactCommunication>>(config: T): T;
    export function ContactCommunication<T extends Partial<ContactCommunication>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactCommunication<T extends Partial<ContactCommunication> | Partial<ContactCommunication>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactAddress_Schema = {
      Id: string;
  Zip: string;
  City: City;
  Region: Region;
  Address: string;
  Contact: Contact;
  Country: Country;
  Primary: boolean;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  AddressType: AddressType;
  FullAddress: string
    };

    export type ContactAddress = Partial<ContactAddress_Schema>;
    export function ContactAddress<T extends Partial<ContactAddress>>(config: T): T;
    export function ContactAddress<T extends Partial<ContactAddress>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactAddress<T extends Partial<ContactAddress> | Partial<ContactAddress>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactFirebaseUser_Schema = {
      Id: string;
  Email: string;
  Contact: Contact;
  Referral: Referral;
  FirebaseUId: string;
  FirebaseAuthProvider: FirebaseAuthProvider
    };

    export type ContactFirebaseUser = Partial<ContactFirebaseUser_Schema>;
    export function ContactFirebaseUser<T extends Partial<ContactFirebaseUser>>(config: T): T;
    export function ContactFirebaseUser<T extends Partial<ContactFirebaseUser>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactFirebaseUser<T extends Partial<ContactFirebaseUser> | Partial<ContactFirebaseUser>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactSynonym_Schema = {
      Id: string;
  Name: string;
  Contact: Contact
    };

    export type ContactSynonym = Partial<ContactSynonym_Schema>;
    export function ContactSynonym<T extends Partial<ContactSynonym>>(config: T): T;
    export function ContactSynonym<T extends Partial<ContactSynonym>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactSynonym<T extends Partial<ContactSynonym> | Partial<ContactSynonym>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Pet_Schema = {
      Id: string;
  COI: number;
  Sex: Sex;
  Url: string;
  Name: string;
  Size: PetSize;
  Breed: Breed;
  Cover: Cover;
  Notes: string;
  Owner: Contact;
  Father: Pet;
  Kennel: Account;
  Litter: Litter;
  Mother: Pet;
  Rating: number;
  Titles: string;
  Weight: number;
  Breeder: Contact;
  PetType: PetType;
  CallName: string;
  CoatType: CoatType;
  IsPublic: boolean;
  AvatarUrl: string;
  CoatColor: CoatColor;
  CreatedBy: Contact;
  CreatedOn: Date;
  PetStatus: PetStatus;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  PublicData: PublicData;
  TrimTitles: string;
  BodyFeature: BodyFeature;
  DateOfBirth: Date;
  DateOfDeath: Date;
  OwnerKennel: Account;
  BreedDivision: BreedDivision;
  CountryOfStay: Country;
  CountryOfBirth: Country;
  InbreedingPercent: number;
  VerificationStatus: VerificationStatus;
  RatingPlacementInBreed: number
    };

    export type Pet = Partial<Pet_Schema>;
    export function Pet<T extends Partial<Pet>>(config: T): T;
    export function Pet<T extends Partial<Pet>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Pet<T extends Partial<Pet> | Partial<Pet>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type TitleInPet_Schema = {
      Id: string;
  Pet: Pet;
  Date: Date;
  Title: Title;
  Amount: number;
  Country: Country;
  RawTitle: string;
  Description: string;
  IsConfirmed: boolean
    };

    export type TitleInPet = Partial<TitleInPet_Schema>;
    export function TitleInPet<T extends Partial<TitleInPet>>(config: T): T;
    export function TitleInPet<T extends Partial<TitleInPet>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function TitleInPet<T extends Partial<TitleInPet> | Partial<TitleInPet>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetHealthExamResult_Schema = {
      Id: string;
  Pet: Pet;
  Date: Date;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  HealthExamObject: HealthExamObject;
  HealthExamResult: HealthExamResult
    };

    export type PetHealthExamResult = Partial<PetHealthExamResult_Schema>;
    export function PetHealthExamResult<T extends Partial<PetHealthExamResult>>(config: T): T;
    export function PetHealthExamResult<T extends Partial<PetHealthExamResult>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetHealthExamResult<T extends Partial<PetHealthExamResult> | Partial<PetHealthExamResult>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetService_Schema = {
      Id: string;
  Pet: Pet;
  Date: Date;
  Price: number;
  Currency: Currency;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  ServiceType: PetServiceType;
  PetServiceStatus: PetServiceStatus
    };

    export type PetService = Partial<PetService_Schema>;
    export function PetService<T extends Partial<PetService>>(config: T): T;
    export function PetService<T extends Partial<PetService>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetService<T extends Partial<PetService> | Partial<PetService>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetInProject_Schema = {
      Id: string;
  Pet: Pet;
  Code: string;
  Date: Date;
  Class: PetClass;
  Judge: Contact;
  Place: Place;
  Number: number;
  Result: string;
  Handler: Contact;
  Project: Project;
  WebLink: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Qualification: PetQualification;
  TempProjectName: string
    };

    export type PetInProject = Partial<PetInProject_Schema>;
    export function PetInProject<T extends Partial<PetInProject>>(config: T): T;
    export function PetInProject<T extends Partial<PetInProject>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetInProject<T extends Partial<PetInProject> | Partial<PetInProject>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetIdentifier_Schema = {
      Id: string;
  Pet: Pet;
  Date: Date;
  Value: string;
  Number: string;
  IsPublic: boolean;
  Studbook: Studbook;
  CreatedBy: Contact;
  CreatedOn: Date;
  TrimValue: string;
  DataSource: DataSource;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  IsProcessed: boolean;
  PetIdentifierType: PetIdentifierType
    };

    export type PetIdentifier = Partial<PetIdentifier_Schema>;
    export function PetIdentifier<T extends Partial<PetIdentifier>>(config: T): T;
    export function PetIdentifier<T extends Partial<PetIdentifier>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetIdentifier<T extends Partial<PetIdentifier> | Partial<PetIdentifier>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetMeasurement_Schema = {
      Id: string;
  Day: number;
  Pet: Pet;
  Date: Date;
  Unit: Unit;
  Value: number;
  MeasurementType: MeasurementType;
  ActiveSynchronization: boolean
    };

    export type PetMeasurement = Partial<PetMeasurement_Schema>;
    export function PetMeasurement<T extends Partial<PetMeasurement>>(config: T): T;
    export function PetMeasurement<T extends Partial<PetMeasurement>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetMeasurement<T extends Partial<PetMeasurement> | Partial<PetMeasurement>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetServiceInLitter_Schema = {
      Id: string;
  Date: Date;
  Price: number;
  Litter: Litter;
  Currency: Currency;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  ServiceType: PetServiceType;
  PetServiceStatus: PetServiceStatus
    };

    export type PetServiceInLitter = Partial<PetServiceInLitter_Schema>;
    export function PetServiceInLitter<T extends Partial<PetServiceInLitter>>(config: T): T;
    export function PetServiceInLitter<T extends Partial<PetServiceInLitter>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetServiceInLitter<T extends Partial<PetServiceInLitter> | Partial<PetServiceInLitter>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Litter_Schema = {
      Id: string;
  Url: string;
  Name: string;
  Cover: Cover;
  Notes: string;
  Father: Pet;
  Kennel: Account;
  Letter: Letter;
  Mother: Pet;
  Status: LitterStatus;
  Breeder: Contact;
  EndDate: Date;
  PetType: PetType;
  IsPublic: boolean;
  CreatedBy: Contact;
  CreatedOn: Date;
  StartDate: Date;
  MaleAmount: number;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  DateOfBirth: Date;
  FemaleAmount: number;
  MatingPeriod: Period
    };

    export type Litter = Partial<Litter_Schema>;
    export function Litter<T extends Partial<Litter>>(config: T): T;
    export function Litter<T extends Partial<Litter>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Litter<T extends Partial<Litter> | Partial<Litter>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Breed_Schema = {
      Id: string;
  Url: string;
  Name: string;
  Cover: Cover;
  Rating: number;
  Account: Account;
  PetType: PetType;
  Category: BreedCategory;
  Language: SysLanguage;
  AdminName: string;
  AvatarUrl: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  PublicData: PublicData;
  KennelCount: number;
  PatronCount: number;
  DifferBySize: boolean;
  AuthenticName: string;
  PaymentRating: number;
  HasRelatedBreed: boolean;
  PetProfileCount: number;
  DifferByCoatType: boolean;
  DifferByCoatColor: boolean;
  AchievementProgress: number;
  DifferByBodyFeature: boolean
    };

    export type Breed = Partial<Breed_Schema>;
    export function Breed<T extends Partial<Breed>>(config: T): T;
    export function Breed<T extends Partial<Breed>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Breed<T extends Partial<Breed> | Partial<Breed>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Project_Schema = {
      Id: string;
  Url: string;
  Name: string;
  Type: ProjectType;
  Breed: Breed;
  Cover: Cover;
  Event: Event;
  Notes: string;
  Owner: Contact;
  Status: ProjectStatus;
  Account: Account;
  EndDate: Date;
  PetType: PetType;
  Category: ProjectCategory;
  Deadline: Date;
  Duration: number;
  Position: number;
  CreatedBy: Contact;
  CreatedOn: Date;
  StartDate: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  ParentProject: Project;
  ActualCompletion: number
    };

    export type Project = Partial<Project_Schema>;
    export function Project<T extends Partial<Project>>(config: T): T;
    export function Project<T extends Partial<Project>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Project<T extends Partial<Project> | Partial<Project>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Post_Schema = {
      Id: string;
  Url: string;
  Date: Date;
  Name: string;
  Text: string;
  Type: PostType;
  Cover: Cover;
  Event: Event;
  State: PostState;
  Author: Contact;
  Photos: string;
  IsMoment: boolean;
  Latitude: number;
  CreatedBy: Contact;
  CreatedOn: Date;
  Longitude: number;
  MasterPost: Post;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Participants: string;
  PublicationDate: Date
    };

    export type Post = Partial<Post_Schema>;
    export function Post<T extends Partial<Post>>(config: T): T;
    export function Post<T extends Partial<Post>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Post<T extends Partial<Post> | Partial<Post>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountReview_Schema = {
      Id: string;
  test: string;
  Rating: number;
  Review: string;
  Account: Account;
  Contact: Contact;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  OrderNumber: number
    };

    export type AccountReview = Partial<AccountReview_Schema>;
    export function AccountReview<T extends Partial<AccountReview>>(config: T): T;
    export function AccountReview<T extends Partial<AccountReview>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountReview<T extends Partial<AccountReview> | Partial<AccountReview>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedprideCollection_Schema = {
      Id: string;
  Url: string;
  Auto: boolean;
  Name: string;
  Type: BreedprideCollectionType;
  Cover: Cover;
  Notes: string;
  Owner: Contact;
  Private: boolean;
  AvatarUrl: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  EntityName: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  UpdateDate: Date
    };

    export type BreedprideCollection = Partial<BreedprideCollection_Schema>;
    export function BreedprideCollection<T extends Partial<BreedprideCollection>>(config: T): T;
    export function BreedprideCollection<T extends Partial<BreedprideCollection>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedprideCollection<T extends Partial<BreedprideCollection> | Partial<BreedprideCollection>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedprideCollectionEntity_Schema = {
      Id: string;
  Pet: Pet;
  Event: Event;
  Account: Account;
  Contact: Contact;
  RecordId: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  Collection: BreedprideCollection;
  ModifiedBy: Contact;
  ModifiedOn: Date
    };

    export type BreedprideCollectionEntity = Partial<BreedprideCollectionEntity_Schema>;
    export function BreedprideCollectionEntity<T extends Partial<BreedprideCollectionEntity>>(config: T): T;
    export function BreedprideCollectionEntity<T extends Partial<BreedprideCollectionEntity>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedprideCollectionEntity<T extends Partial<BreedprideCollectionEntity> | Partial<BreedprideCollectionEntity>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Event_Schema = {
      Id: string;
  Url: string;
  City: City;
  Name: string;
  Type: EventType;
  Cover: Cover;
  Owner: Contact;
  Region: Region;
  Status: EventStatus;
  Account: Account;
  Address: string;
  Country: Country;
  EndDate: Date;
  PetType: PetType;
  Industry: AccountIndustry;
  CreatedBy: Contact;
  CreatedOn: Date;
  Organizer: Account;
  StartDate: Date;
  Territory: Territory;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  RecipientCount: number;
  LastActualizeDate: Date
    };

    export type Event = Partial<Event_Schema>;
    export function Event<T extends Partial<Event>>(config: T): T;
    export function Event<T extends Partial<Event>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Event<T extends Partial<Event> | Partial<Event>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Cover_Schema = {
      Id: string;
  Url: string;
  Name: string;
  Type: CoverType;
  Breed: Breed;
  Owner: Contact;
  AvatarUrl: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  IsDefault: boolean;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  RedirectUrl: string
    };

    export type Cover = Partial<Cover_Schema>;
    export function Cover<T extends Partial<Cover>>(config: T): T;
    export function Cover<T extends Partial<Cover>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Cover<T extends Partial<Cover> | Partial<Cover>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Note_Schema = {
      Id: string;
  Pet: Pet;
  Name: string;
  Breed: Breed;
  Cover: Cover;
  Event: Event;
  Notes: string;
  Owner: Contact;
  Litter: Litter;
  Account: Account;
  Contact: Contact;
  Project: Project;
  RecordId: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  EntitySchema: EntitySchemaLookup
    };

    export type Note = Partial<Note_Schema>;
    export function Note<T extends Partial<Note>>(config: T): T;
    export function Note<T extends Partial<Note>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Note<T extends Partial<Note> | Partial<Note>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactSalutationType_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type ContactSalutationType = Partial<ContactSalutationType_Schema>;
    export function ContactSalutationType<T extends Partial<ContactSalutationType>>(config: T): T;
    export function ContactSalutationType<T extends Partial<ContactSalutationType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactSalutationType<T extends Partial<ContactSalutationType> | Partial<ContactSalutationType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Gender_Schema = {
      Id: string;
  Name: string;
  Order: number;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type Gender = Partial<Gender_Schema>;
    export function Gender<T extends Partial<Gender>>(config: T): T;
    export function Gender<T extends Partial<Gender>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Gender<T extends Partial<Gender> | Partial<Gender>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Account_Schema = {
      Id: string;
  Url: string;
  Web: string;
  Zip: string;
  City: City;
  Code: string;
  GPSE: string;
  GPSN: string;
  Name: string;
  Type: AccountType;
  Cover: Cover;
  Notes: string;
  Owner: Contact;
  Phone: string;
  Since: Date;
  Parent: Account;
  Rating: number;
  Region: Region;
  Status: AccountStatus;
  AboutUs: string;
  Address: string;
  Country: Country;
  Industry: AccountIndustry;
  Verified: boolean;
  AffixType: AffixType;
  AvatarUrl: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  Ownership: AccountOwnership;
  Federation: Account;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  AddressType: AddressType;
  HasKennelName: boolean;
  PrimaryContact: Contact;
  AccountCategory: AccountCategory;
  AdditionalPhone: string;
  AlternativeName: string;
  VerificationStatus: VerificationStatus;
  CompanyFoundationDate: Date;
  RatingPlacementInBreed: number
    };

    export type Account = Partial<Account_Schema>;
    export function Account<T extends Partial<Account>>(config: T): T;
    export function Account<T extends Partial<Account>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Account<T extends Partial<Account> | Partial<Account>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ContactDecisionRole_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type ContactDecisionRole = Partial<ContactDecisionRole_Schema>;
    export function ContactDecisionRole<T extends Partial<ContactDecisionRole>>(config: T): T;
    export function ContactDecisionRole<T extends Partial<ContactDecisionRole>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ContactDecisionRole<T extends Partial<ContactDecisionRole> | Partial<ContactDecisionRole>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Job_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type Job = Partial<Job_Schema>;
    export function Job<T extends Partial<Job>>(config: T): T;
    export function Job<T extends Partial<Job>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Job<T extends Partial<Job> | Partial<Job>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AddressType_Schema = {
      Id: string;
  Name: string;
  Color: string;
  ForAccount: boolean;
  ForContact: boolean;
  Description: string
    };

    export type AddressType = Partial<AddressType_Schema>;
    export function AddressType<T extends Partial<AddressType>>(config: T): T;
    export function AddressType<T extends Partial<AddressType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AddressType<T extends Partial<AddressType> | Partial<AddressType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type City_Schema = {
      Id: string;
  Dem: number;
  Name: string;
  Region: Region;
  Country: Country;
  Latitude: number;
  TimeZone: TimeZone;
  CreatedBy: Contact;
  CreatedOn: Date;
  Longitude: number;
  GeoNamesId: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Population: number;
  Description: string;
  AlternateNames: string;
  GeoNamesTimeZone: GeoNamesTimeZone
    };

    export type City = Partial<City_Schema>;
    export function City<T extends Partial<City>>(config: T): T;
    export function City<T extends Partial<City>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function City<T extends Partial<City> | Partial<City>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Region_Schema = {
      Id: string;
  Dem: number;
  Code: string;
  Name: string;
  Country: Country;
  Latitude: number;
  TimeZone: TimeZone;
  CreatedBy: Contact;
  CreatedOn: Date;
  Longitude: number;
  GeoNamesId: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string;
  AlternateNames: string;
  GeoNamesTimeZone: GeoNamesTimeZone;
  RegionAdmin1Code: string
    };

    export type Region = Partial<Region_Schema>;
    export function Region<T extends Partial<Region>>(config: T): T;
    export function Region<T extends Partial<Region>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Region<T extends Partial<Region> | Partial<Region>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Country_Schema = {
      Id: string;
  Dem: number;
  Url: string;
  Code: string;
  Name: string;
  Latitude: number;
  TimeZone: TimeZone;
  CreatedBy: Contact;
  CreatedOn: Date;
  Longitude: number;
  Alpha2Code: string;
  GeoNamesId: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  PublicData: PublicData;
  BillingInfo: string;
  Description: string;
  AlternateNames: string;
  GeoNamesTimeZone: GeoNamesTimeZone;
  GeoNamesCountryCode: string
    };

    export type Country = Partial<Country_Schema>;
    export function Country<T extends Partial<Country>>(config: T): T;
    export function Country<T extends Partial<Country>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Country<T extends Partial<Country> | Partial<Country>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type SysLanguage_Schema = {
      Id: string;
  Code: string;
  Name: string;
  IsUsed: boolean;
  Description: string;
  SysCultureDefId: string
    };

    export type SysLanguage = Partial<SysLanguage_Schema>;
    export function SysLanguage<T extends Partial<SysLanguage>>(config: T): T;
    export function SysLanguage<T extends Partial<SysLanguage>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function SysLanguage<T extends Partial<SysLanguage> | Partial<SysLanguage>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type VerificationStatus_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type VerificationStatus = Partial<VerificationStatus_Schema>;
    export function VerificationStatus<T extends Partial<VerificationStatus>>(config: T): T;
    export function VerificationStatus<T extends Partial<VerificationStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function VerificationStatus<T extends Partial<VerificationStatus> | Partial<VerificationStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type CommunicationType_Schema = {
      Id: string;
  Name: string;
  Description: string;
  DisplayFormat: string;
  UseforAccounts: boolean;
  UseforContacts: boolean
    };

    export type CommunicationType = Partial<CommunicationType_Schema>;
    export function CommunicationType<T extends Partial<CommunicationType>>(config: T): T;
    export function CommunicationType<T extends Partial<CommunicationType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function CommunicationType<T extends Partial<CommunicationType> | Partial<CommunicationType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type FirebaseAuthProvider_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type FirebaseAuthProvider = Partial<FirebaseAuthProvider_Schema>;
    export function FirebaseAuthProvider<T extends Partial<FirebaseAuthProvider>>(config: T): T;
    export function FirebaseAuthProvider<T extends Partial<FirebaseAuthProvider>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function FirebaseAuthProvider<T extends Partial<FirebaseAuthProvider> | Partial<FirebaseAuthProvider>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Referral_Schema = {
      Id: string;
  Code: string;
  Contact: Contact
    };

    export type Referral = Partial<Referral_Schema>;
    export function Referral<T extends Partial<Referral>>(config: T): T;
    export function Referral<T extends Partial<Referral>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Referral<T extends Partial<Referral> | Partial<Referral>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetType_Schema = {
      Id: string;
  Url: string;
  Name: string;
  AvatarUrl: string;
  EventCount: number;
  PublicData: PublicData;
  Description: string;
  KennelCount: number;
  PatronCount: number;
  ProfileCount: number;
  PetProfileCount: number;
  OrganizationCount: number
    };

    export type PetType = Partial<PetType_Schema>;
    export function PetType<T extends Partial<PetType>>(config: T): T;
    export function PetType<T extends Partial<PetType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetType<T extends Partial<PetType> | Partial<PetType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Sex_Schema = {
      Id: string;
  Code: string;
  Name: string;
  Gender: Gender;
  PetType: PetType;
  Description: string
    };

    export type Sex = Partial<Sex_Schema>;
    export function Sex<T extends Partial<Sex>>(config: T): T;
    export function Sex<T extends Partial<Sex>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Sex<T extends Partial<Sex> | Partial<Sex>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetStatus_Schema = {
      Id: string;
  Code: string;
  Name: string;
  PetType: PetType;
  Description: string
    };

    export type PetStatus = Partial<PetStatus_Schema>;
    export function PetStatus<T extends Partial<PetStatus>>(config: T): T;
    export function PetStatus<T extends Partial<PetStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetStatus<T extends Partial<PetStatus> | Partial<PetStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type CoatType_Schema = {
      Id: string;
  Name: string;
  PetType: PetType;
  Description: string
    };

    export type CoatType = Partial<CoatType_Schema>;
    export function CoatType<T extends Partial<CoatType>>(config: T): T;
    export function CoatType<T extends Partial<CoatType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function CoatType<T extends Partial<CoatType> | Partial<CoatType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type CoatColor_Schema = {
      Id: string;
  Name: string;
  PetType: PetType;
  Description: string
    };

    export type CoatColor = Partial<CoatColor_Schema>;
    export function CoatColor<T extends Partial<CoatColor>>(config: T): T;
    export function CoatColor<T extends Partial<CoatColor>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function CoatColor<T extends Partial<CoatColor> | Partial<CoatColor>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetSize_Schema = {
      Id: string;
  Name: string;
  PetType: PetType;
  Description: string
    };

    export type PetSize = Partial<PetSize_Schema>;
    export function PetSize<T extends Partial<PetSize>>(config: T): T;
    export function PetSize<T extends Partial<PetSize>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetSize<T extends Partial<PetSize> | Partial<PetSize>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BodyFeature_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type BodyFeature = Partial<BodyFeature_Schema>;
    export function BodyFeature<T extends Partial<BodyFeature>>(config: T): T;
    export function BodyFeature<T extends Partial<BodyFeature>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BodyFeature<T extends Partial<BodyFeature> | Partial<BodyFeature>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedDivision_Schema = {
      Id: string;
  Name: string;
  Breed: Breed;
  IsMain: boolean;
  Description: string;
  BreedStandard: BreedStandard;
  DivisionBySize: boolean;
  DivisionByColor: boolean;
  DivisionByCoatType: boolean;
  DivisionByBodyFeature: boolean
    };

    export type BreedDivision = Partial<BreedDivision_Schema>;
    export function BreedDivision<T extends Partial<BreedDivision>>(config: T): T;
    export function BreedDivision<T extends Partial<BreedDivision>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedDivision<T extends Partial<BreedDivision> | Partial<BreedDivision>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PublicData_Schema = {
      Id: string;
  Pet: Pet;
  Name: string;
  Breed: Breed;
  Event: Event;
  Model: string;
  Account: Account;
  Contact: Contact;
  Country: Country;
  HashMD5: string;
  PetType: PetType;
  Primary: boolean;
  Project: Project;
  HasOwner: boolean;
  RecordId: string;
  Redirect: PublicData;
  CreatedBy: Contact;
  CreatedOn: Date;
  PetTitles: TitleInPet;
  EntityName: string;
  ModifiedBy: Contact;
  ModifiedOn: Date
    };

    export type PublicData = Partial<PublicData_Schema>;
    export function PublicData<T extends Partial<PublicData>>(config: T): T;
    export function PublicData<T extends Partial<PublicData>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PublicData<T extends Partial<PublicData> | Partial<PublicData>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Title_Schema = {
      Id: string;
  Name: string;
  Rating: number;
  PetType: PetType;
  Provider: Account;
  Description: string
    };

    export type Title = Partial<Title_Schema>;
    export function Title<T extends Partial<Title>>(config: T): T;
    export function Title<T extends Partial<Title>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Title<T extends Partial<Title> | Partial<Title>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type HealthExamObject_Schema = {
      Id: string;
  Code: string;
  Name: string;
  Description: string
    };

    export type HealthExamObject = Partial<HealthExamObject_Schema>;
    export function HealthExamObject<T extends Partial<HealthExamObject>>(config: T): T;
    export function HealthExamObject<T extends Partial<HealthExamObject>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function HealthExamObject<T extends Partial<HealthExamObject> | Partial<HealthExamObject>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type HealthExamResult_Schema = {
      Id: string;
  Name: string;
  Object: HealthExamObject;
  Description: string
    };

    export type HealthExamResult = Partial<HealthExamResult_Schema>;
    export function HealthExamResult<T extends Partial<HealthExamResult>>(config: T): T;
    export function HealthExamResult<T extends Partial<HealthExamResult>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function HealthExamResult<T extends Partial<HealthExamResult> | Partial<HealthExamResult>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetServiceType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type PetServiceType = Partial<PetServiceType_Schema>;
    export function PetServiceType<T extends Partial<PetServiceType>>(config: T): T;
    export function PetServiceType<T extends Partial<PetServiceType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetServiceType<T extends Partial<PetServiceType> | Partial<PetServiceType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Currency_Schema = {
      Id: string;
  Code: string;
  Name: string;
  Rate: number;
  Symbol: string;
  Division: number;
  CreatedBy: Contact;
  CreatedOn: Date;
  ShortName: string;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string;
  RecalcDirection: number;
  CurrecySymbolPosition: number
    };

    export type Currency = Partial<Currency_Schema>;
    export function Currency<T extends Partial<Currency>>(config: T): T;
    export function Currency<T extends Partial<Currency>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Currency<T extends Partial<Currency> | Partial<Currency>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetServiceStatus_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type PetServiceStatus = Partial<PetServiceStatus_Schema>;
    export function PetServiceStatus<T extends Partial<PetServiceStatus>>(config: T): T;
    export function PetServiceStatus<T extends Partial<PetServiceStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetServiceStatus<T extends Partial<PetServiceStatus> | Partial<PetServiceStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetClass_Schema = {
      Id: string;
  Code: number;
  Name: string;
  AgeTo: number;
  AgeFrom: number;
  PetType: PetType;
  Provider: Account;
  Description: string
    };

    export type PetClass = Partial<PetClass_Schema>;
    export function PetClass<T extends Partial<PetClass>>(config: T): T;
    export function PetClass<T extends Partial<PetClass>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetClass<T extends Partial<PetClass> | Partial<PetClass>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Place_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type Place = Partial<Place_Schema>;
    export function Place<T extends Partial<Place>>(config: T): T;
    export function Place<T extends Partial<Place>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Place<T extends Partial<Place> | Partial<Place>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetQualification_Schema = {
      Id: string;
  Code: number;
  Name: string;
  PetType: PetType;
  Provider: Account;
  Description: string
    };

    export type PetQualification = Partial<PetQualification_Schema>;
    export function PetQualification<T extends Partial<PetQualification>>(config: T): T;
    export function PetQualification<T extends Partial<PetQualification>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetQualification<T extends Partial<PetQualification> | Partial<PetQualification>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PetIdentifierType_Schema = {
      Id: string;
  Name: string;
  IsPublic: boolean;
  Description: string
    };

    export type PetIdentifierType = Partial<PetIdentifierType_Schema>;
    export function PetIdentifierType<T extends Partial<PetIdentifierType>>(config: T): T;
    export function PetIdentifierType<T extends Partial<PetIdentifierType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PetIdentifierType<T extends Partial<PetIdentifierType> | Partial<PetIdentifierType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Studbook_Schema = {
      Id: string;
  Name: string;
  Type: StudbookType;
  Status: StudbookStatus;
  Account: Account;
  Description: string;
  AlternateNames: string
    };

    export type Studbook = Partial<Studbook_Schema>;
    export function Studbook<T extends Partial<Studbook>>(config: T): T;
    export function Studbook<T extends Partial<Studbook>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Studbook<T extends Partial<Studbook> | Partial<Studbook>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type DataSource_Schema = {
      Id: string;
  Name: string;
  Domain: string;
  Priority: number;
  Description: string
    };

    export type DataSource = Partial<DataSource_Schema>;
    export function DataSource<T extends Partial<DataSource>>(config: T): T;
    export function DataSource<T extends Partial<DataSource>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function DataSource<T extends Partial<DataSource> | Partial<DataSource>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type MeasurementType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type MeasurementType = Partial<MeasurementType_Schema>;
    export function MeasurementType<T extends Partial<MeasurementType>>(config: T): T;
    export function MeasurementType<T extends Partial<MeasurementType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function MeasurementType<T extends Partial<MeasurementType> | Partial<MeasurementType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Unit_Schema = {
      Id: string;
  Name: string;
  ShortName: string;
  Description: string
    };

    export type Unit = Partial<Unit_Schema>;
    export function Unit<T extends Partial<Unit>>(config: T): T;
    export function Unit<T extends Partial<Unit>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Unit<T extends Partial<Unit> | Partial<Unit>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Period_Schema = {
      Id: string;
  Name: string;
  Year: Period;
  Parent: Period;
  DueDate: Date;
  Quarter: Period;
  StartDate: Date;
  PeriodType: PeriodType;
  Description: string
    };

    export type Period = Partial<Period_Schema>;
    export function Period<T extends Partial<Period>>(config: T): T;
    export function Period<T extends Partial<Period>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Period<T extends Partial<Period> | Partial<Period>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type LitterStatus_Schema = {
      Id: string;
  Name: string;
  Order: number;
  Description: string
    };

    export type LitterStatus = Partial<LitterStatus_Schema>;
    export function LitterStatus<T extends Partial<LitterStatus>>(config: T): T;
    export function LitterStatus<T extends Partial<LitterStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function LitterStatus<T extends Partial<LitterStatus> | Partial<LitterStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Letter_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type Letter = Partial<Letter_Schema>;
    export function Letter<T extends Partial<Letter>>(config: T): T;
    export function Letter<T extends Partial<Letter>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Letter<T extends Partial<Letter> | Partial<Letter>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedCategory_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type BreedCategory = Partial<BreedCategory_Schema>;
    export function BreedCategory<T extends Partial<BreedCategory>>(config: T): T;
    export function BreedCategory<T extends Partial<BreedCategory>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedCategory<T extends Partial<BreedCategory> | Partial<BreedCategory>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ProjectType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type ProjectType = Partial<ProjectType_Schema>;
    export function ProjectType<T extends Partial<ProjectType>>(config: T): T;
    export function ProjectType<T extends Partial<ProjectType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ProjectType<T extends Partial<ProjectType> | Partial<ProjectType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ProjectStatus_Schema = {
      Id: string;
  Name: string;
  IsFinal: boolean;
  Description: string
    };

    export type ProjectStatus = Partial<ProjectStatus_Schema>;
    export function ProjectStatus<T extends Partial<ProjectStatus>>(config: T): T;
    export function ProjectStatus<T extends Partial<ProjectStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ProjectStatus<T extends Partial<ProjectStatus> | Partial<ProjectStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type ProjectCategory_Schema = {
      Id: string;
  Name: string;
  EventType: EventType;
  Description: string
    };

    export type ProjectCategory = Partial<ProjectCategory_Schema>;
    export function ProjectCategory<T extends Partial<ProjectCategory>>(config: T): T;
    export function ProjectCategory<T extends Partial<ProjectCategory>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function ProjectCategory<T extends Partial<ProjectCategory> | Partial<ProjectCategory>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PostType_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string;
  TemplateText: string
    };

    export type PostType = Partial<PostType_Schema>;
    export function PostType<T extends Partial<PostType>>(config: T): T;
    export function PostType<T extends Partial<PostType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PostType<T extends Partial<PostType> | Partial<PostType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PostState_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type PostState = Partial<PostState_Schema>;
    export function PostState<T extends Partial<PostState>>(config: T): T;
    export function PostState<T extends Partial<PostState>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PostState<T extends Partial<PostState> | Partial<PostState>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedprideCollectionType_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type BreedprideCollectionType = Partial<BreedprideCollectionType_Schema>;
    export function BreedprideCollectionType<T extends Partial<BreedprideCollectionType>>(config: T): T;
    export function BreedprideCollectionType<T extends Partial<BreedprideCollectionType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedprideCollectionType<T extends Partial<BreedprideCollectionType> | Partial<BreedprideCollectionType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type EventType_Schema = {
      Id: string;
  Name: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type EventType = Partial<EventType_Schema>;
    export function EventType<T extends Partial<EventType>>(config: T): T;
    export function EventType<T extends Partial<EventType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function EventType<T extends Partial<EventType> | Partial<EventType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type EventStatus_Schema = {
      Id: string;
  Name: string;
  Color: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string
    };

    export type EventStatus = Partial<EventStatus_Schema>;
    export function EventStatus<T extends Partial<EventStatus>>(config: T): T;
    export function EventStatus<T extends Partial<EventStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function EventStatus<T extends Partial<EventStatus> | Partial<EventStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type Territory_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type Territory = Partial<Territory_Schema>;
    export function Territory<T extends Partial<Territory>>(config: T): T;
    export function Territory<T extends Partial<Territory>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function Territory<T extends Partial<Territory> | Partial<Territory>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountIndustry_Schema = {
      Id: string;
  Name: string;
  PetType: PetType;
  Description: string
    };

    export type AccountIndustry = Partial<AccountIndustry_Schema>;
    export function AccountIndustry<T extends Partial<AccountIndustry>>(config: T): T;
    export function AccountIndustry<T extends Partial<AccountIndustry>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountIndustry<T extends Partial<AccountIndustry> | Partial<AccountIndustry>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type CoverType_Schema = {
      Id: string;
  Name: string;
  System: boolean;
  Priority: number;
  Description: string
    };

    export type CoverType = Partial<CoverType_Schema>;
    export function CoverType<T extends Partial<CoverType>>(config: T): T;
    export function CoverType<T extends Partial<CoverType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function CoverType<T extends Partial<CoverType> | Partial<CoverType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type EntitySchemaLookup_Schema = {
      Id: string;
  Name: string;
  IsPublic: boolean;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  PublicName: string;
  Description: string
    };

    export type EntitySchemaLookup = Partial<EntitySchemaLookup_Schema>;
    export function EntitySchemaLookup<T extends Partial<EntitySchemaLookup>>(config: T): T;
    export function EntitySchemaLookup<T extends Partial<EntitySchemaLookup>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function EntitySchemaLookup<T extends Partial<EntitySchemaLookup> | Partial<EntitySchemaLookup>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountOwnership_Schema = {
      Id: string;
  Name: string;
  Country: Country;
  Description: string
    };

    export type AccountOwnership = Partial<AccountOwnership_Schema>;
    export function AccountOwnership<T extends Partial<AccountOwnership>>(config: T): T;
    export function AccountOwnership<T extends Partial<AccountOwnership>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountOwnership<T extends Partial<AccountOwnership> | Partial<AccountOwnership>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountType_Schema = {
      Id: string;
  Name: string;
  Description: string;
  RawDataModel: string
    };

    export type AccountType = Partial<AccountType_Schema>;
    export function AccountType<T extends Partial<AccountType>>(config: T): T;
    export function AccountType<T extends Partial<AccountType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountType<T extends Partial<AccountType> | Partial<AccountType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountCategory_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type AccountCategory = Partial<AccountCategory_Schema>;
    export function AccountCategory<T extends Partial<AccountCategory>>(config: T): T;
    export function AccountCategory<T extends Partial<AccountCategory>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountCategory<T extends Partial<AccountCategory> | Partial<AccountCategory>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AccountStatus_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type AccountStatus = Partial<AccountStatus_Schema>;
    export function AccountStatus<T extends Partial<AccountStatus>>(config: T): T;
    export function AccountStatus<T extends Partial<AccountStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AccountStatus<T extends Partial<AccountStatus> | Partial<AccountStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type AffixType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type AffixType = Partial<AffixType_Schema>;
    export function AffixType<T extends Partial<AffixType>>(config: T): T;
    export function AffixType<T extends Partial<AffixType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function AffixType<T extends Partial<AffixType> | Partial<AffixType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type TimeZone_Schema = {
      Id: string;
  Code: string;
  Name: string;
  Offset: string;
  CreatedBy: Contact;
  CreatedOn: Date;
  ModifiedBy: Contact;
  ModifiedOn: Date;
  Description: string;
  CodeAmerican: string
    };

    export type TimeZone = Partial<TimeZone_Schema>;
    export function TimeZone<T extends Partial<TimeZone>>(config: T): T;
    export function TimeZone<T extends Partial<TimeZone>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function TimeZone<T extends Partial<TimeZone> | Partial<TimeZone>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type GeoNamesTimeZone_Schema = {
      Id: string;
  Name: string;
  GMTOffset: number;
  CountryCode: string;
  Description: string
    };

    export type GeoNamesTimeZone = Partial<GeoNamesTimeZone_Schema>;
    export function GeoNamesTimeZone<T extends Partial<GeoNamesTimeZone>>(config: T): T;
    export function GeoNamesTimeZone<T extends Partial<GeoNamesTimeZone>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function GeoNamesTimeZone<T extends Partial<GeoNamesTimeZone> | Partial<GeoNamesTimeZone>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedStandard_Schema = {
      Id: string;
  Code: string;
  Link: string;
  Name: string;
  Breed: Breed;
  Group: BreedGroup;
  Status: BreedStandardStatus;
  Section: BreedSection;
  Approved: Date;
  Provider: Account;
  Effective: Date;
  Subsection: BreedSubsection;
  WorkingTrial: boolean;
  HasVariableDivisions: boolean
    };

    export type BreedStandard = Partial<BreedStandard_Schema>;
    export function BreedStandard<T extends Partial<BreedStandard>>(config: T): T;
    export function BreedStandard<T extends Partial<BreedStandard>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedStandard<T extends Partial<BreedStandard> | Partial<BreedStandard>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type StudbookStatus_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type StudbookStatus = Partial<StudbookStatus_Schema>;
    export function StudbookStatus<T extends Partial<StudbookStatus>>(config: T): T;
    export function StudbookStatus<T extends Partial<StudbookStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function StudbookStatus<T extends Partial<StudbookStatus> | Partial<StudbookStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type StudbookType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type StudbookType = Partial<StudbookType_Schema>;
    export function StudbookType<T extends Partial<StudbookType>>(config: T): T;
    export function StudbookType<T extends Partial<StudbookType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function StudbookType<T extends Partial<StudbookType> | Partial<StudbookType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type PeriodType_Schema = {
      Id: string;
  Name: string;
  Description: string
    };

    export type PeriodType = Partial<PeriodType_Schema>;
    export function PeriodType<T extends Partial<PeriodType>>(config: T): T;
    export function PeriodType<T extends Partial<PeriodType>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function PeriodType<T extends Partial<PeriodType> | Partial<PeriodType>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedSubsection_Schema = {
      Id: string;
  Code: number;
  Name: string;
  BreedGroup: BreedGroup;
  Description: string;
  BreedSection: BreedSection
    };

    export type BreedSubsection = Partial<BreedSubsection_Schema>;
    export function BreedSubsection<T extends Partial<BreedSubsection>>(config: T): T;
    export function BreedSubsection<T extends Partial<BreedSubsection>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedSubsection<T extends Partial<BreedSubsection> | Partial<BreedSubsection>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedSection_Schema = {
      Id: string;
  Code: number;
  Name: string;
  BreedGroup: BreedGroup;
  Description: string
    };

    export type BreedSection = Partial<BreedSection_Schema>;
    export function BreedSection<T extends Partial<BreedSection>>(config: T): T;
    export function BreedSection<T extends Partial<BreedSection>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedSection<T extends Partial<BreedSection> | Partial<BreedSection>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedGroup_Schema = {
      Id: string;
  Code: number;
  Name: string;
  Provider: Account;
  Description: string
    };

    export type BreedGroup = Partial<BreedGroup_Schema>;
    export function BreedGroup<T extends Partial<BreedGroup>>(config: T): T;
    export function BreedGroup<T extends Partial<BreedGroup>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedGroup<T extends Partial<BreedGroup> | Partial<BreedGroup>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }

type BreedStandardStatus_Schema = {
      Id: string;
  Name: string;
  Provider: Account;
  Description: string
    };

    export type BreedStandardStatus = Partial<BreedStandardStatus_Schema>;
    export function BreedStandardStatus<T extends Partial<BreedStandardStatus>>(config: T): T;
    export function BreedStandardStatus<T extends Partial<BreedStandardStatus>[]>(
      config: T
    ): UnionToIntersection<T[number]>;
    export function BreedStandardStatus<T extends Partial<BreedStandardStatus> | Partial<BreedStandardStatus>[]>(
      config: T
    ): any {
      if (Array.isArray(config)) {
        return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
    return { ...config };
    }