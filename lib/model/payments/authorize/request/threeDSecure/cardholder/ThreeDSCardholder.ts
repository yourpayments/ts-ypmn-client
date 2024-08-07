import {JsonObject, JsonProperty} from "json2typescript";
import {CardholderContact} from "./CardholderContact";
import {CardholderAccountInformation} from "./CardholderAccountInformation";

/*
 * Модель информации о владельце карты
 */
@JsonObject("ThreeDsCardholder")
export class ThreeDSCardholder{

    set contact(value: CardholderContact) {
        this._contact = value;
    }

    set accountInformation(value: CardholderAccountInformation) {
        this._accountInformation = value;
    }

    @JsonProperty("accountInformation", CardholderAccountInformation) private _accountInformation: CardholderAccountInformation;

    @JsonProperty("contact", CardholderContact) private _contact: CardholderContact;

    constructor(accountInformation: CardholderAccountInformation = null,
                contact: CardholderContact = null) {
        this._accountInformation = accountInformation;
        this._contact = contact;
    }
}