import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации об авиаперелете
 */
@JsonObject("FlightSegment")
export class FlightSegment {

    set departureDate(value: string) {
        this._departureDate = value;
    }

    set departureAirport(value: string) {
        this._departureAirport = value;
    }

    set destinationAirport(value: string) {
        this._destinationAirport = value;
    }

    set airlineCode(value: string) {
        this._airlineCode = value;
    }

    set airlineName(value: string) {
        this._airlineName = value;
    }

    set serviceClass(value: string) {
        this._serviceClass = value;
    }

    set stopover(value: string) {
        this._stopover = value;
    }

    set fareCode(value: string) {
        this._fareCode = value;
    }

    set flightNumber(value: string) {
        this._flightNumber = value;
    }

    @JsonProperty("departureDate", String) private _departureDate: string;

    @JsonProperty("departureAirport", String) private _departureAirport: string;

    @JsonProperty("destinationAirport", String) private _destinationAirport: string;

    @JsonProperty("airlineCode", String) private _airlineCode: string;

    @JsonProperty("airlineName", String) private _airlineName: string;

    @JsonProperty("serviceClass", String) private _serviceClass: string;

    @JsonProperty("stopover", String) private _stopover: string;

    @JsonProperty("fareCode", String) private _fareCode: string;

    @JsonProperty("flightNumber", String) private _flightNumber: string;


    constructor(departureDate: string = null,
                departureAirport: string = null,
                destinationAirport: string = null,
                airlineCode: string = null,
                airlineName: string = null,
                serviceClass: string = null,
                stopover: string = null,
                fareCode: string = null,
                flightNumber: string = null) {
        this._departureDate = departureDate;
        this._departureAirport = departureAirport;
        this._destinationAirport = destinationAirport;
        this._airlineCode = airlineCode;
        this._airlineName = airlineName;
        this._serviceClass = serviceClass;
        this._stopover = stopover;
        this._fareCode = fareCode;
        this._flightNumber = flightNumber;
    }
}