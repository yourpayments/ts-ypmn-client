import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель сохраненных данных операции
 */
@JsonObject("AuthorizedStoredCredentials")
export class AuthorizedStoredCredentials {

    get useId(): string {
        return this._useId;
    }

    @JsonProperty("useId", String) private _useId: string = "";

}