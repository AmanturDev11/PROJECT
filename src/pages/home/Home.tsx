import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
	useDeleteProductMutation,
	useGetProductsQuery,
} from "../../redux/api/productApi";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import AddProductForm from "../../components/forms/addProductForm/AddProductFrom";
import { useToggleFavoriteProductMutation } from "../../redux/api/favoriteProductsApi";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import scss from "./Home.module.scss";
import { usePostBasketMutation } from "../../redux/api/basket";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [deleteProduct] = useDeleteProductMutation();
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const [postBasket] = usePostBasketMutation();
	const [editResult, setEditResult] = useState<number | null>(null);
	const { data: products = [], refetch } = useGetProductsQuery();
	const [toogleFavoriteProduct] = useToggleFavoriteProductMutation();

	const handleCloseModal = () => {
		setIsOpen(!isOpen);
	};

	const handleDeleteProduct = async (id: number) => {
		await deleteProduct(id);
	};

	function EditResultFunk(id: number) {
		setEditResult(id);
	}

	useEffect(() => {
		const isAuth = localStorage.getItem("isAuth");
		if (isAuth !== "true") {
			navigate("/login");
		}
		refetch();
	}, [navigate]);

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		navigate("/login");
	};

	return (
		<>
			<Header />
			<div className={scss.Home}>
				<div className="container">
					<div className={scss.content}>
						{products.map((el: any) => {
							return (
								<div
									key={el._id}
									className={scss.mapContent}
									// style={{
									// 	width: "300px",
									// 	height: "350px",
									// 	background: "green",
									// 	marginTop: "10px",
									// 	gap: "90px",
									// }}
								>
									{editResult === el._id ? (
										<>
											<input type="text" />
											<input type="text" />
											<input type="text" />
											<input type="text" />
											<button onClick={() => setEditResult(null)}>
												Cancel
											</button>
											<button>Save</button>
										</>
									) : (
										<div className={scss.cards}>
											<div className={scss.card}>
												<img src={el.photoUrl} alt="" />
												<p>{el.price}</p>
												{/* <p>{el.name}</p>
										<p>{el.quantity}</p>
										<p>{el.productName}</p> */}
												<button
													onClick={() => {
														toogleFavoriteProduct(el._id);
													}}>
													heart
												</button>
												<button onClick={() => postBasket(el._id)}>
													Basket
												</button>
												<button onClick={() => handleDeleteProduct(el._id)}>
													delete
												</button>
												<button onClick={() => EditResultFunk(el._id)}>
													Edit
												</button>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
					<div className={scss.buttonContent}>
						<button onClick={logout}>Выйти</button>
						<button onClick={handleCloseModal}>Открыть модальное окно</button>
						<Modal isOpen={isOpen} onClose={handleCloseModal}>
							<AddProductForm closeModal={handleCloseModal} />
						</Modal>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
