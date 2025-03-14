import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { handleError } from "common/utils"

export const baseApi = createApi({
  reducerPath: "todolistsApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "https://social-network.samuraijs.com/api/1.1/",
      prepareHeaders: (headers) => {
        headers.set("API-KEY", `dc51b6a7-f90f-4230-9d2c-4a6c12ce1b73`)
        headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
        return headers
      },
    })(args, api, extraOptions)

    handleError(api, result)

    return result
  },
  endpoints: () => ({}),
  tagTypes: ["Todolist", "Task"],
})
