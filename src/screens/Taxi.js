import React from "react";
import axios from "axios";

export default function Taxi(props) {
	console.log("start", props.coordinates.start.latitude, props.coordinates.start.longitude);
	console.log("end", props.coordinates.end.latitude, props.coordinates.end.longitude);

	let alltaxiavailbility = "";
	let MYlongitude = "103.8818942";
	let MYlatitude = "1.3233492";
	var x = "",
		v = "";
	const GoodTaxi = [];

	const geoFindMe = () => {
		const status = ""; //document.querySelector('#status');
		const mapLink = ""; //document.querySelector('#map-link');

		//mapLink.href = '';
		//mapLink.textContent = '';

		function success(position) {
			MYlatitude = position.coords.latitude;
			MYlongitude = position.coords.longitude;

			//status.textContent = '';
			//mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
			console.log(`Latitude: ${MYlatitude} °, Longitude: ${MYlongitude} °`);
		}

		function error() {
			//status.textContent = 'Unable to retrieve your location';
		}

		if (!navigator.geolocation) {
			//status.textContent = 'Geolocation is not supported by your browser';
		} else {
			//status.textContent = 'Locating…';
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	const [results, setResults] = React.useState([]);

	const getAPI = async () => {
		const response = await axios.get(`https://api.data.gov.sg/v1/transport/taxi-availability`);
		if (response.status === 200) {
			const taxicoord = response.data.features[0].geometry.coordinates;
			alltaxiavailbility = taxicoord.length;
			setResults(taxicoord);
			for (var i = 0; i < taxicoord.length; i++) {
				//console.log(taxicoord[i][0]);
				if (taxicoord[i][0] - MYlongitude <= 0.01 && MYlongitude - taxicoord[i][0] <= 0.01) {
					x++;
					if (taxicoord[i][1] - MYlatitude <= 0.01 && MYlatitude - taxicoord[i][1] <= 0.01) {
						v++;
					}
				}
			}
			console.log(
				`this is the total number of taxi:${alltaxiavailbility}, this is X:${x} , this is V:${v}`
			);
			document.getElementById(
				"totalTaxi"
			).innerHTML = `There is this number of taxi around me : ${v}`;
		}
	};

	React.useEffect(() => {
		getAPI();
		geoFindMe();
	}, []);

	return (
		<>
			<h1>Tell me the nearest taxi:</h1>
			<div>
				<p id="totalTaxi"></p>
			</div>
		</>
	);
}
