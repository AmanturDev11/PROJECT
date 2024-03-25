// import React, { FC, ReactNode } from "react";
// import { ReactDOM } from "react-dom";
// import scss from "./Modal2.module.scss";

// interface ModalProps {
// 	isOpen: boolean;
// 	onClose: () => void;
// 	children: ReactNode;
// }

// const Modal2: FC<ModalProps> = ({ isOpen, onClose, children }) => {
// 	if (!isOpen) return null;

// 	return ReactDOM.createPortal(
// 		<div>
// 			<div>
// 				<button onClick={onClose}>Закрыть</button>
// 				{children}
// 			</div>
// 		</div>,
// 		document.getElementById("modal-root")!
// 	);
// };

// export default Modal2;

import React, { FC } from 'react'

const Modal2: FC = () => {
  return (
    <div>Modal2</div>
  )
}

export default Modal2