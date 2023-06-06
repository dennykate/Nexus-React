import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1/",
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (token) => ({
        url: `/user-profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["profileApi"],
    }),
    checkPassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "POST",
        body: data?.password,
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      }),
      invalidatesTags: ["profileApi"],
    }),
  }),
});
export const { useGetProfileQuery, useCheckPasswordMutation } = profileApi;
