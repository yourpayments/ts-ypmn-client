import {JsonObject, JsonProperty} from "json2typescript";
import {AuthorizedCardDetails} from "./AuthorizedCardDetails";
import {AuthorizedStoredCredentials} from "./AuthorizedStoredCredentials";

/*
 * Модель авторизации
 */
@JsonObject("AuthorizationResponse")
export class AuthorizationResponse {

    get authorized(): string {
        return this._authorized;
    }

    get cardDetails(): AuthorizedCardDetails {
        return this._cardDetails;
    }

    get timestamp(): string {
        return this._timestamp;
    }

    get storedCredentials(): AuthorizedStoredCredentials {
        return this._storedCredentials;
    }

    @JsonProperty("authorized", String) private _authorized: string = "";

    @JsonProperty("timestamp", String) private _timestamp: string = "";

    @JsonProperty("cardDetails", AuthorizedCardDetails) private _cardDetails: AuthorizedCardDetails = new AuthorizedCardDetails;

    @JsonProperty("storedCredentials", AuthorizedStoredCredentials) private _storedCredentials: AuthorizedStoredCredentials = new AuthorizedStoredCredentials;
}