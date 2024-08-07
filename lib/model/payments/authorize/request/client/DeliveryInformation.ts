import {JsonObject, JsonProperty} from "json2typescript";


/*
 * Модель информации о доставке
 */
@JsonObject("DeliveryInformation")
export class DeliveryInformation {

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set phone(value: string) {
        this._phone = value;
    }

    set addressLine1(value: string) {
        this._addressLine1 = value;
    }

    set addressLine2(value: string) {
        this._addressLine2 = value;
    }

    set zipCode(value: string) {
        this._zipCode = value;
    }

    set city(value: string) {
        this._city = value;
    }

    set state(value: string) {
        this._state = value;
    }

    set countryCode(value: string) {
        this._countryCode = value;
    }

    set email(value: string) {
        this._email = value;
    }

    @JsonProperty("firstName", String) private _firstName: string;

    @JsonProperty("lastName", String) private _lastName: string;

    @JsonProperty("phone", String) private _phone: string;

    @JsonProperty("addressLine1", String) private _addressLine1: string;

    @JsonProperty("addressLine2", String) private _addressLine2: string;

    @JsonProperty("zipCode", String) private _zipCode: string;

    @JsonProperty("city", String) private _city: string;

    @JsonProperty("state", String) private _state: string;

    @JsonProperty("countryCode", String) private _countryCode: string;

    @JsonProperty("email", String) private _email: string;

    constructor(firstName: string = null,
                lastName: string = null,
                phone: string = null,
                addressLine1: string = null,
                addressLine2: string = null,
                zipCode: string = null,
                city: string = null,
                state: string = null,
                countryCode: string = null,
                email: string = null) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._addressLine1 = addressLine1;
        this._addressLine2 = addressLine2;
        this._zipCode = zipCode;
        this._city = city;
        this._state = state;
        this._countryCode = countryCode;
        this._email = email;
    }
}