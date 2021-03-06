import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type City = {
  __typename?: 'City';
  cityname?: Maybe<Scalars['String']>;
  districts?: Maybe<Array<Maybe<District>>>;
  id: Scalars['Long'];
  plateno: Scalars['Int'];
};

export type CityFilterInput = {
  and?: InputMaybe<Array<CityFilterInput>>;
  cityname?: InputMaybe<StringOperationFilterInput>;
  districts?: InputMaybe<ListFilterInputTypeOfDistrictFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<CityFilterInput>>;
  plateno?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type ComparableByteOperationFilterInput = {
  eq?: InputMaybe<Scalars['Byte']>;
  gt?: InputMaybe<Scalars['Byte']>;
  gte?: InputMaybe<Scalars['Byte']>;
  in?: InputMaybe<Array<Scalars['Byte']>>;
  lt?: InputMaybe<Scalars['Byte']>;
  lte?: InputMaybe<Scalars['Byte']>;
  neq?: InputMaybe<Scalars['Byte']>;
  ngt?: InputMaybe<Scalars['Byte']>;
  ngte?: InputMaybe<Scalars['Byte']>;
  nin?: InputMaybe<Array<Scalars['Byte']>>;
  nlt?: InputMaybe<Scalars['Byte']>;
  nlte?: InputMaybe<Scalars['Byte']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<Scalars['Long']>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<Scalars['Long']>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type ComparableNullableOfTimeSpanOperationFilterInput = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  ngt?: InputMaybe<Scalars['String']>;
  ngte?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nlt?: InputMaybe<Scalars['String']>;
  nlte?: InputMaybe<Scalars['String']>;
};

export type District = {
  __typename?: 'District';
  citys?: Maybe<City>;
  citysid: Scalars['Long'];
  districtname?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
};

export type DistrictFilterInput = {
  and?: InputMaybe<Array<DistrictFilterInput>>;
  citys?: InputMaybe<CityFilterInput>;
  citysid?: InputMaybe<ComparableInt64OperationFilterInput>;
  districtname?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<DistrictFilterInput>>;
};

export type Filetype = {
  __typename?: 'Filetype';
  id: Scalars['Long'];
  typename?: Maybe<Scalars['String']>;
  userfiles?: Maybe<Array<Maybe<Userfile>>>;
};

export type FiletypeFilterInput = {
  and?: InputMaybe<Array<FiletypeFilterInput>>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<FiletypeFilterInput>>;
  typename?: InputMaybe<StringOperationFilterInput>;
  userfiles?: InputMaybe<ListFilterInputTypeOfUserfileFilterInput>;
};

export type FiletypeInput = {
  id: Scalars['Long'];
  typename?: InputMaybe<Scalars['String']>;
  userfiles?: InputMaybe<Array<InputMaybe<UserfileInput>>>;
};

export type ListComparableByteOperationFilterInput = {
  all?: InputMaybe<ComparableByteOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComparableByteOperationFilterInput>;
  some?: InputMaybe<ComparableByteOperationFilterInput>;
};

export type ListFilterInputTypeOfDistrictFilterInput = {
  all?: InputMaybe<DistrictFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DistrictFilterInput>;
  some?: InputMaybe<DistrictFilterInput>;
};

export type ListFilterInputTypeOfUserFilterInput = {
  all?: InputMaybe<UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserFilterInput>;
  some?: InputMaybe<UserFilterInput>;
};

export type ListFilterInputTypeOfUserfileFilterInput = {
  all?: InputMaybe<UserfileFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserfileFilterInput>;
  some?: InputMaybe<UserfileFilterInput>;
};

export type ListFilterInputTypeOfUsersmovementFilterInput = {
  all?: InputMaybe<UsersmovementFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UsersmovementFilterInput>;
  some?: InputMaybe<UsersmovementFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovement?: Maybe<Usersmovement>;
  addUser?: Maybe<ResultModelOfUser>;
  addUserFile?: Maybe<ResultModelOfUserfile>;
  changeMovements?: Maybe<ResultModelOfUsersmovement>;
  deleteUser?: Maybe<ResultModelOfUser>;
  updateUser?: Maybe<ResultModelOfUser>;
};


export type MutationAddMovementArgs = {
  usersmovement?: InputMaybe<UsersmovementInput>;
};


export type MutationAddUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};


export type MutationAddUserFileArgs = {
  prmUserFile?: InputMaybe<UserfileInput>;
};


export type MutationChangeMovementsArgs = {
  prmId: Scalars['Long'];
  prmStatus?: InputMaybe<Scalars['String']>;
  prmTime: Scalars['DateTime'];
};


