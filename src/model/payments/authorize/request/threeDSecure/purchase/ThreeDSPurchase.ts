import {JsonObject, JsonProperty} from "json2typescript";
import {PurchaseRecurring} from "./PurchaseRecurring";
import {MerchantFunds} from "./MerchantFunds";

/*
 * Модель информации о покупке пользователя
 */
@JsonObject("ThreeDSPurchase")
export class ThreeDSPurchase {

    set transactionTime(value: string) {
        this._transactionTime = value;
    }

    set shipIndicator(value: string) {
        this._shipIndicator = value;
    }

    set preOrderIndicator(value: string) {
        this._preOrderIndicator = value;
    }

    set preOrderDate(value: string) {
        this._preOrderDate = value;
    }

    set deliveryTimeFrame(value: string) {
        this._deliveryTimeFrame = value;
    }

    set reorderedIndicator(value: string) {
        this._reorderedIndicator = value;
    }

    set recurring(value: PurchaseRecurring) {
        this._recurring = value;
    }

    set merchantFunds(value: MerchantFunds) {
        this._merchantFunds = value;
    }

    @JsonProperty("transactionTime", String) private _transactionTime: string;

    @JsonProperty("shipIndicator", String) private _shipIndicator: string;

    @JsonProperty("preOrderIndicator", String) private _preOrderIndicator: string;

    @JsonProperty("preOrderDate", String) private _preOrderDate: string;

    @JsonProperty("deliveryTimeFrame", String) private _deliveryTimeFrame: string;

    @JsonProperty("reorderedIndicator", String) private _reorderedIndicator: string;

    @JsonProperty("recurring", PurchaseRecurring) private _recurring: PurchaseRecurring;

    @JsonProperty("merchantFunds", MerchantFunds) private _merchantFunds: MerchantFunds;


    constructor(transactionTime: string = null,
                shipIndicator: string = null,
                preOrderIndicator: string = null,
                preOrderDate: string = null,
                deliveryTimeFrame: string = null,
                reorderedIndicator: string = null,
                recurring: PurchaseRecurring = null,
                merchantFunds: MerchantFunds = null) {
        this._transactionTime = transactionTime;
        this._shipIndicator = shipIndicator;
        this._preOrderIndicator = preOrderIndicator;
        this._preOrderDate = preOrderDate;
        this._deliveryTimeFrame = deliveryTimeFrame;
        this._reorderedIndicator = reorderedIndicator;
        this._recurring = recurring;
        this._merchantFunds = merchantFunds;
    }
}