import { ApolloClient, InMemoryCache } from "@apollo/client"

// export const client= new ApolloClient({
//     uri: 'https://node-js-graphql.onrender.com/graphql',
//     cache: new InMemoryCache()
// });

export const client= new ApolloClient({
    uri:'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
})