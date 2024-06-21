import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent?: Maybe<Scalars['Boolean']['output']>;
  createUniversity: Scalars['Boolean']['output'];
  deleteStudent: Scalars['Boolean']['output'];
  deleteUniversity: Scalars['Boolean']['output'];
};


export type MutationCreateStudentArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneno?: InputMaybe<Scalars['Float']['input']>;
  studentId?: InputMaybe<Scalars['String']['input']>;
  universityId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUniversityArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  universityID?: InputMaybe<Scalars['String']['input']>;
  universityName: Scalars['String']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUniversityArgs = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getStudents: Array<Student>;
  getUniversities: Array<University>;
};

export type Student = {
  __typename?: 'Student';
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mail?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneno: Scalars['Float']['output'];
  university?: Maybe<University>;
  universityId?: Maybe<Scalars['String']['output']>;
};

export type University = {
  __typename?: 'University';
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  student?: Maybe<Array<Student>>;
};

export type CreateStudentMutationVariables = Exact<{
  studentId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  universityId?: InputMaybe<Scalars['String']['input']>;
  phoneno?: InputMaybe<Scalars['Float']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent?: boolean | null };

export type CreateUniversityMutationVariables = Exact<{
  universityName: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  universityId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUniversityMutation = { __typename?: 'Mutation', createUniversity: boolean };

export type DeleteStudentMutationVariables = Exact<{
  deleteStudentId: Scalars['String']['input'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: boolean };

export type DeleteUniversityMutationVariables = Exact<{
  deleteUniversityId: Scalars['String']['input'];
}>;


export type DeleteUniversityMutation = { __typename?: 'Mutation', deleteUniversity: boolean };

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', getStudents: Array<{ __typename?: 'Student', id: string, name: string, address: string, mail?: string | null, phoneno: number, universityId?: string | null, university?: { __typename?: 'University', location?: string | null, name: string } | null }> };

export type GetUniversitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUniversitiesQuery = { __typename?: 'Query', getUniversities: Array<{ __typename?: 'University', location?: string | null, name: string, id: string, student?: Array<{ __typename?: 'Student', name: string }> | null }> };


export const CreateStudentDocument = gql`
    mutation CreateStudent($studentId: String, $name: String, $mail: String, $universityId: String, $phoneno: Float, $address: String) {
  createStudent(
    studentId: $studentId
    name: $name
    mail: $mail
    universityId: $universityId
    phoneno: $phoneno
    address: $address
  )
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      name: // value for 'name'
 *      mail: // value for 'mail'
 *      universityId: // value for 'universityId'
 *      phoneno: // value for 'phoneno'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const CreateUniversityDocument = gql`
    mutation CreateUniversity($universityName: String!, $location: String, $universityId: String) {
  createUniversity(
    universityName: $universityName
    location: $location
    universityID: $universityId
  )
}
    `;
export type CreateUniversityMutationFn = Apollo.MutationFunction<CreateUniversityMutation, CreateUniversityMutationVariables>;

/**
 * __useCreateUniversityMutation__
 *
 * To run a mutation, you first call `useCreateUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUniversityMutation, { data, loading, error }] = useCreateUniversityMutation({
 *   variables: {
 *      universityName: // value for 'universityName'
 *      location: // value for 'location'
 *      universityId: // value for 'universityId'
 *   },
 * });
 */
export function useCreateUniversityMutation(baseOptions?: Apollo.MutationHookOptions<CreateUniversityMutation, CreateUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUniversityMutation, CreateUniversityMutationVariables>(CreateUniversityDocument, options);
      }
export type CreateUniversityMutationHookResult = ReturnType<typeof useCreateUniversityMutation>;
export type CreateUniversityMutationResult = Apollo.MutationResult<CreateUniversityMutation>;
export type CreateUniversityMutationOptions = Apollo.BaseMutationOptions<CreateUniversityMutation, CreateUniversityMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation DeleteStudent($deleteStudentId: String!) {
  deleteStudent(id: $deleteStudentId)
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      deleteStudentId: // value for 'deleteStudentId'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const DeleteUniversityDocument = gql`
    mutation DeleteUniversity($deleteUniversityId: String!) {
  deleteUniversity(id: $deleteUniversityId)
}
    `;
export type DeleteUniversityMutationFn = Apollo.MutationFunction<DeleteUniversityMutation, DeleteUniversityMutationVariables>;

/**
 * __useDeleteUniversityMutation__
 *
 * To run a mutation, you first call `useDeleteUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUniversityMutation, { data, loading, error }] = useDeleteUniversityMutation({
 *   variables: {
 *      deleteUniversityId: // value for 'deleteUniversityId'
 *   },
 * });
 */
export function useDeleteUniversityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUniversityMutation, DeleteUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUniversityMutation, DeleteUniversityMutationVariables>(DeleteUniversityDocument, options);
      }
export type DeleteUniversityMutationHookResult = ReturnType<typeof useDeleteUniversityMutation>;
export type DeleteUniversityMutationResult = Apollo.MutationResult<DeleteUniversityMutation>;
export type DeleteUniversityMutationOptions = Apollo.BaseMutationOptions<DeleteUniversityMutation, DeleteUniversityMutationVariables>;
export const GetStudentsDocument = gql`
    query GetStudents {
  getStudents {
    id
    name
    address
    mail
    phoneno
    university {
      location
      name
    }
    universityId
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export function useGetStudentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsSuspenseQueryHookResult = ReturnType<typeof useGetStudentsSuspenseQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetUniversitiesDocument = gql`
    query GetUniversities {
  getUniversities {
    location
    name
    id
    student {
      name
    }
  }
}
    `;

/**
 * __useGetUniversitiesQuery__
 *
 * To run a query within a React component, call `useGetUniversitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUniversitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUniversitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUniversitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetUniversitiesQuery, GetUniversitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUniversitiesQuery, GetUniversitiesQueryVariables>(GetUniversitiesDocument, options);
      }
export function useGetUniversitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUniversitiesQuery, GetUniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUniversitiesQuery, GetUniversitiesQueryVariables>(GetUniversitiesDocument, options);
        }
export function useGetUniversitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUniversitiesQuery, GetUniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUniversitiesQuery, GetUniversitiesQueryVariables>(GetUniversitiesDocument, options);
        }
export type GetUniversitiesQueryHookResult = ReturnType<typeof useGetUniversitiesQuery>;
export type GetUniversitiesLazyQueryHookResult = ReturnType<typeof useGetUniversitiesLazyQuery>;
export type GetUniversitiesSuspenseQueryHookResult = ReturnType<typeof useGetUniversitiesSuspenseQuery>;
export type GetUniversitiesQueryResult = Apollo.QueryResult<GetUniversitiesQuery, GetUniversitiesQueryVariables>;