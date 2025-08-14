import { gql } from "@apollo/client";

export const ADD_USER= gql`

  mutation AddUsers($name: String!, $email: String!, $password: String!){
  
    register(name: $name, email: $email, password: $password){
       name
       email
       password
    }
  }
`