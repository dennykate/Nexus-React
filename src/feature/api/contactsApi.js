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
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }),
      providesTags: ["contactsApi"],
    }),
    destroy: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }),
      invalidatesTags: ["contactsApi"],
    }),
    getSingleContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        headers: {
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }),
      providesTags: ["contactsApi"],
    }),
    updateContact: builder.mutation({
      query: (contact) => ({
        url: `/contact/${contact.id}`,
        method: "PUT",
        body: contact,
        headers: {
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }),
      invalidatesTags: ["contactsApi"],
    }),
    createContact: builder.mutation({
      query: (contact) => ({
        url: "/contact",
        method: "POST",
        body: contact,
        headers: {
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }),
      invalidatesTags: ["contactsApi"],
    }),
  }),
});

export const {
  useGetAllQuery,
  useCreateContactMutation,
  useGetSingleContactQuery,
  useUpdateContactMutation,
  useDestroyMutation,
} = contactsApi;
