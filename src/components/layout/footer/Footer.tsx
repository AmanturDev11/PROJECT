import scss from "./Footer.module.scss";
import img1 from "../../../assets/image/BRANDNAME.svg";
import img2 from "../../../assets/image/Frame 102.svg";
import img3 from "../../../assets/image/Frame 103.svg";
import img4 from "../../../assets/image/Frame 101.svg";
import img5 from "../../../assets/image/vector shape 1.svg";

const Footer = () => {
	return (
		<div className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<hr />
					<div className={scss.cardsContentbor}>
						<div className={scss.cards}>
							<div>
								<img src={img1} alt="" />
							</div>
							<div>
								<img src={img2} alt="" />
							</div>
							<div>
								<img src={img3} alt="" />
							</div>
							<div>
								<img src={img4} alt="" />
							</div>
						</div>
						<div className={scss.cardcontent}>
							<p>brandname.com</p>
							<img src={img5} alt="" />
							<p>2023</p>
							<p>Все права защищены</p>
						</div>
					</div>

					<div className={scss.cards2}>
						<div className={scss.card}>
							{/* <div className={scss.card3}> */}
							{/* <img src={img5} alt="" />
								<img src={img5} alt="" /> */}
							<p>ONLINESHOP</p>
							<p>ONLINESHOP</p>
							{/* </div> */}
						</div>
						<div className={scss.card2}>
							{/* <img src={img5} alt="" />
							<img src={img5} alt="" />
							<img src={img5} alt="" /> */}
							<p>ONLINESHOP</p>
							<p>ONLINESHOP</p>
							<p>ONLINESHOP</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
