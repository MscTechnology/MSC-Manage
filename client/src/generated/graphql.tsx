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

export type City = {
  __typename?: 'City';
  cityname?: Maybe<Scalars['String']>;
  districts?: Maybe<Array<Maybe<District>>>;
  id: Scalars['Long'];
  personels?: Maybe<Array<Maybe<Personel>>>;
  plateno: Scalars['Int'];
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

export type District = {
  __typename?: 'District';
  citys?: Maybe<City>;
  citysid: Scalars['Long'];
  districtname?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  personels?: Maybe<Array<Maybe<Personel>>>;
};

export type Filetype = {
  __typename?: 'Filetype';
  id: Scalars['Long'];
  personelfiles?: Maybe<Array<Maybe<Personelfile>>>;
  typename?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};

export type Personel = {
  __typename?: 'Personel';
  adress?: Maybe<Scalars['String']>;
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  city?: Maybe<City>;
  cityid?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  districts?: Maybe<District>;
  districtsid?: Maybe<Scalars['Long']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  identificationnumber?: Maybe<Scalars['Decimal']>;
  personelfiles?: Maybe<Array<Maybe<Personelfile>>>;
  phonenumber?: Maybe<Scalars['Decimal']>;
  schoolname?: Maybe<Scalars['String']>;
  usersid: Scalars['Long'];
};

export type Personelfile = {
  __typename?: 'Personelfile';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  data?: Maybe<Array<Scalars['Byte']>>;
  extensitions?: Maybe<Scalars['String']>;
  filetypes?: Maybe<Filetype>;
  filetypesid: Scalars['Long'];
  id: Scalars['Long'];
  personel?: Maybe<Personel>;
  personelid: Scalars['Long'];
};

export type Query = {
  __typename?: 'Query';
  personels?: Maybe<Array<Maybe<Personel>>>;
  users?: Maybe<Array<Maybe<User>>>;
  usersById?: Maybe<Array<Maybe<User>>>;
  usertypes?: Maybe<Array<Maybe<Usertype>>>;
};


export type QueryUsersByIdArgs = {
  where?: InputMaybe<UserFilterInput>;
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
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  id: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  usertypesid?: Maybe<Scalars['Long']>;
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  changetime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  changeuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  createtime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  createuser?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  id?: InputMaybe<ComparableInt64OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  password?: InputMaybe<StringOperationFilterInput>;
  surname?: InputMaybe<StringOperationFilterInput>;
  username?: InputMaybe<StringOperationFilterInput>;
  usertypesid?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
};

export type UserInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  id: Scalars['Long'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  usertypesid?: InputMaybe<Scalars['Long']>;
};

export type Usertype = {
  __typename?: 'Usertype';
  id: Scalars['Long'];
  typename?: Maybe<Scalars['String']>;
};

export type GetUserDetailQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUserDetailQuery = { __typename?: 'Query', usersById?: Array<{ __typename?: 'User', name?: string | null, surname?: string | null, username?: string | null } | null> | null };

export type GetUserTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserTypesQuery = { __typename?: 'Query', usertypes?: Array<{ __typename?: 'Usertype', id: any, typename?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username?: string | null, password?: string | null, usertypesid?: any | null, name?: string | null, surname?: string | null } | null> | null };


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
    username
    password
    usertypesid
    name
    surname
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