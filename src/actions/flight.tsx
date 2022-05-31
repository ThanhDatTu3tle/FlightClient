import { FETCHED_FLIGHT } from "../constant/constant";

const setFlight = (data: any) => ({
	type: FETCHED_FLIGHT,
	payload: data,
});

export { setFlight };
