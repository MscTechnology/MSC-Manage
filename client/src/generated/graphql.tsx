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
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  prmUser?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  usertypes?: Maybe<Array<Maybe<Usertype>>>;
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

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username?: string | null, password?: string | null } | null> | null };


export const GetUserDocument = gql`
    query GetUser {
  users {
    username
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