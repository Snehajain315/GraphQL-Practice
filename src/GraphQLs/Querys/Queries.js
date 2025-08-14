import { gql } from "@apollo/client";

const GET_COUNTRIES= gql`
 query GetList {
  countries {
    name
    currency
    currencySymbol
    id
  }
 }
`

export const GET_CITIES= gql`
  query GetCities($citiesId: ID!){
    cities (id: $citiesId){
      name
      id
    }
  }
`
export const GET_USER= gql`
  query GetUsers($page: String!, $size: String!) {
   users(page: $page, size: $size) {
    data {
      id
      name
      email
    }
   }
  }
`
export default GET_COUNTRIES;


