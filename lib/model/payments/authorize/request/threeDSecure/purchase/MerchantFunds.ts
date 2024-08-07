import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о скидках/акциях
 */
@JsonObject("MerchantFunds")
export class MerchantFunds {

    set amount(value: number) {
        this._amount = value;
    }

    set currency(value: string) {
        this._currency = value;
    }

    @JsonProperty("amount", Number) private _amount: number;

    @JsonProperty("currency", String) private _currency: string;


    constructor(amount: number = null, currency: string = null) {
        this._amount = amount;
        this._currency = currency;
    }
}