export type MutationDeleteUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};


export type MutationUpdateUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};

export type PesronelCustomlist = {
  __typename?: 'PesronelCustomlist';
  btntext?: Maybe<Scalars['String']>;
  btnvisible: Scalars['Boolean'];
  data?: Maybe<Array<Maybe<Usersmovement>>>;
};

export type PesronelCustomlistFilterInput = {
  and?: InputMaybe<Array<PesronelCustomlistFilterInput>>;
  btntext?: InputMaybe<StringOperationFilterInput>;
  btnvisible?: InputMaybe<BooleanOperationFilterInput>;
  data?: InputMaybe<ListFilterInputTypeOfUsersmovementFilterInput>;
  or?: InputMaybe<Array<PesronelCustomlistFilterInput>>;
};

export type Query = {
  __typename?: 'Query';
  cities?: Maybe<Array<Maybe<City>>>;
  districts?: Maybe<Array<Maybe<District>>>;
  filetypes?: Maybe<Array<Maybe<Filetype>>>;
  monthmovements?: Maybe<Array<Maybe<VwMountmovenment>>>;
  userFiles?: Maybe<Array<Maybe<Userfile>>>;
  users?: Maybe<Array<Maybe<User>>>;
  usersById?: Maybe<Array<Maybe<User>>>;
  usersmovements?: Maybe<Array<Maybe<Usersmovement>>>;
  usersmovementsById?: Maybe<Array<Maybe<Usersmovement>>>;
  usersmovementsByIdForLogin?: Maybe<PesronelCustomlist>;
  usersmovementsWithList?: Maybe<PesronelCustomlist>;
  usertypes?: Maybe<Array<Maybe<Usertype>>>;
};


export type QueryCitiesArgs = {
  where?: InputMaybe<CityFilterInput>;
};


export type QueryDistrictsArgs = {
  where?: InputMaybe<DistrictFilterInput>;
};


export type QueryMonthmovementsArgs = {
  where?: InputMaybe<VwMountmovenmentFilterInput>;
};


export type QueryUserFilesArgs = {
  where?: InputMaybe<UserfileFilterInput>;
};


export type QueryUsersArgs = {
  where?: InputMaybe<UserFilterInput>;
};


export type QueryUsersByIdArgs = {
  where?: InputMaybe<UserFilterInput>;
};


export type QueryUsersmovementsArgs = {
  where?: InputMaybe<UsersmovementFilterInput>;
};


export type QueryUsersmovementsByIdArgs = {
  where?: InputMaybe<UsersmovementFilterInput>;
};


export type QueryUsersmovementsByIdForLoginArgs = {
  prmId: Scalars['Long'];
  where?: InputMaybe<PesronelCustomlistFilterInput>;
};

export enum ResultEnum {
  Err = 'ERR',
  Suc = 'SUC'
}

export type ResultModelOfUser = {
  __typename?: 'ResultModelOfUser';
  data?: Maybe<User>;
  messageText?: Maybe<Scalars['String']>;
  resultType: ResultEnum;
};

export type ResultModelOfUserfile = {
  __typename?: 'ResultModelOfUserfile';
  data?: Maybe<Userfile>;
  messageText?: Maybe<Scalars['String']>;
  resultType: ResultEnum;
};

export type ResultModelOfUsersmovement = {
  __typename?: 'ResultModelOfUsersmovement';
  data?: Maybe<Usersmovement>;
  messageText?: Maybe<Scalars['String']>;
  resultType: ResultEnum;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  adress?: Maybe<Scalars['String']>;
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  cityid?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  districtsid?: Maybe<Scalars['Long']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  identificationnumber?: Maybe<Scalars['Decimal']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phonenumber?: Maybe<Scalars['Decimal']>;
  schoolname?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  surname?: Maybe<Scalars['String']>;
  userfiles?: Maybe<Array<Maybe<Userfile>>>;
  username?: Maybe<Scalars['String']>;
  usersmovements?: Maybe<Array<Maybe<Usersmovement>>>;
  usertypes?: Maybe<Usertype>;
  usertypesid?: Maybe<Scalars['Long']>;
};

