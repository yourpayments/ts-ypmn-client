import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о разделении платежа
 */
@JsonObject("MarketplaceV1")
export class MarketplaceV1 {

    set merchant(value: string) {
        this._merchant = value;
    }

    set amount(value: number) {
        this._amount = value;
    }

    @JsonProperty("merchant", String) private _merchant: string = "";

    @JsonProperty("amount", Number) private _amount: number = 0;

    constructor(merchant: string = "", amount: number = 0) {
        this._merchant = merchant;
        this._amount = amount;
    }

}