import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1/",
  }),
  tagTypes: ["contactsApi"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: "/contact",
        headers: {
          Authorization: "Bearer 32|vL6phUrIfbUCDPxFi6m9wHQthZXUJ2SgZryxMBL1",
        },
      }),
    }),
  }),
});

export const { useGetAllQuery } = contactsApi;
