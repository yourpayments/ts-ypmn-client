import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о идентификационном документе
 */
@JsonObject("IdentityDocument")
export class IdentityDocument {

    set number(value: string) {
        this._number = value;
    }

    set type(value: string) {
        this._type = value;
    }

    @JsonProperty("number", String) private _number: string;

    @JsonProperty("type", String) private _type: string;

    constructor(number: string = null, type: string = null) {
        this._number = number;
        this._type = type;
    }

}