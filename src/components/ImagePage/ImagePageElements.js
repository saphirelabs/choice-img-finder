import styled from "styled-components";

export const ImagePageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	overflow: auto; /* Enable scrolling */
	padding: 10px;
	background-color: black;

	@media (max-width: 768px) {
		padding: 15px;
		justify-content: center; /* Align items to the top */
	}
`;

export const ImageCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* Center the items horizontally */
	background-color: black;
	border: 1px solid #2b2e2c;
	margin: 10px;
	padding: 10px 20px;
	box-shadow: 0 0 40px rgba(255, 255, 255, 0.17);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	max-width: 100%; /* Ensure the card does not overflow horizontally */
	width: 100%;
	max-width: 400px;

	@media (max-width: 768px) {
		padding: 10px;
		margin: 20px 10px; /* Add more margin to avoid content being cut off */
	}
`;

export const FooterP = styled.p`
	font-size: 0.785rem;
	max-width: 280px;
	text-align: center;
	margin-top: 10px;
	color: #dddddd;

	span {
		padding: 2px;
		background-color: yellow;
		color: black;
	}
`;

export const SubscriptionFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: black;
	margin: 20px;
	padding: 10px 20px;
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	width: 100%;
	max-width: 280px; /* Ensure the form does not overflow horizontally */

	a {
		font-size: 0.785rem;

		max-width: 280px;
		text-align: center;
		color: #dddddd;

		margin-top: 10px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: transparent;
	color: white;

	input,
	select {
		border: 1px solid #2b2e2c;
		padding: 10px;
		margin: 10px 5px;
		font-size: 0.875rem;
		width: 100%;
		color: #dddddd;
		background-color: transparent;
	}

	h2 {
		background-color: transparent;
		color: #dddddd;
		font-weight: 500;
		margin: 10px 5px;
		text-align: center;
		font-size: 1rem;
	}

	p {
		font-size: 0.785rem;
		background-color: transparent;
		max-width: 280px;
		text-align: center;
		color: #dddddd;
		padding: 5px;
	}

	button {
		width: 100%;
		border: 1px solid #dddddd;
		padding: 10px 15px;
		margin: 5px 0; /* Ensure consistent vertical margins */
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: #171616;
		color: #dddddd;

		&:hover {
			background-color: ${(props) => (props.disabled ? "#171616" : "#2b2e2c")};
			color: ${(props) => (props.disabled ? "white" : "white")};
			border: ${(props) =>
				props.disabled ? "1px solid #2b2e2c" : "1px solid #171616"};
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: transparent;
			color: #dddddd;
			border: 1px solid #dddddd;
		}
	}

	.flex-wrap {
		display: flex;
		justify-content: center;
		a {
			margin: 5px;
		}
	}

	@media (max-width: 768px) {
		input,
		select {
			padding: 8px;
			margin: 8px 4px;
		}

		h2 {
			font-size: 0.875rem;
		}

		p {
			font-size: 0.75rem;
		}

		button {
			padding: 8px 10px;
			margin: 4px 0; /* Ensure consistent vertical margins */
		}
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	max-width: 280px; /* Set a maximum width for the image */
	margin: 5px auto; /* Center the image and add vertical margins */
	border: 1px solid #2b2e2c;

	object-fit: cover;
	-o-object-fit: cover;

	@media (max-width: 768px) {
		max-width: 80%; /* Set a smaller maximum width for mobile devices */
	}
`;

export const ImageCardP = styled.p`
	font-size: 0.785rem;
	background-color: transparent;
	text-align: justify;
	color: #dddddd;
	width: 100%; /* Ensure the text takes up the full width of the card */
	margin: 10px 0; /* Align the margins with the image */

	span {
		text-align: justify;
		color: white;
		background: transparent;
		font-weight: 500;
		font-size: 0.785rem;
		line-height: 20px;
	}
`;

export const LogoImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 80px;
	margin: 5px 15px;

	object-fit: contain;
	-o-object-fit: contain;
`;

export const Loading = styled.div`
	color: white;
	font-size: 0.758em;
	max-width: 300px;
	img {
		width: 60px;
		height: 60px;
	}
`;

export const ButtonWrap = styled.div`
	display: flex;
	background-color: transparent;
	width: 100%;
	max-width: 280px;
	align-items: center; /* Center buttons horizontally */

	button {
		width: 100%; /* Set a width for the buttons */
		border: 1px solid #dddddd;
		padding: 10px 15px;
		margin: 5px; /* Ensure consistent vertical margins */
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: #171616;
		color: #dddddd;

		&:hover {
			background-color: ${(props) => (props.disabled ? "#171616" : "#2b2e2c")};
			color: ${(props) => (props.disabled ? "white" : "white")};
			border: ${(props) =>
				props.disabled ? "1px solid #2b2e2c" : "1px solid #171616"};
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: transparent;
			color: #dddddd;
			border: 1px solid #dddddd;
		}
	}

	@media (max-width: 768px) {
		button {
			width: 100%; /* Make buttons full width on mobile */
			margin: 4px 0;
		}
	}
`;

export const ResetButton = styled.div`
	display: flex;
	color: #dddddd;
	border: none;
	padding: 5px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 1.2rem;
	position: absolute;
	top: 10px;
	right: 10px;
	transition: color 0.3s ease;
	background-color: transparent;
	border-radius: 50%;

	&:hover {
		background-color: #2b2e2c;
		color: white;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	max-width: 280px; /* Match the max-width of the image */
	margin: 10px 5px; /* Ensure consistent vertical margins */
	text-align: left; /* Align text to the left for better readability */

	.flex-wrap {
		display: flex;
		border-bottom: 1px solid #2b2e2c;
	}

	@media (max-width: 768px) {
		max-width: 80%; /* Set a smaller maximum width for mobile devices */
	}
`;
