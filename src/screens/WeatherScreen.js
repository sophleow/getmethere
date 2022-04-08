import React from "react";
import Cloudy from "../assets/moving-cloudy.gif";
import Sunny from "../assets/moving-sunny.gif";
import Thunderstorm from "../assets/moving-thunderstorm.gif";
import LightRain from "../assets/moving-lightrain.gif";
import HeavyRain from "../assets/moving-heavyrain.gif";
import Haze from "../assets/moving-haze.gif";
import Windy from "../assets/moving-windy.gif";

export default function Weather(props) {
	const startLocationForecast = props.setForecast.startForecast;
	const endLocationForecast = props.setForecast.endForecast;

	return (
		<>
			<div className="weathertext">
				<p>how is</p>
				<p>the weather</p>
				<p>there?</p>
			</div>
			<table>
				<tr>
					<td>{startLocationForecast}</td>
					<td>{endLocationForecast}</td>
				</tr>
				<tr>
					<td>
						{startLocationForecast ==
							("Partly Cloudy (Day)" ||
								"Cloudy" ||
								"Partly Cloudy (Night)") && (
							<img className="image-weather" src={Cloudy} />
						)}
						{startLocationForecast ==
							("Passing Showers" ||
								"Light Showers" ||
								"Light Rain" ||
								"Showers") && <img className="image-weather" src={LightRain} />}
						{startLocationForecast ==
							("Moderate Rain" || "Heavy Rain" || "Heavy Showers") && (
							<img className="image-weather" src={HeavyRain} />
						)}
						{startLocationForecast == ("Fair" || "Fair & Warm") && (
							<img className="image-weather" src={Sunny} />
						)}
						{startLocationForecast ==
							("Thundery Showers" ||
								"Heavy Thundery Showers" ||
								"Heavy Thundery Showers with Gusty Winds") && (
							<img className="image-weather" src={Thunderstorm} />
						)}
						{startLocationForecast == ("Hazy" || "Slightly Hazy") && (
							<img className="image-weather" src={Haze} />
						)}
						{startLocationForecast == ("Windy" || "Mist") && (
							<img className="image-weather" src={Windy} />
						)}
					</td>
					<td>
						{endLocationForecast ==
							("Partly Cloudy (Day)" ||
								"Cloudy" ||
								"Partly Cloudy (Night)") && (
							<img className="image-weather" src={Cloudy} />
						)}
						{endLocationForecast ==
							("Passing Showers" ||
								"Light Showers" ||
								"Light Rain" ||
								"Showers") && <img className="image-weather" src={LightRain} />}
						{endLocationForecast ==
							("Moderate Rain" || "Heavy Rain" || "Heavy Showers") && (
							<img className="image-weather" src={HeavyRain} />
						)}
						{endLocationForecast == ("Fair" || "Fair & Warm") && (
							<img className="image-weather" src={Sunny} />
						)}
						{endLocationForecast ==
							("Thundery Showers" ||
								"Heavy Thundery Showers" ||
								"Heavy Thundery Showers with Gusty Winds") && (
							<img className="image-weather" src={Thunderstorm} />
						)}
						{endLocationForecast == ("Hazy" || "Slightly Hazy") && (
							<img className="image-weather" src={Haze} />
						)}
						{endLocationForecast == ("Windy" || "Mist") && (
							<img className="image-weather" src={Windy} />
						)}
					</td>
				</tr>
			</table>
		</>
	);
}