export type UserFilterInput = {
  adress?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<UserFilterInput>>;
  changetime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  changeuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  cityid?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  createtime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  createuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  districtsid?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  gender?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  identificationnumber?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  password?: InputMaybe<StringOperationFilterInput>;
  phonenumber?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  schoolname?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<ComparableInt32OperationFilterInput>;
  surname?: InputMaybe<StringOperationFilterInput>;
  userfiles?: InputMaybe<ListFilterInputTypeOfUserfileFilterInput>;
  username?: InputMaybe<StringOperationFilterInput>;
  usersmovements?: InputMaybe<ListFilterInputTypeOfUsersmovementFilterInput>;
  usertypes?: InputMaybe<UsertypeFilterInput>;
  usertypesid?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
};

export type UserInput = {
  adress?: InputMaybe<Scalars['String']>;
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  cityid?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  districtsid?: InputMaybe<Scalars['Long']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  identificationnumber?: InputMaybe<Scalars['Decimal']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['Decimal']>;
  schoolname?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  surname?: InputMaybe<Scalars['String']>;
  userfiles?: InputMaybe<Array<InputMaybe<UserfileInput>>>;
  username?: InputMaybe<Scalars['String']>;
  usersmovements?: InputMaybe<Array<InputMaybe<UsersmovementInput>>>;
  usertypes?: InputMaybe<UsertypeInput>;
  usertypesid?: InputMaybe<Scalars['Long']>;
};

export type Userfile = {
  __typename?: 'Userfile';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  data?: Maybe<Array<Scalars['Byte']>>;
  extensitions?: Maybe<Scalars['String']>;
  filetypes?: Maybe<Filetype>;
  filetypesid: Scalars['Long'];
  id: Scalars['Long'];
  users?: Maybe<User>;
  usersid: Scalars['Long'];
};

export type UserfileFilterInput = {
  and?: InputMaybe<Array<UserfileFilterInput>>;
  changetime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  changeuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  createtime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  createuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  data?: InputMaybe<ListComparableByteOperationFilterInput>;
  extensitions?: InputMaybe<StringOperationFilterInput>;
  filetypes?: InputMaybe<FiletypeFilterInput>;
  filetypesid?: InputMaybe<ComparableInt64OperationFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<UserfileFilterInput>>;
  users?: InputMaybe<UserFilterInput>;
  usersid?: InputMaybe<ComparableInt64OperationFilterInput>;
};

export type UserfileInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  data?: InputMaybe<Array<Scalars['Byte']>>;
  extensitions?: InputMaybe<Scalars['String']>;
  filetypes?: InputMaybe<FiletypeInput>;
  filetypesid: Scalars['Long'];
  id: Scalars['Long'];
  users?: InputMaybe<UserInput>;
  usersid: Scalars['Long'];
};

export type Usersmovement = {
  __typename?: 'Usersmovement';
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  entrytime?: Maybe<Scalars['String']>;
  exittime?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  transactiondate?: Maybe<Scalars['DateTime']>;
  users?: Maybe<User>;
  usersid: Scalars['Long'];
};

export type UsersmovementFilterInput = {
  and?: InputMaybe<Array<UsersmovementFilterInput>>;
  createtime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  createuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  entrytime?: InputMaybe<ComparableNullableOfTimeSpanOperationFilterInput>;
  exittime?: InputMaybe<ComparableNullableOfTimeSpanOperationFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<UsersmovementFilterInput>>;
  transactiondate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  users?: InputMaybe<UserFilterInput>;
  usersid?: InputMaybe<ComparableInt64OperationFilterInput>;
};

export type UsersmovementInput = {
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  entrytime?: InputMaybe<Scalars['String']>;
  exittime?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  transactiondate?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserInput>;
  usersid: Scalars['Long'];
};

