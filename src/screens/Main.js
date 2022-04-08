import React from "react";
import LocationScreen from "./Location";
import WeatherScreen from "./WeatherScreen";
import TransportScreen from "./Transport";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainScreen() {
	const [locationSelection, setLocationSelection] = React.useState({
		startLocation: "",
		endLocation: "",
	});
	const [locationForecast, setLocationForecast] = React.useState({
		startForecast: "",
		endForecast: "",
	});
	const [locationLatLong, setLocationLatLong] = React.useState({
		start: { latitude: 0, longitude: 0 },
		end: { latitude: 0, longitude: 0 },
	});
	const getForecast = (location, forecast, coordinates) => {
		setLocationSelection(location);
		setLocationForecast(forecast);
		setLocationLatLong(coordinates);
	};
	console.log("main rendered");
	console.log(locationSelection, locationForecast, locationLatLong);

	return (
		<>
			<h2>get me THERE!</h2>

			<ul>
				<li>
					<a class="active" href="">
						{" "}
					</a>
				</li>
			</ul>
			<br />
			<div className="gridContainer">
				<div className="gridItem-location">
					{/* Weather API called in LocationScreen and data is passed back to parent */}
					<LocationScreen getForecast={getForecast} />
				</div>
				<div className="gridItem-weather">
					{/* forecast data passed into WeatherScreen */}
					<WeatherScreen setForecast={locationForecast} />
				</div>
				<div className="gridItem-transport">
					<Router>
						<TransportScreen />
						<Switch>
							{/* <Route path="/"></Route> */}
							<Route path="/taxi">
								<TaxiScreen coordinates={locationLatLong} />
							</Route>
							<Route path="/carpark">
								<CarparkScreen />
							</Route>
						</Switch>
					</Router>
				</div>
			</div>
		</>
	);
}
