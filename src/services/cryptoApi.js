import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '16eb8693e8msh3c5fdfe1928ced8p1d54f9jsn5187052a10cc'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})