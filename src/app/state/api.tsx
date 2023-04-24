import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_APP_BASE_URL }),
  reducerPath: "dashbaordApi",
  tagTypes: ["dashboard"],
  endpoints: (build) => ({
    getDashboardData: build.query({
      query: () => "",
      providesTags: ["dashboard"],
    }),
  }),
});

export const { useGetDashboardDataQuery } = api;
