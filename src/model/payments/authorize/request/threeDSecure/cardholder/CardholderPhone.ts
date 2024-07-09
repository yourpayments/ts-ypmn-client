import {JsonObject, JsonProperty} from "json2typescript";
import {CardholderPhoneDetails} from "./CardholderPhoneDetails";

/*
 * Модель информации о телефонных номерах владельца карты
 */
@JsonObject("CardholderPhone")
export class CardholderPhone {

    set home(value: CardholderPhoneDetails) {
        this._home = value;
    }

    set mobile(value: CardholderPhoneDetails) {
        this._mobile = value;
    }

    set work(value: CardholderPhoneDetails) {
        this._work = value;
    }

    @JsonProperty("home", CardholderPhoneDetails) private _home: CardholderPhoneDetails;

    @JsonProperty("mobile", CardholderPhoneDetails) private _mobile: CardholderPhoneDetails;

    @JsonProperty("work", CardholderPhoneDetails) private _work: CardholderPhoneDetails;


    constructor(home: CardholderPhoneDetails = null,
                mobile: CardholderPhoneDetails = null,
                work: CardholderPhoneDetails = null) {
        this._home = home;
        this._mobile = mobile;
        this._work = work;
    }
}