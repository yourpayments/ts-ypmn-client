import {JsonObject, JsonProperty} from "json2typescript";
import {AuthorizationResponse} from "./AuthorizationResponse";
import {PaymentResult} from "./PaymentResult";

/*
 * Модель результата авторизации заказа
 */
@JsonObject("AuthorizeOrderResult")
export class AuthorizeOrderResult {

    get payuPaymentReference(): string {
        return this._payuPaymentReference;
    }

    get merchantPaymentReference(): string {
        return this._merchantPaymentReference;
    }

    get status(): string {
        return this._status;
    }

    get message(): string {
        return this._message;
    }

    get code(): number {
        return this._code;
    }

    get amount(): string {
        return this._amount;
    }

    get authorization(): AuthorizationResponse {
        return this._authorization;
    }

    get paymentResult(): PaymentResult {
        return this._paymentResult;
    }

    get currency(): string {
        return this._currency;
    }

    @JsonProperty("payuPaymentReference", String) private _payuPaymentReference: string = "";

    @JsonProperty("merchantPaymentReference", String) private _merchantPaymentReference: string = "";

    @JsonProperty("status", String) private _status: string = "";

    @JsonProperty("message", String) private _message: string = "";

    @JsonProperty("code", Number) private _code: number = 0;

    @JsonProperty("amount", String) private _amount: string = "";

    @JsonProperty("authorization", AuthorizationResponse) private _authorization: AuthorizationResponse = new AuthorizationResponse;

    @JsonProperty("paymentResult", PaymentResult) private _paymentResult: PaymentResult = new PaymentResult;

    @JsonProperty("currency", String) private _currency: string = "";

}