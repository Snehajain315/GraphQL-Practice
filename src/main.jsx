import { createRoot } from 'react-dom/client'
import { ApolloProvider, gql } from '@apollo/client';
import { client } from './client.js';
//import { client2 } from './client.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client} 
// client2={client2}
  >
    <App />
  </ApolloProvider>
)
