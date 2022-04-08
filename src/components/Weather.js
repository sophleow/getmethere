import React from "react";
import axios from "axios";
import moment from "moment";

export default function Weather() {
	const now = moment().format().slice(0, 19);
	// console.log(now);
	const [APIresults, setAPIResults] = React.useState([]);
	const [locationSelection, setLocationSelection] = React.useState({
		startLocation: "Select start location",
		endLocation: "Select end location",
	});
	const [locationForecast, setLocationForecast] = React.useState({
		startForecast: "",
		endForecast: "",
	});

	const getAPI = async () => {
		const response = await axios.get(
			// use this url to get current weather forecast
			`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${now}`

			//to make sure it is working properly, compare with 5/3/22 since it has different values
			// `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date=2022-03-05`
		);
		if (response.status === 200) {
			// console.log(response);
			console.log(response.data.items[0].forecasts);
			setAPIResults(response.data.items[0].forecasts);
		}
	};
	function handleChange(event) {
		setLocationSelection((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});

		//search APIresults for index with same name as selected location
		let index = APIresults.findIndex((location) => location.area == event.target.value);
		//don't do anything if not found (or if "select start/end location" is selected)
		if (index > -1) {
			//tried combining both into one setLocationForecast but it didn't work..so i split into start and end
			if (event.target.name == "startLocation") {
				setLocationForecast((prevData) => {
					return {
						...prevData,
						startForecast: APIresults[index].forecast,
					};
				});
			}
			if (event.target.name == "endLocation") {
				setLocationForecast((prevData) => {
					return {
						...prevData,
						endForecast: APIresults[index].forecast,
					};
				});
			}
		}
	}

	React.useEffect(() => {
		getAPI();
	}, []);

	//time works as a separate component, every second only this component re-renders instead of entire page previously
	function Time() {
		const [time, setTime] = React.useState("");

		React.useEffect(() => {
			const interval = setInterval(() => {
				displayTime();
			}, 1000);
			return () => {
				clearInterval(interval);
			};
		}, [time]);

		function displayTime() {
			setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
		}

		return (
			<h2 id="time" className="time">
				{time}
			</h2>
		);
	}

	return (
		<>
			<div className="weather-top">
				<h1>Tell me the weather for:</h1>
				<Time />
			</div>
			<div className="weather-bottom">
				<div>
					<select onChange={handleChange} name="startLocation">
						<option>Select start location</option>
						{/* populate dropdown with all locations */}
						{APIresults.map((result, index) => {
							return <option key={"s" + index}>{result.area}</option>;
						})}
					</select>
					{/* conditional display to show start location and start forecast */}
					{locationSelection.startLocation != "Select start location" &&
						locationForecast.startForecast}
				</div>
				<div>
					<select onChange={handleChange} name="endLocation">
						<option>Select end location</option>
						{APIresults.map((result, index) => {
							return <option key={"e" + index}>{result.area}</option>;
						})}
					</select>
					{locationSelection.endLocation != "Select end location" && locationForecast.endForecast}
				</div>
			</div>
		</>
	);
}