export type Usertype = {
  __typename?: 'Usertype';
  id: Scalars['Long'];
  typename?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type UsertypeFilterInput = {
  and?: InputMaybe<Array<UsertypeFilterInput>>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  or?: InputMaybe<Array<UsertypeFilterInput>>;
  typename?: InputMaybe<StringOperationFilterInput>;
  users?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
};

export type UsertypeInput = {
  id: Scalars['Long'];
  typename?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type VwMountmovenment = {
  __typename?: 'VwMountmovenment';
  ad?: Maybe<Scalars['String']>;
  ay?: Maybe<Scalars['String']>;
  eksikgun?: Maybe<Scalars['Decimal']>;
  gun?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  soyad?: Maybe<Scalars['String']>;
  toChar?: Maybe<Scalars['String']>;
};

export type VwMountmovenmentFilterInput = {
  ad?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<VwMountmovenmentFilterInput>>;
  ay?: InputMaybe<StringOperationFilterInput>;
  eksikgun?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  gun?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  id?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: InputMaybe<Array<VwMountmovenmentFilterInput>>;
  soyad?: InputMaybe<StringOperationFilterInput>;
  toChar?: InputMaybe<StringOperationFilterInput>;
};

export type AddMovementMutationVariables = Exact<{
  prmUserMovement?: InputMaybe<UsersmovementInput>;
}>;


export type AddMovementMutation = { __typename?: 'Mutation', addMovement?: { __typename?: 'Usersmovement', id: any, usersid: any } | null };

export type AddUserMutationVariables = Exact<{
  prmUser?: InputMaybe<UserInput>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'ResultModelOfUser', resultType: ResultEnum, messageText?: string | null } | null };

export type AddUserFileMutationVariables = Exact<{
  prmUserFile?: InputMaybe<UserfileInput>;
}>;


export type AddUserFileMutation = { __typename?: 'Mutation', addUserFile?: { __typename?: 'ResultModelOfUserfile', resultType: ResultEnum, messageText?: string | null } | null };

export type ChangeTimeMutationVariables = Exact<{
  prmId: Scalars['Long'];
  prmStatus?: InputMaybe<Scalars['String']>;
  prmTime: Scalars['DateTime'];
}>;


export type ChangeTimeMutation = { __typename?: 'Mutation', changeMovements?: { __typename?: 'ResultModelOfUsersmovement', messageText?: string | null, resultType: ResultEnum } | null };

export type UpdateUserMutationVariables = Exact<{
  prmUser?: InputMaybe<UserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ResultModelOfUser', resultType: ResultEnum, messageText?: string | null } | null };

export type GetCityByIdQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetCityByIdQuery = { __typename?: 'Query', cities?: Array<{ __typename?: 'City', id: any, cityname?: string | null, plateno: number } | null> | null };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities?: Array<{ __typename?: 'City', id: any, cityname?: string | null, districts?: Array<{ __typename?: 'District', id: any, citysid: any, districtname?: string | null } | null> | null } | null> | null };

export type GetDistrictByIdQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetDistrictByIdQuery = { __typename?: 'Query', districts?: Array<{ __typename?: 'District', id: any, districtname?: string | null } | null> | null };

export type GetDistrictsByCityidQueryVariables = Exact<{
  prmCityid: Scalars['Long'];
}>;


export type GetDistrictsByCityidQuery = { __typename?: 'Query', districts?: Array<{ __typename?: 'District', id: any, districtname?: string | null } | null> | null };

export type GetFileTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFileTypesQuery = { __typename?: 'Query', filetypes?: Array<{ __typename?: 'Filetype', id: any, typename?: string | null } | null> | null };

export type GetFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilesQuery = { __typename?: 'Query', userFiles?: Array<{ __typename?: 'Userfile', id: any, usersid: any, data?: Array<any> | null, filetypesid: any, extensitions?: string | null, createuser?: any | null, createtime?: any | null, changeuser?: any | null, changetime?: any | null } | null> | null };

export type GetMonthMovementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthMovementsQuery = { __typename?: 'Query', monthmovements?: Array<{ __typename?: 'VwMountmovenment', id?: any | null, ay?: string | null, toChar?: string | null, ad?: string | null, soyad?: string | null, eksikgun?: any | null, gun?: any | null } | null> | null };

export type GetUserDetailQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUserDetailQuery = { __typename?: 'Query', usersById?: Array<{ __typename?: 'User', name?: string | null, surname?: string | null, username?: string | null, password?: string | null, id: any, status: number, cityid?: any | null, districtsid?: any | null, schoolname?: string | null, usertypesid?: any | null, email?: string | null, adress?: string | null, identificationnumber?: any | null, phonenumber?: any | null } | null> | null };

export type GetUserMovementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMovementsQuery = { __typename?: 'Query', usersmovements?: Array<{ __typename?: 'Usersmovement', id: any, usersid: any, entrytime?: string | null, exittime?: string | null, transactiondate?: any | null, users?: { __typename?: 'User', id: any, name?: string | null, surname?: string | null, username?: string | null } | null } | null> | null };

export type GetUserMovementByIdQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUserMovementByIdQuery = { __typename?: 'Query', usersmovementsById?: Array<{ __typename?: 'Usersmovement', id: any, usersid: any, transactiondate?: any | null, entrytime?: string | null, exittime?: string | null, users?: { __typename?: 'User', id: any, name?: string | null, surname?: string | null } | null } | null> | null };

export type GetUserMovementsByIdForLoginQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUserMovementsByIdForLoginQuery = { __typename?: 'Query', usersmovementsByIdForLogin?: { __typename?: 'PesronelCustomlist', btntext?: string | null, btnvisible: boolean, data?: Array<{ __typename?: 'Usersmovement', id: any, usersid: any, entrytime?: string | null, exittime?: string | null, transactiondate?: any | null } | null> | null } | null };

export type GetUserTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserTypesQuery = { __typename?: 'Query', usertypes?: Array<{ __typename?: 'Usertype', id: any, typename?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: any, schoolname?: string | null, usertypesid?: any | null, cityid?: any | null, districtsid?: any | null, status: number, email?: string | null, adress?: string | null, identificationnumber?: any | null, phonenumber?: any | null, createuser?: any | null, createtime?: any | null, changeuser?: any | null, changetime?: any | null, name?: string | null, username?: string | null, surname?: string | null, password?: string | null, usertypes?: { __typename?: 'Usertype', typename?: string | null } | null, userfiles?: Array<{ __typename?: 'Userfile', id: any, filetypesid: any, extensitions?: string | null, filetypes?: { __typename?: 'Filetype', typename?: string | null } | null } | null> | null } | null> | null };


export const AddMovementDocument = gql`
    mutation AddMovement($prmUserMovement: UsersmovementInput) {
  addMovement(usersmovement: $prmUserMovement) {
    id
    usersid
  }
}
    `;
export type AddMovementMutationFn = Apollo.MutationFunction<AddMovementMutation, AddMovementMutationVariables>;

/**
 * __useAddMovementMutation__
 *
 * To run a mutation, you first call `useAddMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovementMutation, { data, loading, error }] = useAddMovementMutation({
 *   variables: {
 *      prmUserMovement: // value for 'prmUserMovement'
 *   },
 * });
 */
export function useAddMovementMutation(baseOptions?: Apollo.MutationHookOptions<AddMovementMutation, AddMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMovementMutation, AddMovementMutationVariables>(AddMovementDocument, options);
      }
export type AddMovementMutationHookResult = ReturnType<typeof useAddMovementMutation>;
export type AddMovementMutationResult = Apollo.MutationResult<AddMovementMutation>;
export type AddMovementMutationOptions = Apollo.BaseMutationOptions<AddMovementMutation, AddMovementMutationVariables>;
export const AddUserDocument = gql`
    mutation AddUser($prmUser: UserInput) {
  addUser(prmUser: $prmUser) {
    resultType
    messageText
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      prmUser: // value for 'prmUser'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const AddUserFileDocument = gql`
    mutation AddUserFile($prmUserFile: UserfileInput) {
  addUserFile(prmUserFile: $prmUserFile) {
    resultType
    messageText
  }
}
    `;
export type AddUserFileMutationFn = Apollo.MutationFunction<AddUserFileMutation, AddUserFileMutationVariables>;

/**
 * __useAddUserFileMutation__
 *
 * To run a mutation, you first call `useAddUserFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserFileMutation, { data, loading, error }] = useAddUserFileMutation({
 *   variables: {
 *      prmUserFile: // value for 'prmUserFile'
 *   },
 * });
 */
