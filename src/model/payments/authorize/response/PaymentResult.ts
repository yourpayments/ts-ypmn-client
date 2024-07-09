import {JsonObject, JsonProperty} from "json2typescript";
import {ThreeDSDetails} from "./ThreeDSDetails";
import {PaymentCardDetails} from "./PaymentCardDetails";
import {BankResponseDetails} from "./BankResponseDetails";
import {WireAccount} from "./WireAccount";

/*
 * Модель результата платежа
 */
@JsonObject("PaymentResult")
export class PaymentResult {

    get payuResponseCode(): string {
        return this._payuResponseCode;
    }

    get url(): string {
        return this._url;
    }

    get type(): string {
        return this._type;
    }

    get authCode(): string {
        return this._authCode;
    }

    get rnn(): string {
        return this._rnn;
    }

    get installmentsNumber(): string {
        return this._installmentsNumber;
    }

    get cardProgramName(): string {
        return this._cardProgramName;
    }

    get cardDetails(): PaymentCardDetails {
        return this._cardDetails;
    }

    get bankResponseDetails(): BankResponseDetails {
        return this._bankResponseDetails;
    }

    get wireAccounts(): WireAccount[] {
        return this._wireAccounts;
    }

    get ThreeDSDetails(): ThreeDSDetails {
        return this._ThreeDSDetails;
    }

    @JsonProperty("payuResponseCode", String) private _payuResponseCode:string = "";

    @JsonProperty("url", String) private _url: string = "";

    @JsonProperty("type", String) private _type: string = "";

    @JsonProperty("authCode", String) private _authCode: string = "";

    @JsonProperty("rrn", String) private _rnn: string = "";

    @JsonProperty("installmentsNumber", String) private _installmentsNumber: string = "";

    @JsonProperty("cardProgramName", String) private _cardProgramName: string = "";

    @JsonProperty("3dsDetails", ThreeDSDetails) private _ThreeDSDetails: ThreeDSDetails = new ThreeDSDetails;

    @JsonProperty("cardDetails", PaymentCardDetails) private _cardDetails: PaymentCardDetails = new PaymentCardDetails;

    @JsonProperty("bankResponseDetails", BankResponseDetails) private _bankResponseDetails: BankResponseDetails = new BankResponseDetails;

    @JsonProperty("wireAccounts", [WireAccount]) private _wireAccounts: WireAccount[] = [];

}