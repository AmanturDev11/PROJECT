import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFound from "../pages/notFound/NotFound";
import FavotiresProducts from "../pages/favoritesProducts/FavoritesProducts";
import Selected from "../pages/basket/Basket";

const MainRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/favorites-products" element={<FavotiresProducts />} />
				<Route path="/basket" element={<Selected />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
