import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
	useDeleteProductMutation,
	useEditProductMutation,
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
	const [editProduct] = useEditProductMutation();
	const [toogleFavoriteProduct] = useToggleFavoriteProductMutation();
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");
	const [photoUrl, setPhotoUrl] = useState<string>("");

	const handleEdit = async (_id: number) => {
		await editProduct({
			_id,
			name,
			price,
			quantity,
			photoUrl,
		});
		setEditResult(null);
	};

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
						{products.map((el) => {
							return (
								<div key={el._id} className={scss.mapContent}>
									{editResult === el._id ? (
										<>
											<input
												type="text"
												placeholder="name"
												value={name}
												onChange={(el) => {
													setName(el.target.value);
												}}
											/>
											<input
												type="text"
												placeholder="text"
												value={price}
												onChange={(el) => {
													setPrice(el.target.value);
												}}
											/>
											<input
												type="text"
												placeholder="text"
												value={quantity}
												onChange={(el) => {
													setQuantity(el.target.value);
												}}
											/>
											<input
												type="url"
												placeholder="url"
												value={photoUrl}
												onChange={(el) => {
													setPhotoUrl(el.target.value);
												}}
											/>
											<button onClick={() => setEditResult(null)}>
												Cancel
											</button>
											<button onClick={() => handleEdit(el._id)}>Save</button>
										</>
									) : (
										<div className={scss.cards}>
											<div className={scss.card}>
												<img src={el.photoUrl} alt="" />
												<h2>{el.productName}</h2>
												{/* <h2>{el.name}</h2> */}
												<p>{el.quantity}</p>
												<p>{el.price}</p>
												{/* <p>{el.name}</p>
										<p>{el.quantity}</p>
										<p>{el.productName}</p> */}
												<button
													onClick={() => {
														toogleFavoriteProduct(el._id);
													}}>
													Like
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
