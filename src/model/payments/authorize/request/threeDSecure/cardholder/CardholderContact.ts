import {JsonObject, JsonProperty} from "json2typescript";
import {CardholderPhone} from "./CardholderPhone";
/*
 * Модель информации о контактах владельца карты
 */
@JsonObject("CardholderContact")
export class CardholderContact {

    set phone(value: CardholderPhone) {
        this._phone = value;
    }

    @JsonProperty("phone", CardholderPhone) _phone: CardholderPhone;

    constructor(phone: CardholderPhone = null) {
        this._phone = phone;
    }

}