export function useAddUserFileMutation(baseOptions?: Apollo.MutationHookOptions<AddUserFileMutation, AddUserFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserFileMutation, AddUserFileMutationVariables>(AddUserFileDocument, options);
      }
export type AddUserFileMutationHookResult = ReturnType<typeof useAddUserFileMutation>;
export type AddUserFileMutationResult = Apollo.MutationResult<AddUserFileMutation>;
export type AddUserFileMutationOptions = Apollo.BaseMutationOptions<AddUserFileMutation, AddUserFileMutationVariables>;
export const ChangeTimeDocument = gql`
    mutation ChangeTime($prmId: Long!, $prmStatus: String, $prmTime: DateTime!) {
  changeMovements(prmId: $prmId, prmStatus: $prmStatus, prmTime: $prmTime) {
    messageText
    resultType
  }
}
    `;
export type ChangeTimeMutationFn = Apollo.MutationFunction<ChangeTimeMutation, ChangeTimeMutationVariables>;

/**
 * __useChangeTimeMutation__
 *
 * To run a mutation, you first call `useChangeTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTimeMutation, { data, loading, error }] = useChangeTimeMutation({
 *   variables: {
 *      prmId: // value for 'prmId'
 *      prmStatus: // value for 'prmStatus'
 *      prmTime: // value for 'prmTime'
 *   },
 * });
 */
export function useChangeTimeMutation(baseOptions?: Apollo.MutationHookOptions<ChangeTimeMutation, ChangeTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeTimeMutation, ChangeTimeMutationVariables>(ChangeTimeDocument, options);
      }
