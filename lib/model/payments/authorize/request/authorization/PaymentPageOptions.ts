import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель параметров платежной страницы
 */
@JsonObject("PaymentPageOptions")
export class PaymentPageOptions {

    public set orderTimeout(value: number) {
        this._orderTimeout = value;
    }

    @JsonProperty("orderTimeout", Number) private _orderTimeout: number;

    constructor(orderTimeout: number = null) {
        this._orderTimeout = orderTimeout;
    }

}