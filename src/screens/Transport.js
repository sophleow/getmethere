import { Switch, Route, Link } from "react-router-dom";
import driving from "../assets/driving.gif";
import movingtaxi from "../assets/taxi-cab.gif";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";

function transport() {
	return (
		<>
			<div className="flex-container-transport">
				<div className="transporttext">
					<p>how</p>
					<p>will you</p>
					<p>travel?</p>
				</div>

				<div className="transport-item">
					<Link to="/carpark">
						<div className="carpark">
							<img src={driving} className="image-driving" />
							<div className="middle-carpark">
								<div className="text">Carpark</div>
							</div>
						</div>
					</Link>
					<Link to="/taxi">
						<div className="taxi">
							<img src={movingtaxi} className="image-taxi" />
							<div className="middle-taxi">
								<div className="text">Taxi</div>
							</div>
						</div>
					</Link>
				</div>

				{/* <div className="transport-item">
					<Switch>
						<Route path="/carpark">
							<div>
								<CarparkScreen />
							</div>
						</Route>
						<Route path="/taxi">
							<div>
								<TaxiScreen />
							</div>
						</Route>
					</Switch>
				</div> */}
			</div>
		</>
	);
}

export default transport;
