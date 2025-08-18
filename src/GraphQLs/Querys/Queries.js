import { gql } from "@apollo/client";


//--------Main client1 APIS------------------
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

//---------Client2 API-----------------------------
export const GET_CHARACTER= gql`
   query GetCharacter($page: Int!){
      characters(page: $page){
        results{
          id
          name
          status
          species
          image
        }
      }
   }
`

export default GET_COUNTRIES;


