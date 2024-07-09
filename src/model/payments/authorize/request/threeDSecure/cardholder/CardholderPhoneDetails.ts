import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о телефонном номере владельца карты
 */
@JsonObject("CardholderPhoneDetails")
export class CardholderPhoneDetails {

    set countryPrefix(value: string) {
        this._countryPrefix = value;
    }

    set subscriber(value: string) {
        this._subscriber = value;
    }

    @JsonProperty("countryPrefix", String) private _countryPrefix: string;

    @JsonProperty("subscriber", String) private _subscriber: string;


    constructor(countryPrefix: string = null, subscriber: string = null) {
        this._countryPrefix = countryPrefix;
        this._subscriber = subscriber;
    }
}