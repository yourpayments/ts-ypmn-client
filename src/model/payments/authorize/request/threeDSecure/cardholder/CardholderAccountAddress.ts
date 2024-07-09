import {JsonObject, JsonProperty} from "json2typescript";
import {CardholderBilling} from "./CardholderBilling";
import {CardholderDelivery} from "./CardholderDelivery";

/*
 * Модель информации об адресе владельца карты
 */
@JsonObject("CardHolderAccountAddress")
export class CardholderAccountAddress {

    set match(value: string) {
        this._match = value;
    }

    set billing(value: CardholderBilling) {
        this._billing = value;
    }

    set delivery(value: CardholderDelivery) {
        this._delivery = value;
    }

    @JsonProperty("match", String) private _match: string;

    @JsonProperty("billing", CardholderBilling) private _billing: CardholderBilling;

    @JsonProperty("delivery", CardholderDelivery) private _delivery: CardholderDelivery;


    constructor(match: string = null,
                billing: CardholderBilling = null,
                delivery: CardholderDelivery = null) {
        this._match = match;
        this._billing = billing;
        this._delivery = delivery;
    }
}