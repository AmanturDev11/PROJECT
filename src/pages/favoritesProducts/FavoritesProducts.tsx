/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetFavoriteProductsQuery } from "../../redux/api/favoriteProductsApi";

const FavotiresProducts: React.FC = () => {
	const { data: products = [] } = useGetFavoriteProductsQuery();
	console.log(products);
	
	return (
		<div>
			{products.map((item) => (
				<div key={item._id}>
					<img src={item.product.photoUrl} alt={item.product.price} />
				</div>
			))}
		</div>
	);
};

export default FavotiresProducts;
