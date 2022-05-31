import { connect } from "react-redux";
import { setFlight } from "../actions/flight.tsx";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
			flight: state.flight.apartment,
		};
	};

	const mapActionToProps = (dispatch) => ({
		setFlight: (data) => dispatch(setFlight(data)),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}