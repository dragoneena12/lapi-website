import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Hotel = {
  __typename?: 'Hotel';
  carbonAwards: Array<Scalars['String']['output']>;
  carbonNanotubeAwards: Array<Scalars['String']['output']>;
  diamondAwards: Array<Scalars['String']['output']>;
  fullereneAwards: Array<Scalars['String']['output']>;
  grapheneAwards: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerID: Scalars['ID']['output'];
};

export type HotelKey = {
  __typename?: 'HotelKey';
  key: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHotel: Hotel;
  checkin: Stay;
  editHotel: Hotel;
};


export type MutationAddHotelArgs = {
  input: NewHotel;
};


export type MutationCheckinArgs = {
  input: Check;
};


export type MutationEditHotelArgs = {
  input: EditHotel;
};

export type Query = {
  __typename?: 'Query';
  hotel: Hotel;
  hotelKey: HotelKey;
  hotels: Array<Hotel>;
  stayCount: Scalars['Int']['output'];
  stays: Array<Stay>;
};


export type QueryHotelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelKeyArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Partner = 'PARTNER',
  User = 'USER'
}

export type Stay = {
  __typename?: 'Stay';
  checkinTime: Scalars['DateTime']['output'];
  hotelID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  userID: Scalars['ID']['output'];
};

export type Check = {
  hotelID: Scalars['ID']['input'];
  otp: Scalars['String']['input'];
};

export type EditHotel = {
  carbonAwards: Array<Scalars['String']['input']>;
  carbonNanotubeAwards: Array<Scalars['String']['input']>;
  diamondAwards: Array<Scalars['String']['input']>;
  fullereneAwards: Array<Scalars['String']['input']>;
  grapheneAwards: Array<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type NewHotel = {
  carbonAwards: Array<Scalars['String']['input']>;
  carbonNanotubeAwards: Array<Scalars['String']['input']>;
  diamondAwards: Array<Scalars['String']['input']>;
  fullereneAwards: Array<Scalars['String']['input']>;
  grapheneAwards: Array<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddHotelMutationVariables = Exact<{
  name: Scalars['String']['input'];
  location: Scalars['String']['input'];
  carbonAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  fullereneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  carbonNanotubeAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  grapheneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  diamondAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type AddHotelMutation = { __typename?: 'Mutation', addHotel: { __typename?: 'Hotel', id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type CheckinMutationVariables = Exact<{
  hotelID: Scalars['ID']['input'];
  otp: Scalars['String']['input'];
}>;


export type CheckinMutation = { __typename?: 'Mutation', checkin: { __typename?: 'Stay', id: string } };

export type EditHotelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  location: Scalars['String']['input'];
  carbonAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  fullereneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  carbonNanotubeAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  grapheneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  diamondAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type EditHotelMutation = { __typename?: 'Mutation', editHotel: { __typename?: 'Hotel', id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type FindHotelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindHotelsQuery = { __typename?: 'Query', hotels: Array<{ __typename?: 'Hotel', id: string, ownerID: string, name: string, location: string }> };

export type StayCountQueryVariables = Exact<{ [key: string]: never; }>;


export type StayCountQuery = { __typename?: 'Query', stayCount: number };

export type FindMyStaysQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyStaysQuery = { __typename?: 'Query', stays: Array<{ __typename?: 'Stay', id: string, hotelID: string }> };

export type GetHotelDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHotelDetailQuery = { __typename?: 'Query', hotel: { __typename?: 'Hotel', id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type GetHotelKeyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHotelKeyQuery = { __typename?: 'Query', hotelKey: { __typename?: 'HotelKey', key: string } };


export const AddHotelDocument = gql`
    mutation addHotel($name: String!, $location: String!, $carbonAwards: [String!]!, $fullereneAwards: [String!]!, $carbonNanotubeAwards: [String!]!, $grapheneAwards: [String!]!, $diamondAwards: [String!]!) {
  addHotel(
    input: {name: $name, location: $location, carbonAwards: $carbonAwards, fullereneAwards: $fullereneAwards, carbonNanotubeAwards: $carbonNanotubeAwards, grapheneAwards: $grapheneAwards, diamondAwards: $diamondAwards}
  ) {
    id
    ownerID
    name
    location
    carbonAwards
    fullereneAwards
    carbonNanotubeAwards
    grapheneAwards
    diamondAwards
  }
}
    `;
export const CheckinDocument = gql`
    mutation checkin($hotelID: ID!, $otp: String!) {
  checkin(input: {hotelID: $hotelID, otp: $otp}) {
    id
  }
}
    `;
export const EditHotelDocument = gql`
    mutation editHotel($id: ID!, $name: String!, $location: String!, $carbonAwards: [String!]!, $fullereneAwards: [String!]!, $carbonNanotubeAwards: [String!]!, $grapheneAwards: [String!]!, $diamondAwards: [String!]!) {
  editHotel(
    input: {id: $id, name: $name, location: $location, carbonAwards: $carbonAwards, fullereneAwards: $fullereneAwards, carbonNanotubeAwards: $carbonNanotubeAwards, grapheneAwards: $grapheneAwards, diamondAwards: $diamondAwards}
  ) {
    id
    ownerID
    name
    location
    carbonAwards
    fullereneAwards
    carbonNanotubeAwards
    grapheneAwards
    diamondAwards
  }
}
    `;
export const FindHotelsDocument = gql`
    query findHotels {
  hotels {
    id
    ownerID
    name
    location
  }
}
    `;
export const StayCountDocument = gql`
    query stayCount {
  stayCount
}
    `;
export const FindMyStaysDocument = gql`
    query findMyStays {
  stays {
    id
    hotelID
  }
}
    `;
export const GetHotelDetailDocument = gql`
    query getHotelDetail($id: ID!) {
  hotel(id: $id) {
    id
    ownerID
    name
    location
    carbonAwards
    fullereneAwards
    carbonNanotubeAwards
    grapheneAwards
    diamondAwards
  }
}
    `;
export const GetHotelKeyDocument = gql`
    query getHotelKey($id: ID!) {
  hotelKey(id: $id) {
    key
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addHotel(variables: AddHotelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddHotelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddHotelMutation>(AddHotelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addHotel', 'mutation', variables);
    },
    checkin(variables: CheckinMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckinMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CheckinMutation>(CheckinDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'checkin', 'mutation', variables);
    },
    editHotel(variables: EditHotelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EditHotelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditHotelMutation>(EditHotelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'editHotel', 'mutation', variables);
    },
    findHotels(variables?: FindHotelsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindHotelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindHotelsQuery>(FindHotelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findHotels', 'query', variables);
    },
    stayCount(variables?: StayCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StayCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StayCountQuery>(StayCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stayCount', 'query', variables);
    },
    findMyStays(variables?: FindMyStaysQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindMyStaysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindMyStaysQuery>(FindMyStaysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findMyStays', 'query', variables);
    },
    getHotelDetail(variables: GetHotelDetailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHotelDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHotelDetailQuery>(GetHotelDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHotelDetail', 'query', variables);
    },
    getHotelKey(variables: GetHotelKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHotelKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHotelKeyQuery>(GetHotelKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHotelKey', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;