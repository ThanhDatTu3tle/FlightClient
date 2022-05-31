import { SET_TAKE_OFF_DATE } from "../constant/constant";
import moment from "moment";

const initialState = {
	takeOffDate: moment(new Date()).format("LL"),
};

export const dateTakeOffReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_TAKE_OFF_DATE:
			return {
				...state,
				takeOffDate: action.payload,
			};
		default:
			return { ...state };
	}
};
