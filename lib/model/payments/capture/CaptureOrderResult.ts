import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель результата списания средств
 */
@JsonObject("CaptureOrderResult")
export class CaptureOrderResult{

    get payuPaymentReference(): string {
        return this._payuPaymentReference;
    }

    get code(): number {
        return this._code;
    }

    get message(): string {
        return this._message;
    }

    get status(): string {
        return this._status;
    }

    @JsonProperty("payuPaymentReference", String) private _payuPaymentReference: string = "";

    @JsonProperty("code", Number) private _code: number = 0;

    @JsonProperty("message", String) private _message: string = "";

    @JsonProperty("status", String) private _status: string = "";
}