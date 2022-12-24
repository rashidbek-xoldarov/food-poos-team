import { useState, useRef, forwardRef, useEffect } from "react";
import { Cash, CreditCard, PayPal } from "../../../assets/images/icons/icons";
import { InputField } from "./InputFiled";
import "./PaymentModal.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PaymentModal = ({ show, ModalHide }) => {
	const [card, setCard] = useState("");
	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCV, setCardCV] = useState("");
	const cardd = useRef(null);
	const name = useRef(null);
	const number = useRef(null);
	const expiry = useRef(null);
	const cv = useRef(null);
	const orderType = useRef(null)


	const HandleInputs = () => {
		
		if (cardName.length === 13) {
			number.current.focus();
		}

		if (cardNumber.length === 16) {
			expiry.current.focus()
		}

		if (cardExpiry.length === 4) {
			cv.current.focus()
		}
		if (cardCV.length === 3) {
			orderType.current.focus();
		}
	}

	HandleInputs()

	const handleValues = () => {
		console.log(`Customer's payment details: \n
		Card type: ${card}\n
		Cardholder name: ${cardName}\n
		Card Number: ${parseInt(cardNumber)}\n
		Card Expiry Date: ${cardExpiry}\n
		Card CV number: ${cardCV}.`);
		ModalHide();
		clearAllValues()
	};

	const clearAllValues = () => {
		setCard("")
		setCardCV("")
		setCardName("")
		setCardExpiry("")
		setCardNumber("")
	}
	
	const showHideClassName = show ? "modal show" : "modal hide";

	return (
		<div className={`payment_box ${showHideClassName} `}>
			<div className="payment_header">
				<h3 className="payment_txt">Payment</h3>
				<p className="payment_desc">3 payment method available</p>
			</div>
			<div className="payment_body">
				<h4 className="payment_txt">Payment Method</h4>
				<form className="payment_form">
					<div className="cards">
						<label>
							<InputField
								type="radio"
								name="payment"
								data-type="credit-card"
								value="Credit-Card"
								forwardRef={cardd}
								onChange={(e) => (setCard(e.target.value))}
							/>
							<CreditCard />
						</label>
						<label>
							<InputField
								type="radio"
								name="payment"
								data-type="paypal"
								value="PayPal"
								onChange={(e) => setCard(e.target.value)}
							/>
							<PayPal />
						</label>
						<label>
							<InputField
								type="radio"
								name="payment"
								data-type="cash"
								value="Cash"
								onChange={(e) => setCard(e.target.value)}
							/>
							<Cash />
						</label>
					</div>
					<label className="payment_label">
						Cardholder Name
						<InputField
							classname="order_input"
							type="text"
							name="cardholder_name"
							forwardRef={name}
							value={cardName}
							placeholder="Levi Ackerman"
							onInput={HandleInputs}
							onChange={(e) => setCardName(e.target.value)}
						/>
					</label>
					<label  className="payment_label">
						Card Number
						<InputField
							classname="order_input"
							type="number"
							name="card_number"
							forwardRef={number}
							value={cardNumber}
							placeholder="2564 1421 0897 1244"
							onChange={(e) => setCardNumber((e.target.value))}
						/>
					</label>
					<span className="payment_mini-box">
						<label  className="payment_label">
							Expiration Date
							<InputField
								classname="order_input card-expiry"
								type="number"
								name="card_number"
								placeholder="02/2022"
								forwardRef={expiry}
								value={cardExpiry}
								onChange={(e) => setCardExpiry((e.target.value))}
							/>
						</label>
						<label  className="payment_label">
							CVV
							<InputField
								classname="order_input"
								type="password"
								name="card_cv"
								forwardRef={cv}
								value={cardCV}
								onChange={(e) => setCardCV((e.target.value))}
							/>
						</label>
					</span>
				</form>
			</div>
			<div className="payment_footer">
				<div className="payment_footer-top">
					<div className="payment_footer-top-left">
						<p>Order type</p>
						<select ref={orderType} className="food_select">
							<option value="">Dine in</option>
						</select>
					</div>
					<div className="payment_footer-top-right">
						<p>Table No</p>
						<span className="table_no">140</span>
					</div>
				</div>
				<div className="payment_footer-bottom">
					<button className="payment_cancel">Cancel</button>
					<button
						className="payment_check"
						type="submit"
						onClick={handleValues}
					>
						Confirm Payment
					</button>
				</div>
			</div>
		</div>
	);
};