export type ChangeTimeMutationHookResult = ReturnType<typeof useChangeTimeMutation>;
export type ChangeTimeMutationResult = Apollo.MutationResult<ChangeTimeMutation>;
export type ChangeTimeMutationOptions = Apollo.BaseMutationOptions<ChangeTimeMutation, ChangeTimeMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($prmUser: UserInput) {
  updateUser(prmUser: $prmUser) {
    resultType
    messageText
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      prmUser: // value for 'prmUser'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetCityByIdDocument = gql`
    query GetCityById($prmId: Long!) {
  cities(where: {id: {eq: $prmId}}) {
    id
    cityname
    plateno
  }
}
    `;

/**
 * __useGetCityByIdQuery__
 *
 * To run a query within a React component, call `useGetCityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityByIdQuery({
 *   variables: {
 *      prmId: // value for 'prmId'
 *   },
 * });
 */
export function useGetCityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
      }
export function useGetCityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
export type GetCityByIdQueryHookResult = ReturnType<typeof useGetCityByIdQuery>;
export type GetCityByIdLazyQueryHookResult = ReturnType<typeof useGetCityByIdLazyQuery>;
export type GetCityByIdQueryResult = Apollo.QueryResult<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const GetCitiesDocument = gql`
    query GetCities {
  cities {
    id
    cityname
    districts {
      id
      citysid
      districtname
    }
  }
}
    `;

/**
 * __useGetCitiesQuery__
 *
 * To run a query within a React component, call `useGetCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
      }
export function useGetCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
        }
export type GetCitiesQueryHookResult = ReturnType<typeof useGetCitiesQuery>;
export type GetCitiesLazyQueryHookResult = ReturnType<typeof useGetCitiesLazyQuery>;
export type GetCitiesQueryResult = Apollo.QueryResult<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetDistrictByIdDocument = gql`
    query GetDistrictById($prmId: Long!) {
  districts(where: {id: {eq: $prmId}}) {
    id
    districtname
  }
}
    `;

/**
 * __useGetDistrictByIdQuery__
 *
 * To run a query within a React component, call `useGetDistrictByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistrictByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistrictByIdQuery({
 *   variables: {
 *      prmId: // value for 'prmId'
 *   },
 * });
 */
export function useGetDistrictByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDistrictByIdQuery, GetDistrictByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDistrictByIdQuery, GetDistrictByIdQueryVariables>(GetDistrictByIdDocument, options);
      }
export function useGetDistrictByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDistrictByIdQuery, GetDistrictByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDistrictByIdQuery, GetDistrictByIdQueryVariables>(GetDistrictByIdDocument, options);
        }
export type GetDistrictByIdQueryHookResult = ReturnType<typeof useGetDistrictByIdQuery>;
export type GetDistrictByIdLazyQueryHookResult = ReturnType<typeof useGetDistrictByIdLazyQuery>;
export type GetDistrictByIdQueryResult = Apollo.QueryResult<GetDistrictByIdQuery, GetDistrictByIdQueryVariables>;
export const GetDistrictsByCityidDocument = gql`
    query GetDistrictsByCityid($prmCityid: Long!) {
  districts(where: {citysid: {eq: $prmCityid}}) {
    id
    districtname
  }
}
    `;

/**
 * __useGetDistrictsByCityidQuery__
 *
 * To run a query within a React component, call `useGetDistrictsByCityidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistrictsByCityidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistrictsByCityidQuery({
 *   variables: {
 *      prmCityid: // value for 'prmCityid'
 *   },
 * });
 */
export function useGetDistrictsByCityidQuery(baseOptions: Apollo.QueryHookOptions<GetDistrictsByCityidQuery, GetDistrictsByCityidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDistrictsByCityidQuery, GetDistrictsByCityidQueryVariables>(GetDistrictsByCityidDocument, options);
      }
export function useGetDistrictsByCityidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDistrictsByCityidQuery, GetDistrictsByCityidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDistrictsByCityidQuery, GetDistrictsByCityidQueryVariables>(GetDistrictsByCityidDocument, options);
        }
export type GetDistrictsByCityidQueryHookResult = ReturnType<typeof useGetDistrictsByCityidQuery>;
export type GetDistrictsByCityidLazyQueryHookResult = ReturnType<typeof useGetDistrictsByCityidLazyQuery>;
export type GetDistrictsByCityidQueryResult = Apollo.QueryResult<GetDistrictsByCityidQuery, GetDistrictsByCityidQueryVariables>;
export const GetFileTypesDocument = gql`
    query GetFileTypes {
  filetypes {
    id
    typename
  }
}
    `;

