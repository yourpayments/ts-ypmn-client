import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель описания карты
 */

@JsonObject("CardDetailsResponse")
export class CardDetailsResponse {

    get issuerBank(): string {
        return this._issuerBank;
    }

    get lastFourDigits(): string {
        return this._lastFourDigits;
    }

    get binNumber(): string {
        return this._binNumber;
    }

    @JsonProperty("issuerBank", String) private _issuerBank: string = "";

    @JsonProperty("lastFourDigits", String) private _lastFourDigits: string = "";

    @JsonProperty("binNumber", String) private _binNumber: string = "";
}