import scss from "./Header.module.scss";
import img from "../../../assets/image/logo.svg";
import img1 from "../../../assets/image/Button - Войти.svg";
import img2 from "../../../assets/image/Button - Избранное (1).svg";
import img3 from "../../../assets/image/Button - Избранное.svg";
import { useNavigate } from "react-router";
// import Modal2 from "../../modal2/Modal2";
// import { useNavigate } from "react-router";
// import { useState } from "react";

const Header = () => {
	const navigate = useNavigate();
	// const navigate = useNavigate();
	// const {data! produc = []} = useGetBasketQuery();
	// const [openModal, setOpenModal] = useState(false);
	// const handleModal = () => {
	// 	setOpenModal(!openModal),
	// };
	// const logout = () => {
	// 	localStorage.removeItem("token");
	// 	localStorage.removeItem("isAuth");
	// 	navigate("/login");
	// };
	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<>
							<div className={scss.card}>
								<img src={img} alt="" />
							</div>
							<div className={scss.cards2}>
								<img src={img1} alt="logo" />
								<img
									onClick={() => navigate("/favorites-products")}
									src={img2}
									alt="logo"
								/>
								<img onClick={() => navigate("/basket")} src={img3} alt="logo" />
							</div>
						</>
					</div>
				</div>
			</header>
			{/* <Modal2  isOpen={openModal} onClose={handleModal}>
				<div>
					{produc?.map((item: any) => (
						<div key={item._id}>
							<img src={item.product.photoUrl} alt="logo" />
							<p>{item.product.price}</p>
							<p>{item.product.producName}</p>
							<p>{item.quantity}</p>
							<p>{item.name}</p>
							<p>{item.quantity}</p>
							<p>{item.productName}</p>
						</div>
					))}
				</div>
			</Modal2> */}
		</>
	);
};

export default Header;