/**
 * __useGetFileTypesQuery__
 *
 * To run a query within a React component, call `useGetFileTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFileTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetFileTypesQuery, GetFileTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileTypesQuery, GetFileTypesQueryVariables>(GetFileTypesDocument, options);
      }
export function useGetFileTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileTypesQuery, GetFileTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileTypesQuery, GetFileTypesQueryVariables>(GetFileTypesDocument, options);
        }
export type GetFileTypesQueryHookResult = ReturnType<typeof useGetFileTypesQuery>;
export type GetFileTypesLazyQueryHookResult = ReturnType<typeof useGetFileTypesLazyQuery>;
export type GetFileTypesQueryResult = Apollo.QueryResult<GetFileTypesQuery, GetFileTypesQueryVariables>;
export const GetFilesDocument = gql`
    query GetFiles {
  userFiles {
    id
    usersid
    data
    filetypesid
    extensitions
    createuser
    createtime
    changeuser
    changetime
  }
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export const GetMonthMovementsDocument = gql`
    query GetMonthMovements {
  monthmovements {
    id
    ay
    toChar
    ad
    soyad
    eksikgun
    gun
  }
}
    `;

/**
 * __useGetMonthMovementsQuery__
 *
 * To run a query within a React component, call `useGetMonthMovementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMonthMovementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMonthMovementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMonthMovementsQuery(baseOptions?: Apollo.QueryHookOptions<GetMonthMovementsQuery, GetMonthMovementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMonthMovementsQuery, GetMonthMovementsQueryVariables>(GetMonthMovementsDocument, options);
      }
export function useGetMonthMovementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMonthMovementsQuery, GetMonthMovementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMonthMovementsQuery, GetMonthMovementsQueryVariables>(GetMonthMovementsDocument, options);
        }
export type GetMonthMovementsQueryHookResult = ReturnType<typeof useGetMonthMovementsQuery>;
export type GetMonthMovementsLazyQueryHookResult = ReturnType<typeof useGetMonthMovementsLazyQuery>;
export type GetMonthMovementsQueryResult = Apollo.QueryResult<GetMonthMovementsQuery, GetMonthMovementsQueryVariables>;
export const GetUserDetailDocument = gql`
    query GetUserDetail($prmId: Long!) {
  usersById(where: {id: {eq: $prmId}}) {
    name
    surname
    username
    password
    id
    status
    cityid
    districtsid
    schoolname
    usertypesid
    status
    email
    adress
    identificationnumber
    phonenumber
  }
}
    `;

/**
 * __useGetUserDetailQuery__
 *
 * To run a query within a React component, call `useGetUserDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDetailQuery({
 *   variables: {
 *      prmId: // value for 'prmId'
 *   },
 * });
 */
export function useGetUserDetailQuery(baseOptions: Apollo.QueryHookOptions<GetUserDetailQuery, GetUserDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDetailQuery, GetUserDetailQueryVariables>(GetUserDetailDocument, options);
      }
export function useGetUserDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDetailQuery, GetUserDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDetailQuery, GetUserDetailQueryVariables>(GetUserDetailDocument, options);
        }
export type GetUserDetailQueryHookResult = ReturnType<typeof useGetUserDetailQuery>;
export type GetUserDetailLazyQueryHookResult = ReturnType<typeof useGetUserDetailLazyQuery>;
export type GetUserDetailQueryResult = Apollo.QueryResult<GetUserDetailQuery, GetUserDetailQueryVariables>;
export const GetUserMovementsDocument = gql`
    query GetUserMovements {
  usersmovements {
    id
    usersid
    entrytime
    exittime
    transactiondate
    users {
      id
      name
      surname
      username
    }
  }
}
    `;

