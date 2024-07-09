import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Информация об адресе доставки
 */
@JsonObject("CardholderDelivery")
export class CardholderDelivery {

    set address3(value: string) {
        this._address3 = value;
    }

    set stateCode(value: string) {
        this._stateCode = value;
    }

    set addressFirstUsedDate(value: string) {
        this._addressFirstUsedDate = value;
    }

    set addressUsageIndicator(value: string) {
        this._addressUsageIndicator = value;
    }

    @JsonProperty("address3", String) private _address3: string;

    @JsonProperty("stateCode", String) private _stateCode: string;

    @JsonProperty("addressFirstUsedDate", String) private _addressFirstUsedDate: string;

    @JsonProperty("addressUsageIndicator", String) private _addressUsageIndicator: string;


    constructor(address3: string = null,
                stateCode: string = null,
                addressFirstUsedDate: string = null,
                addressUsageIndicator: string = null) {
        this._address3 = address3;
        this._stateCode = stateCode;
        this._addressFirstUsedDate = addressFirstUsedDate;
        this._addressUsageIndicator = addressUsageIndicator;
    }
}