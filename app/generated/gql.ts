/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getHotelDetail($id: ID!) {\n    hotel(id: $id) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n": types.GetHotelDetailDocument,
    "\n  mutation checkin($hotelID: ID!, $otp: String!) {\n    checkin(input: { hotelID: $hotelID, otp: $otp }) {\n      id\n    }\n  }\n": types.CheckinDocument,
    "\n  mutation editHotel(\n    $id: ID!\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    editHotel(\n      input: {\n        id: $id\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n": types.EditHotelDocument,
    "\n  query getHotelKey($id: ID!) {\n    hotelKey(id: $id) {\n      key\n    }\n  }\n": types.GetHotelKeyDocument,
    "\n  query findHotels {\n    hotels {\n      id\n      ownerID\n      name\n      location\n    }\n  }\n": types.FindHotelsDocument,
    "\n  query stayCount {\n    stayCount\n  }\n": types.StayCountDocument,
    "\n  mutation addHotel(\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    addHotel(\n      input: {\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n": types.AddHotelDocument,
    "\n  query findMyStays {\n    stays {\n      id\n      checkinTime\n      hotel {\n        name\n      }\n    }\n  }\n": types.FindMyStaysDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getHotelDetail($id: ID!) {\n    hotel(id: $id) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"): (typeof documents)["\n  query getHotelDetail($id: ID!) {\n    hotel(id: $id) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation checkin($hotelID: ID!, $otp: String!) {\n    checkin(input: { hotelID: $hotelID, otp: $otp }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation checkin($hotelID: ID!, $otp: String!) {\n    checkin(input: { hotelID: $hotelID, otp: $otp }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editHotel(\n    $id: ID!\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    editHotel(\n      input: {\n        id: $id\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"): (typeof documents)["\n  mutation editHotel(\n    $id: ID!\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    editHotel(\n      input: {\n        id: $id\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getHotelKey($id: ID!) {\n    hotelKey(id: $id) {\n      key\n    }\n  }\n"): (typeof documents)["\n  query getHotelKey($id: ID!) {\n    hotelKey(id: $id) {\n      key\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query findHotels {\n    hotels {\n      id\n      ownerID\n      name\n      location\n    }\n  }\n"): (typeof documents)["\n  query findHotels {\n    hotels {\n      id\n      ownerID\n      name\n      location\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query stayCount {\n    stayCount\n  }\n"): (typeof documents)["\n  query stayCount {\n    stayCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addHotel(\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    addHotel(\n      input: {\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"): (typeof documents)["\n  mutation addHotel(\n    $name: String!\n    $location: String!\n    $carbonAwards: [String!]!\n    $fullereneAwards: [String!]!\n    $carbonNanotubeAwards: [String!]!\n    $grapheneAwards: [String!]!\n    $diamondAwards: [String!]!\n  ) {\n    addHotel(\n      input: {\n        name: $name\n        location: $location\n        carbonAwards: $carbonAwards\n        fullereneAwards: $fullereneAwards\n        carbonNanotubeAwards: $carbonNanotubeAwards\n        grapheneAwards: $grapheneAwards\n        diamondAwards: $diamondAwards\n      }\n    ) {\n      id\n      name\n      location\n      carbonAwards\n      fullereneAwards\n      carbonNanotubeAwards\n      grapheneAwards\n      diamondAwards\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query findMyStays {\n    stays {\n      id\n      checkinTime\n      hotel {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query findMyStays {\n    stays {\n      id\n      checkinTime\n      hotel {\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;