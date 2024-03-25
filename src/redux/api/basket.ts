/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface ProductRequest {
	_id: number;
}

interface ProductResponse {
	_id: number;
	name: string;
	photoUrl: string;
	price: string;
	quantity: string;
	product: any;
}

export const basketApi = createApi({
	reducerPath: "basketApi",
	baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
	tagTypes: ["basketProducts"],
	endpoints: (builder) => {
		return {
			getBasket: builder.query<ProductResponse[], void>({
				query: () => ({
					url: "basket",
					method: "GET",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				providesTags: ["basketProducts"],
			}),
			postBasket: builder.mutation<ProductResponse, ProductRequest>({
				query: (id) => ({
					url: `basket/${id}`,
					method: "POST",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["basketProducts"],
			}),
			addPlues: builder.mutation({
				query: ({ newProduct, id }) => ({
					url: `product-buy/${id}`,
					method: "PATCH",
					body: newProduct,
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["basketProducts"],
			}),
			addBuy: builder.mutation({
				query: ({ newProduct, id }) => ({
					url: `product-buy/${id}`,
					method: "PATCH",
					body: newProduct,
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["basketProducts"],
			}),
		};
	},
});

export const {
	useGetBasketQuery,
	usePostBasketMutation,
	useAddPluesMutation,
	useAddBuyMutation
} = basketApi;
