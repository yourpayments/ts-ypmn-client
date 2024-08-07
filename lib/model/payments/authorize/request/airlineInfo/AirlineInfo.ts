import {JsonObject, JsonProperty} from "json2typescript";
import {TravelAgency} from "./TravelAgency";
import {FlightSegment} from "./FlightSegment";

/*
 * Модель информации об авиабилете
 */
@JsonObject("AirlineInfo")
export class AirlineInfo {

    set passengerName(value: string) {
        this._passengerName = value;
    }

    set ticketNumber(value: string) {
        this._ticketNumber = value;
    }

    set refundPolicy(value: number) {
        this._refundPolicy = value;
    }

    set reservationSystem(value: string) {
        this._reservationSystem = value;
    }

    set travelAgency(value: TravelAgency) {
        this._travelAgency = value;
    }

    set addflightSegment(value: FlightSegment) {
        this._flightSegments[this._flightSegments.length] = value;
    }

    @JsonProperty("passengerName", String) private _passengerName: string;

    @JsonProperty("ticketNumber", String) private _ticketNumber: string;

    @JsonProperty("refundPolicy", Number) private _refundPolicy: number;

    @JsonProperty("reservationSystem") private _reservationSystem: string;

    @JsonProperty("travelAgency", TravelAgency) private _travelAgency: TravelAgency;

    @JsonProperty("flightSegments", [FlightSegment]) private _flightSegments: FlightSegment[] = [];

    constructor(passengerName: string =  null,
                ticketNumber: string = null,
                refundPolicy: number = null,
                reservationSystem: string = null,
                travelAgency: TravelAgency = null) {
        this._passengerName = passengerName;
        this._ticketNumber = ticketNumber;
        this._refundPolicy = refundPolicy;
        this._reservationSystem = reservationSystem;
        this._travelAgency = travelAgency;
    }
}