import { BsSearch } from "react-icons/bs";
import "../../../assets/css/app.scss";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/lab";
import globalStateAndAction from "../../../container/global.state.action";
import axiosMethod from "../../../utils/api";
import moment from "moment";
import { useSearchParams } from "react-router-dom";

const Search: React.FC<{
	flight: any;
	setFlight: any;
	takeOffDate: any;
	setTakeOffDate: any;
}> = ({
	flight,
	setFlight,
	takeOffDate,
	setTakeOffDate,
}) => {
	let [searchParams, setSearchParams] = useSearchParams();
	const [searchInput, setSearchInput] = useState("");
	// const [nightCount, setNightCount] = useState<string>("1");

	// const handleChangeNightCount = (event: SelectChangeEvent) => {
	// 	setNightCount(event.target.value as string);
	// 	setCheckOutDate(
	// 		moment(checkInDate).add(event.target.value, "days").format("LL")
	// 	);
	// };

	const handleChangeTakeOffDate = (newValue: any) => {
		setTakeOffDate(newValue);
	};

	const sendQuery = async () => {
		if (!searchInput) return;
		setSearchParams(`flight=${searchInput}`);
		const data = await axiosMethod(`flight?tenBct=${searchInput}`, "get");
		setFlight(data);
	};

	return (
		<>
			<div className="mt-3 p-4 shadow">
				<div className="row w-75 m-auto">
					<TextField
						id="outlined-basic"
						label="Thành phố, địa điểm hoặc tên khách sạn"
						variant="outlined"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>
				<div className="row mt-4 w-75 m-auto">
					<div className="col">
						<LocalizationProvider dateAdapter={AdapterMoment}>
							<DatePicker
								label="Nhận phòng"
								inputFormat="DD/MM/YYYY"
								value={takeOffDate}
								onChange={handleChangeTakeOffDate}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					</div>
					<div className="col">
						<button
							className="btn btn-primary p-3"
							onClick={sendQuery}
						>
							<BsSearch />
							Tìm khách sạn
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default globalStateAndAction(Search);
