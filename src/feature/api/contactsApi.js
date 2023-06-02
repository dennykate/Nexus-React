import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1/",
  }),
  tagTypes: ["contactsApi"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (page) => ({
        url: `/contact?page=${page}`,
        headers: {
          Authorization: "Bearer 32|vL6phUrIfbUCDPxFi6m9wHQthZXUJ2SgZryxMBL1",
        },
      }),
      providesTags: ["contactsApi"],
    }),
    destroy: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer 32|vL6phUrIfbUCDPxFi6m9wHQthZXUJ2SgZryxMBL1",
        },
      }),
      invalidatesTags: ["contactsApi"],
    }),
  }),
});

export const { useGetAllQuery, useDestroyMutation } = contactsApi;