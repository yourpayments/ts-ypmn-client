import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о повторении покупки
 */
@JsonObject("PurchaseRecurring")
export class PurchaseRecurring {

    set frequencyDays(value: number) {
        this._frequencyDays = value;
    }

    set expiryDate(value: string) {
        this._expiryDate = value;
    }

    @JsonProperty("frequencyDays", Number) private _frequencyDays: number;

    @JsonProperty("expiryDate", String) private _expiryDate: string;


    constructor(frequencyDays: number = null, expiryDate: string = null) {
        this._frequencyDays = frequencyDays;
        this._expiryDate = expiryDate;
    }
}