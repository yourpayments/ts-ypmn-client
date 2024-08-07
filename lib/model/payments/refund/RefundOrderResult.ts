import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель результата возврата/отмены
 */

@JsonObject("RefundOrderResult")
export class RefundOrderResult {

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

    get refundRequestId(): string {
        return this._refundRequestId;
    }

    @JsonProperty("code", Number) private _code: number = 0;

    @JsonProperty("message", String) private _message: string = "";

    @JsonProperty("status", String) private _status: string = "";

    @JsonProperty("refundRequestId", String) private _refundRequestId: string = "";

    @JsonProperty("payuPaymentReference", String) private _payuPaymentReference: string = "";

}