/**
 * __useGetUserMovementsQuery__
 *
 * To run a query within a React component, call `useGetUserMovementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMovementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMovementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserMovementsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMovementsQuery, GetUserMovementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMovementsQuery, GetUserMovementsQueryVariables>(GetUserMovementsDocument, options);
      }
export function useGetUserMovementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMovementsQuery, GetUserMovementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMovementsQuery, GetUserMovementsQueryVariables>(GetUserMovementsDocument, options);
        }
export type GetUserMovementsQueryHookResult = ReturnType<typeof useGetUserMovementsQuery>;
export type GetUserMovementsLazyQueryHookResult = ReturnType<typeof useGetUserMovementsLazyQuery>;
export type GetUserMovementsQueryResult = Apollo.QueryResult<GetUserMovementsQuery, GetUserMovementsQueryVariables>;
export const GetUserMovementByIdDocument = gql`
    query GetUserMovementById($prmId: Long!) {
  usersmovementsById(where: {usersid: {eq: $prmId}}) {
    id
    usersid
    transactiondate
    entrytime
    exittime
    users {
      id
      name
      surname
    }
  }
}
    `;

/**
 * __useGetUserMovementByIdQuery__
 *
 * To run a query within a React component, call `useGetUserMovementByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMovementByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMovementByIdQuery({
 *   variables: {
 *      prmId: // value for 'prmId'
 *   },
 * });
 */
export function useGetUserMovementByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserMovementByIdQuery, GetUserMovementByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMovementByIdQuery, GetUserMovementByIdQueryVariables>(GetUserMovementByIdDocument, options);
      }
export function useGetUserMovementByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMovementByIdQuery, GetUserMovementByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMovementByIdQuery, GetUserMovementByIdQueryVariables>(GetUserMovementByIdDocument, options);
        }
export type GetUserMovementByIdQueryHookResult = ReturnType<typeof useGetUserMovementByIdQuery>;
export type GetUserMovementByIdLazyQueryHookResult = ReturnType<typeof useGetUserMovementByIdLazyQuery>;
export type GetUserMovementByIdQueryResult = Apollo.QueryResult<GetUserMovementByIdQuery, GetUserMovementByIdQueryVariables>;
export const GetUserMovementsByIdForLoginDocument = gql`
    query GetUserMovementsByIdForLogin($prmId: Long!) {
  usersmovementsByIdForLogin(prmId: $prmId) {
    btntext
    btnvisible
    data {
      id
      usersid
      entrytime
      exittime
      transactiondate
    }
  }
}
    `;

/**
 * __useGetUserMovementsByIdForLoginQuery__
 *
 * To run a query within a React component, call `useGetUserMovementsByIdForLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMovementsByIdForLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMovementsByIdForLoginQuery({
 *   variables: {
 *      prmId: // value for 'prmId'
 *   },
 * });
 */
export function useGetUserMovementsByIdForLoginQuery(baseOptions: Apollo.QueryHookOptions<GetUserMovementsByIdForLoginQuery, GetUserMovementsByIdForLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMovementsByIdForLoginQuery, GetUserMovementsByIdForLoginQueryVariables>(GetUserMovementsByIdForLoginDocument, options);
      }
export function useGetUserMovementsByIdForLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMovementsByIdForLoginQuery, GetUserMovementsByIdForLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMovementsByIdForLoginQuery, GetUserMovementsByIdForLoginQueryVariables>(GetUserMovementsByIdForLoginDocument, options);
        }
export type GetUserMovementsByIdForLoginQueryHookResult = ReturnType<typeof useGetUserMovementsByIdForLoginQuery>;
export type GetUserMovementsByIdForLoginLazyQueryHookResult = ReturnType<typeof useGetUserMovementsByIdForLoginLazyQuery>;
export type GetUserMovementsByIdForLoginQueryResult = Apollo.QueryResult<GetUserMovementsByIdForLoginQuery, GetUserMovementsByIdForLoginQueryVariables>;
export const GetUserTypesDocument = gql`
    query GetUserTypes {
  usertypes {
    id
    typename
  }
}
    `;

/**
 * __useGetUserTypesQuery__
 *
 * To run a query within a React component, call `useGetUserTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTypesQuery, GetUserTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTypesQuery, GetUserTypesQueryVariables>(GetUserTypesDocument, options);
      }
export function useGetUserTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTypesQuery, GetUserTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTypesQuery, GetUserTypesQueryVariables>(GetUserTypesDocument, options);
        }
export type GetUserTypesQueryHookResult = ReturnType<typeof useGetUserTypesQuery>;
export type GetUserTypesLazyQueryHookResult = ReturnType<typeof useGetUserTypesLazyQuery>;
export type GetUserTypesQueryResult = Apollo.QueryResult<GetUserTypesQuery, GetUserTypesQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  users {
    id
    schoolname
    usertypesid
    cityid
    districtsid
    status
    email
    adress
    identificationnumber
    phonenumber
    createuser
    createtime
    changeuser
    changetime
    phonenumber
    name
    username
    surname
    password
    usertypes {
      typename
    }
    userfiles {
      id
      filetypesid
      extensitions
      filetypes {
        typename
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;