/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetFavoriteProductsQuery } from "../../redux/api/favoriteProductsApi";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import scss from "./FavoritesProducts.module.scss";

const FavotiresProducts: React.FC = () => {
	const { data: products = [] } = useGetFavoriteProductsQuery();
	console.log(products);

	return (
		<>
			<Header />
			<div className={scss.FavoritesProducts}>
				<div className="container">
					<div className={scss.content}>
						{products.map((item) => (
							<div key={item._id}>
								{/* <h2>{item.name}</h2>
								<p>{item.price}</p>
								<p>{item.quantity}</p> */}
								{item.product !== null && (
									<img src={item.product.photoUrl} alt={item.product.price} />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FavotiresProducts;
