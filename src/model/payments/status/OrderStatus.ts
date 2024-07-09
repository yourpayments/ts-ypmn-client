import {JsonObject, JsonProperty} from "json2typescript";
import {PaymentAuthorization} from "./PaymentAuthorization";


/*
 * Модель статуса платежа
 */

@JsonObject("OrderStatus")
export class OrderStatus {

    get paymentStatus(): string {
        return this._paymentStatus;
    }

    get payuPaymentReference(): string {
        return this._payuPaymentReference;
    }

    get message(): string {
        return this._message;
    }

    get status(): string {
        return this._status;
    }

    get code(): number {
        return this._code;
    }

    get authorizations(): PaymentAuthorization[] {
        return this._authorizations;
    }

    @JsonProperty("paymentStatus", String) private _paymentStatus: string = "";

    @JsonProperty("payuPaymentReference", String) private _payuPaymentReference: string = "";

    @JsonProperty("message", String) private _message: string = "";

    @JsonProperty("status", String) private _status: string = "";

    @JsonProperty("code", Number) private _code: number = 0;

    @JsonProperty("authorizations", [PaymentAuthorization]) private _authorizations: PaymentAuthorization[] = [];
}
