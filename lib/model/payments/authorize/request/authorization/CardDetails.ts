import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о карте
 */
@JsonObject("СardDetails")
export class CardDetails {

    set number(value: number) {
        this._number = value;
    }

    set expiryMonth(value: number) {
        this._expiryMonth = value;
    }

    set expiryYear(value: number) {
        this._expiryYear = value;
    }

    set cvv(value: number) {
        this._cvv = value;
    }

    set owner(value: string) {
        this._owner = value;
    }

    set timeSpentTypingNumber(value: number) {
        this._timeSpentTypingNumber = value;
    }

    set timeSpentTypingOwner(value: number) {
        this._timeSpentTypingOwner = value;
    }

    @JsonProperty("number", Number) private _number: number;

    @JsonProperty("expiryMonth", Number) private _expiryMonth: number;

    @JsonProperty("expiryYear", Number) private _expiryYear: number;

    @JsonProperty("cvv", Number) private _cvv: number;

    @JsonProperty("owner", String) private _owner: string;

    @JsonProperty("timeSpentTypingNumber", Number) private _timeSpentTypingNumber: number;

    @JsonProperty("timeSpentTypingOwner", Number) private _timeSpentTypingOwner: number;


    constructor(number: number = null,
                expiryMonth: number = null,
                expiryYear: number = null,
                cvv: number = null,
                owner: string = null,
                timeSpentTypingNumber: number  = null,
                timeSpentTypingOwner: number = null) {
        this._number = number;
        this._expiryMonth = expiryMonth;
        this._expiryYear = expiryYear;
        this._cvv = cvv;
        this._owner = owner;
        this._timeSpentTypingNumber = timeSpentTypingNumber;
        this._timeSpentTypingOwner = timeSpentTypingOwner;
    }
}