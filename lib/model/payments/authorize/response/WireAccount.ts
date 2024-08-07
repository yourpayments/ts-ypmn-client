import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о связанном платежном аккаунте
 */
@JsonObject("WireAccount")
export class WireAccount {

    get bankIdentifier(): string {
        return this._bankIdentifier;
    }

    get bankAccount(): string {
        return this._bankAccount;
    }

    get routingNumber(): number {
        return this._routingNumber;
    }

    get ibanAccount(): string {
        return this._ibanAccount;
    }

    get bankSwift(): string {
        return this._bankSwift;
    }

    get country(): string {
        return this._country;
    }

    get recipientName(): string {
        return this._recipientName;
    }

    get recipientVatId(): string {
        return this._recipientVatId;
    }

    @JsonProperty("bankIdentifier", String) private _bankIdentifier: string = "";

    @JsonProperty("bankAccount", String) private _bankAccount: string = "";

    @JsonProperty("routingNumber", Number) private _routingNumber: number = 0;

    @JsonProperty("ibanAccount", String) private _ibanAccount: string = "";

    @JsonProperty("bankSwift", String) private _bankSwift: string = "";

    @JsonProperty("country", String) private _country: string = "";

    @JsonProperty("recipientName", String) private _recipientName: string = "";

    @JsonProperty("recipientVatId", String) private _recipientVatId: string = "";
}