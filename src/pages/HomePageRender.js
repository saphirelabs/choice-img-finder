import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

const HomePageRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Introduction | Choice</title>
				<meta
					name="description"
					content="Information about Choice - interactive sculpture. Read about the Artistic Research, Documentation & more."
				/>
			</Helmet>
			<Header />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Home />
			</motion.div>
		</HelmetProvider>
	);
};

export default HomePageRender;
