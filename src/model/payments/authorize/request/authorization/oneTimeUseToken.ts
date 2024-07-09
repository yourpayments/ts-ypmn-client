import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации об одноразовом токене
 */
@JsonObject("OneTimeUseToken")
export class OneTimeUseToken {

    set token(value: string) {
        this._token = value;
    }

    set sessionId(value: string) {
        this._sessionId = value;
    }

    @JsonProperty("token", String) private _token: string;

    @JsonProperty("sessionId", String) private _sessionId: string;


    constructor(token: string = null, sessionId: string = null) {
        this._token = token;
        this._sessionId = sessionId;
    }
}