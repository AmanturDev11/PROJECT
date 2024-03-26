/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface ProductRequest {
	_id: number
	name: string;
	photoUrl: string;
	price: string;
	quantity: string;
	// product: any;
}

interface ProductResponse {
	_id: number;
	name: string;
	photoUrl: string;
	price: string;
	quantity: string;
	product: any;
}

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
	tagTypes: ["Products"],
	endpoints: (builder) => {
		return {
			getProducts: builder.query<ProductResponse[], void>({
				query: () => ({
					url: "products",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				providesTags: ["Products"],
			}),
			createProduct: builder.mutation<ProductResponse, ProductRequest>({
				query: (body) => ({
					url: "products",
					method: "POST",
					body,
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["Products"],
			}),
			deleteProduct: builder.mutation({
				query: (_id) => ({
					url: `products/${_id}`,
					method: "DELETE",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["Products"],
			}),
			editProduct: builder.mutation<ProductResponse, ProductRequest>({
				query: ({_id, name, price, quantity, photoUrl}) => ({
					url: `products/${_id}`,
					method: "PUT",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
					body: {name, price, quantity, photoUrl}
				}),
				invalidatesTags: ['Products']
			})
		// 	query: ({ _id, productName, price, quantity, photoUrl }) => ({
		// 		url: `products/${_id}`,
		// 		method: "PUT",
		// 		body: { productName, price, quantity, photoUrl },
		// }),		
		// 	invalidatesTags: ["Products"],
		};
	},
});

export const {
	useGetProductsQuery,
	useCreateProductMutation,
	useDeleteProductMutation,
	// useEditProducMutation,
	useEditProductMutation
} = productsApi;
