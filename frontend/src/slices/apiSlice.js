//parent to other API slices

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/'
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({baseURL: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Recipe', 'Order', 'User'],
    endpoints: (builder) => ({})
});

