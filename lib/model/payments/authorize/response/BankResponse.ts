import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель ответа банка
 */
@JsonObject("BankResponse")
export class BankResponse {
    get code(): string {
        return this._code;
    }

    get message(): string {
        return this._message;
    }

    get status(): string {
        return this._status;
    }

    @JsonProperty("code", String) private _code: string = "";

    @JsonProperty("message", String) private _message: string = "";

    @JsonProperty("status", String) private _status: string = "";

}