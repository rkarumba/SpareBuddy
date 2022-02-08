/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSparebuddy = /* GraphQL */ `
  query GetSparebuddy($id: [ID]!) {
    getSparebuddy(id: $id) {
      id
      name
      quantity
      link
      SparesNeeded
    }
  }
`;
export const listSparebuddies = /* GraphQL */ `
  query ListSparebuddies(
    $filter: TableSparebuddyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSparebuddies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        link
        SparesNeeded
      }
      nextToken
    }
  }
`;
