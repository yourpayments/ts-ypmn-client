import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель данных о сохраненной карте
 */
@JsonObject("PaymentCardDetails")
export class PaymentCardDetails {

    get pan(): string {
        return this._pan;
    }

    get expiryYear(): string {
        return this._expiryYear;
    }

    get expiryMonth(): string {
        return this._expiryMonth;
    }

    @JsonProperty("pan", String) private _pan: string = "";

    @JsonProperty("expiryYear", String) private _expiryYear: string = "";

    @JsonProperty("expiryMonth", String) private _expiryMonth: string = "";

}