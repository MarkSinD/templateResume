import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Post} from "../../../models/firstPage/FirstPage";

export const jsonPlaceholderApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["jsonPlaceholder"],
	reducerPath: 'jsonPlaceholderApi',
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], null>({
			query: () => ({
				url: `/posts`,
			}),
		}),
	}),
})

export const {useGetPostsQuery} = jsonPlaceholderApi
