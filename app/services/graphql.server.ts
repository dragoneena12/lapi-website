import { GraphQLClient } from 'graphql-request'
import { getSdk } from '@/generated/graphql'

let endpoint = ""

export const sdk = () => {
  const client = new GraphQLClient(endpoint, { fetch })
  return getSdk(client)
}

export const sdkWithToken = (token: string) => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    fetch
  })
  return getSdk(client)
}

export const setEndpoint = (newEndpoint: string) => {
  endpoint = newEndpoint
}
