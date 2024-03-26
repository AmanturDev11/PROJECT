import React from "react";
import {
	useAddBuyMutation,
	useAddPluesMutation,
	useGetBasketQuery,
} from "../../redux/api/basket";
import scss from "./Basket.module.scss";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

interface SelectedProps {}

const Selected: React.FC<SelectedProps> = () => {
	const { data: basketProduct = [] } = useGetBasketQuery();
	const [addPlues] = useAddPluesMutation();
	const [addBuy] = useAddBuyMutation();

	const handlePluesProduct = async (id: number) => {
		console.log(id);

		const newProduct = {
			quantityToDecrease: -1,
		};

		await addPlues({ newProduct, id });
	};

	const handleMinutesProduct = async (id: number) => {
		console.log(id);

		const newProduct = {
			quantityToDecrease: +1,
		};

		await addPlues({ newProduct, id });
	};

	const handleBuyProduct = async (id: number) => {
		console.log(id);

		const newProduct = {
			quantityToDecrease: 1,
		};

		await addBuy({ newProduct, id });
	};
	return (
		<>
			<Header />
			<div className={scss.Basket}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.cards}>
							<div className={scss.card}>
								{basketProduct.map((item) => (
									<div className={scss.cardContent} key={item.product._id}>
										<div className={scss.mapContent}>
											<img
												src={item.product.photoUrl}
												alt={item.product.name}
											/>
											<h2>{item.product.price}</h2>
											<button
												onClick={() => handlePluesProduct(item.product._id)}>
												+
											</button>
											<span>{item.product.quantity}</span>
											<button
												onClick={() => handleMinutesProduct(item.product._id)}>
												-
											</button>
											<button
												onClick={() => handleBuyProduct(item.product._id)}>
												Купить
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Selected;
