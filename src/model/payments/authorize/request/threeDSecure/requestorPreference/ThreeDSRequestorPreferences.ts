import {JsonObject, JsonProperty} from "json2typescript";
import {RequestorChallenge} from "./RequestorChallenge";

/*
 * Модель дополнительной информации о параметрах запроса
 */
@JsonObject("ThreeDSRequestorPreferences")
export class ThreeDSRequestorPreferences {

    set challenge(value: RequestorChallenge) {
        this._challenge = value;
    }

    @JsonProperty("challenge", RequestorChallenge) private _challenge: RequestorChallenge;


    constructor(challenge: RequestorChallenge = null) {
        this._challenge = challenge;
    }
}