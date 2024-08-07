import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель запроса на списание средств
 */
@JsonObject("CaptureOrder")
export class CaptureOrder {

    set payuPaymentReference(value: number) {
        this._payuPaymentReference = value;
    }

    set originalAmount(value: number) {
        this._originalAmount = value;
    }

    set amount(value: number) {
        this._amount = value;
    }

    set currency(value: string) {
        this._currency = value;
    }

    @JsonProperty("payuPaymentReference", Number) private _payuPaymentReference: number;

    @JsonProperty("originalAmount", Number) private _originalAmount: number;

    @JsonProperty("amount", Number) private _amount: number;

    @JsonProperty("currency", String) private _currency: string;


    constructor(payuPaymentReference: number = null,
                originalAmount: number = null,
                amount: number = null,
                currency: string = null) {
        this._payuPaymentReference = payuPaymentReference;
        this._originalAmount = originalAmount;
        this._amount = amount;
        this._currency = currency;
    }
}