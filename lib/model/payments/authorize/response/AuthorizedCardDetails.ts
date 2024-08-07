import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о карте
 */
@JsonObject("AuthorizedCardDetails")
export class AuthorizedCardDetails {

    get cardScheme(): string {
        return this._cardScheme;
    }

    get cardType(): string {
        return this._cardType;
    }

    get issuerBank(): string {
        return this._issuerBank;
    }

    get issuerCountryCode(): string {
        return this._issuerCountryCode;
    }

    get cardProfile(): string {
        return this._cardProfile;
    }

    get lastFourDigits(): string {
        return this._lastFourDigits;
    }

    get binNumber(): string {
        return this._binNumber;
    }

    @JsonProperty("cardScheme", String) private _cardScheme: string = "";

    @JsonProperty("cardType", String) private _cardType: string = "";

    @JsonProperty("issuerBank", String) private _issuerBank: string = "";

    @JsonProperty("issuerCountryCode", String) private _issuerCountryCode: string = "";

    @JsonProperty("cardProfile", String) private _cardProfile: string = "";

    @JsonProperty("lastFourDigits", String) private _lastFourDigits: string = "";

    @JsonProperty("binNumber", String) private _binNumber: string = "";

}