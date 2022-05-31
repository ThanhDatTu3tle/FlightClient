import { SET_TAKE_OFF_DATE } from "../constant/constant";

const setTakeOffDate = (data: any) => ({
	type: SET_TAKE_OFF_DATE,
	payload: data,
});

export { setTakeOffDate };
