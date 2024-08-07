import {JsonObject, JsonProperty} from "json2typescript";
import {CardDetailsResponse} from "./CardDetailsResponse";

/*
 * Модель попытки банковской авторизации
 */

@JsonObject("PaymentAuthorization")
export class PaymentAuthorization {

    get timestamp(): string {
        return this._timestamp;
    }

    get authorized(): string {
        return this._authorized;
    }

    get cardDetails(): CardDetailsResponse {
        return this._cardDetails;
    }

    @JsonProperty("timestamp", String) private _timestamp: string = "";

    @JsonProperty("authorized", String) private _authorized: string = "";

    @JsonProperty("cardDetails", CardDetailsResponse) private _cardDetails: CardDetailsResponse = new CardDetailsResponse;

}