import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о туристическом агенстве
 */
@JsonObject("TravelAgency")
export class TravelAgency {

    set code(value: string) {
        this._code = value;
    }

    set name(value: string) {
        this._name = value;
    }

    @JsonProperty("code", String) private _code: string;

    @JsonProperty("name", String) private _name: string;

    constructor(code: string = null, name: string = null) {
        this._code = code;
        this._name = name;
    }
}