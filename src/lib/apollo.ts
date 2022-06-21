import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oawohz1ipa01z756bp6j3h/master',
    cache: new InMemoryCache()
    // cache: faz o cache na memória da aplicação. Existem outras formas de cache que podem ser usadas, como o LocalStorage;
})