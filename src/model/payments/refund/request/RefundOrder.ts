import {JsonObject, JsonProperty} from "json2typescript";
import {MarketplaceV1} from "./MarketplaceV1";

/*
 * Модель запроса на возврат/отмену
 */

@JsonObject("RefundOrder")
export class RefundOrder {

    set merchantRefundReference(value: string) {
        this._merchantRefundReference = value;
    }

    set marketplaceV1(value: MarketplaceV1) {
        this._marketplaceV1 = value;
    }

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

    @JsonProperty("merchantRefundReference", String) private _merchantRefundReference: string;

    @JsonProperty("marketplaceV1", MarketplaceV1) private _marketplaceV1: MarketplaceV1;


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