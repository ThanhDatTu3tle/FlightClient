import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Detail from "../feature/Detail/pages/Detail";
import Flight from "../feature/Flight/pages/Flight";
// import Booking from "../feature/Info/pages/booking";
import Layout from "../layout/Layout";
// import Review from "../feature/Review/pages/review";
// import Payments from "../feature/Payment/pages/payments";
// import PaymentSuccess from "../feature/Payment/pages/success";

const AnimatedRoute: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Layout />}>
            <Route index element={<Flight />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoute;
