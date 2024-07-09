import {JsonObject, JsonProperty} from "json2typescript";
import {IdentityDocument} from "./IdentityDocument";

/*
 * Модель информации о платеже
 */
@JsonObject("BillingInformation")
export class BillingInformation {

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set phone(value: string) {
        this._phone = value;
    }

    set city(value: string) {
        this._city = value;
    }

    set countryCode(value: string) {
        this._countryCode = value;
    }

    set state(value: string) {
        this._state = value;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    set taxId(value: string) {
        this._taxId = value;
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

    set identityDocument(value: IdentityDocument) {
        this._identityDocument = value;
    }

    @JsonProperty("firstName", String) private _firstName: string;

    @JsonProperty("lastName", String) private _lastName: string;

    @JsonProperty("email", String) private _email: string;

    @JsonProperty("phone", String) private _phone: string;

    @JsonProperty("city", String) private _city: string;

    @JsonProperty("countryCode", String) private _countryCode: string;

    @JsonProperty("state", String) private _state: string;

    @JsonProperty("companyName", String) private _companyName: string;

    @JsonProperty("taxId", String) private _taxId: string;

    @JsonProperty("addressLine1", String) private _addressLine1: string;

    @JsonProperty("addressLine2", String) private _addressLine2: string;

    @JsonProperty("zipCode", String) private _zipCode: string;

    @JsonProperty("identityDocument", IdentityDocument) private _identityDocument : IdentityDocument;

    constructor(firstName: string = null,
                lastName: string = null,
                email: string = null,
                phone: string = null,
                city: string = null,
                countryCode: string = null,
                state: string = null,
                companyName: string = null,
                taxId: string = null,
                addressLine1: string = null,
                addressLine2: string = null,
                zipCode: string = null,
                identityDocument: IdentityDocument = null) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
        this._city = city;
        this._countryCode = countryCode;
        this._state = state;
        this._companyName = companyName;
        this._taxId = taxId;
        this._addressLine1 = addressLine1;
        this._addressLine2 = addressLine2;
        this._zipCode = zipCode;
        this._identityDocument = identityDocument;
    }

}