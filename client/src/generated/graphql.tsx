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
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** The `TimeSpan` scalar represents an ISO-8601 compliant duration type. */
  TimeSpan: any;
};

export type City = {
  __typename?: 'City';
  cityname?: Maybe<Scalars['String']>;
  districts?: Maybe<Array<Maybe<District>>>;
  id: Scalars['Long'];
  plateno: Scalars['Int'];
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
  eq?: InputMaybe<Scalars['TimeSpan']>;
  gt?: InputMaybe<Scalars['TimeSpan']>;
  gte?: InputMaybe<Scalars['TimeSpan']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['TimeSpan']>>>;
  lt?: InputMaybe<Scalars['TimeSpan']>;
  lte?: InputMaybe<Scalars['TimeSpan']>;
  neq?: InputMaybe<Scalars['TimeSpan']>;
  ngt?: InputMaybe<Scalars['TimeSpan']>;
  ngte?: InputMaybe<Scalars['TimeSpan']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['TimeSpan']>>>;
  nlt?: InputMaybe<Scalars['TimeSpan']>;
  nlte?: InputMaybe<Scalars['TimeSpan']>;
};

export type District = {
  __typename?: 'District';
  citys?: Maybe<City>;
  citysid: Scalars['Long'];
  districtname?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
};

export type ListFilterInputTypeOfUserFilterInput = {
  all?: InputMaybe<UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserFilterInput>;
  some?: InputMaybe<UserFilterInput>;
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
  deleteUser?: Maybe<ResultModelOfUser>;
  updateUser?: Maybe<ResultModelOfUser>;
};


export type MutationAddMovementArgs = {
  usersmovement?: InputMaybe<UsersmovementInput>;
};


export type MutationAddUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};


export type MutationDeleteUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};


export type MutationUpdateUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  cities?: Maybe<Array<Maybe<City>>>;
  users?: Maybe<Array<Maybe<User>>>;
  usersById?: Maybe<Array<Maybe<User>>>;
  usertypes?: Maybe<Array<Maybe<Usertype>>>;
};


export type QueryUsersArgs = {
  where?: InputMaybe<UserFilterInput>;
};


export type QueryUsersByIdArgs = {
  where?: InputMaybe<UserFilterInput>;
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
  username?: InputMaybe<Scalars['String']>;
  usersmovements?: InputMaybe<Array<InputMaybe<UsersmovementInput>>>;
  usertypes?: InputMaybe<UsertypeInput>;
  usertypesid?: InputMaybe<Scalars['Long']>;
};

export type Usersmovement = {
  __typename?: 'Usersmovement';
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  entrytime?: Maybe<Scalars['TimeSpan']>;
  exittime?: Maybe<Scalars['TimeSpan']>;
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
  entrytime?: InputMaybe<Scalars['TimeSpan']>;
  exittime?: InputMaybe<Scalars['TimeSpan']>;
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

export type AddMovementMutationVariables = Exact<{
  prmUserMovement?: InputMaybe<UsersmovementInput>;
}>;


export type AddMovementMutation = { __typename?: 'Mutation', addMovement?: { __typename?: 'Usersmovement', id: any, usersid: any } | null };

export type AddUserMutationVariables = Exact<{
  prmUser?: InputMaybe<UserInput>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'ResultModelOfUser', resultType: ResultEnum, messageText?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  prmUser?: InputMaybe<UserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ResultModelOfUser', resultType: ResultEnum, messageText?: string | null } | null };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities?: Array<{ __typename?: 'City', id: any, cityname?: string | null } | null> | null };

export type GetUserDetailQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUserDetailQuery = { __typename?: 'Query', usersById?: Array<{ __typename?: 'User', name?: string | null, surname?: string | null, username?: string | null } | null> | null };

export type GetUserTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserTypesQuery = { __typename?: 'Query', usertypes?: Array<{ __typename?: 'Usertype', id: any, typename?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: any, schoolname?: string | null, usertypesid?: any | null, name?: string | null, username?: string | null, surname?: string | null, password?: string | null, usertypes?: { __typename?: 'Usertype', typename?: string | null } | null } | null> | null };


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
export const GetCitiesDocument = gql`
    query GetCities {
  cities {
    id
    cityname
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
export const GetUserDetailDocument = gql`
    query GetUserDetail($prmId: Long!) {
  usersById(where: {id: {eq: $prmId}}) {
    name
    surname
    username
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
    usertypes {
      typename
    }
    name
    username
    surname
    password
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