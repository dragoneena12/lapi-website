/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  key: Scalars['String']['output'];
};

export type Mutation = {
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

export type GetHotelDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHotelDetailQuery = { hotel: { id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type CheckinMutationVariables = Exact<{
  hotelID: Scalars['ID']['input'];
  otp: Scalars['String']['input'];
}>;


export type CheckinMutation = { checkin: { id: string } };

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


export type EditHotelMutation = { editHotel: { id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type GetHotelKeyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHotelKeyQuery = { hotelKey: { key: string } };

export type FindHotelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindHotelsQuery = { hotels: Array<{ id: string, ownerID: string, name: string, location: string }> };

export type StayCountQueryVariables = Exact<{ [key: string]: never; }>;


export type StayCountQuery = { stayCount: number };

export type AddHotelMutationVariables = Exact<{
  name: Scalars['String']['input'];
  location: Scalars['String']['input'];
  carbonAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  fullereneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  carbonNanotubeAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  grapheneAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
  diamondAwards: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type AddHotelMutation = { addHotel: { id: string, ownerID: string, name: string, location: string, carbonAwards: Array<string>, fullereneAwards: Array<string>, carbonNanotubeAwards: Array<string>, grapheneAwards: Array<string>, diamondAwards: Array<string> } };

export type FindMyStaysQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyStaysQuery = { stays: Array<{ id: string, hotelID: string }> };


export const GetHotelDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHotelDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"carbonAwards"}},{"kind":"Field","name":{"kind":"Name","value":"fullereneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"carbonNanotubeAwards"}},{"kind":"Field","name":{"kind":"Name","value":"grapheneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"diamondAwards"}}]}}]}}]} as unknown as DocumentNode<GetHotelDetailQuery, GetHotelDetailQueryVariables>;
export const CheckinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"checkin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hotelID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hotelID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hotelID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CheckinMutation, CheckinMutationVariables>;
export const EditHotelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editHotel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbonAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullereneAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbonNanotubeAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grapheneAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"diamondAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editHotel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carbonAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbonAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullereneAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullereneAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carbonNanotubeAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbonNanotubeAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"grapheneAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grapheneAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"diamondAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"diamondAwards"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"carbonAwards"}},{"kind":"Field","name":{"kind":"Name","value":"fullereneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"carbonNanotubeAwards"}},{"kind":"Field","name":{"kind":"Name","value":"grapheneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"diamondAwards"}}]}}]}}]} as unknown as DocumentNode<EditHotelMutation, EditHotelMutationVariables>;
export const GetHotelKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHotelKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotelKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GetHotelKeyQuery, GetHotelKeyQueryVariables>;
export const FindHotelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findHotels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<FindHotelsQuery, FindHotelsQueryVariables>;
export const StayCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"stayCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stayCount"}}]}}]} as unknown as DocumentNode<StayCountQuery, StayCountQueryVariables>;
export const AddHotelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addHotel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbonAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullereneAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbonNanotubeAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grapheneAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"diamondAwards"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHotel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carbonAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbonAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullereneAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullereneAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carbonNanotubeAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbonNanotubeAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"grapheneAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grapheneAwards"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"diamondAwards"},"value":{"kind":"Variable","name":{"kind":"Name","value":"diamondAwards"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"carbonAwards"}},{"kind":"Field","name":{"kind":"Name","value":"fullereneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"carbonNanotubeAwards"}},{"kind":"Field","name":{"kind":"Name","value":"grapheneAwards"}},{"kind":"Field","name":{"kind":"Name","value":"diamondAwards"}}]}}]}}]} as unknown as DocumentNode<AddHotelMutation, AddHotelMutationVariables>;
export const FindMyStaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findMyStays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hotelID"}}]}}]}}]} as unknown as DocumentNode<FindMyStaysQuery, FindMyStaysQueryVariables>;