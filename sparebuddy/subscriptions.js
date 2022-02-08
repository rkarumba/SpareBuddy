/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSparebuddy = /* GraphQL */ `
  subscription OnCreateSparebuddy(
    $id: [ID]
    $name: [String]
    $quantity: [Int]
    $link: [AWSURL]
    $SparesNeeded: [Int]
  ) {
    onCreateSparebuddy(
      id: $id
      name: $name
      quantity: $quantity
      link: $link
      SparesNeeded: $SparesNeeded
    ) {
      id
      name
      quantity
      link
      SparesNeeded
    }
  }
`;
export const onUpdateSparebuddy = /* GraphQL */ `
  subscription OnUpdateSparebuddy(
    $id: [ID]
    $name: [String]
    $quantity: [Int]
    $link: [AWSURL]
    $SparesNeeded: [Int]
  ) {
    onUpdateSparebuddy(
      id: $id
      name: $name
      quantity: $quantity
      link: $link
      SparesNeeded: $SparesNeeded
    ) {
      id
      name
      quantity
      link
      SparesNeeded
    }
  }
`;
export const onDeleteSparebuddy = /* GraphQL */ `
  subscription OnDeleteSparebuddy(
    $id: [ID]
    $name: [String]
    $quantity: [Int]
    $link: [AWSURL]
    $SparesNeeded: [Int]
  ) {
    onDeleteSparebuddy(
      id: $id
      name: $name
      quantity: $quantity
      link: $link
      SparesNeeded: $SparesNeeded
    ) {
      id
      name
      quantity
      link
      SparesNeeded
    }
  }
`;
