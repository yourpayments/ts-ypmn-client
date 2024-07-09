import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Информация об адресе платежа
 */
@JsonObject("CardholderBilling")
export class CardholderBilling {

    set address3(value: string) {
        this._address3 = value;
    }

    set stateCode(value: string) {
        this._stateCode = value;
    }

    @JsonProperty("address3", String) private _address3: string;

    @JsonProperty("stateCode", String) private _stateCode: string;


    constructor(address3: string = null, stateCode: string = null) {
        this._address3 = address3;
        this._stateCode = stateCode;
    }
}