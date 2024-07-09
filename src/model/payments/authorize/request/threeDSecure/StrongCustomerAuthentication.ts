import {JsonObject, JsonProperty} from "json2typescript";
import {ThreeDSCardholder} from "./cardholder/ThreeDSCardholder";
import {ClientEnvironment} from "./ClientEnvironment/ClientEnvironment";
import {ThreeDSPurchase} from "./purchase/ThreeDSPurchase";
import {ThreeDSRequestorPreferences} from "./requestorPreference/ThreeDSRequestorPreferences";

/*
 * Модель данных для передачи в потоке перенаправления 3D Secure 2.0
 */
@JsonObject("StrongCustomerAuthentication")
export class StrongCustomerAuthentication {

    set cardholder(value: ThreeDSCardholder) {
        this._cardholder = value;
    }

    set clientEnvironment(value: ClientEnvironment) {
        this._clientEnvironment = value;
    }

    set purchase(value: ThreeDSPurchase) {
        this._purchase = value;
    }

    set threeDsRequestorPreferences(value: ThreeDSRequestorPreferences) {
        this._threeDsRequestorPreferences = value;
    }

    @JsonProperty("cardholder", ThreeDSCardholder) private _cardholder: ThreeDSCardholder;

    @JsonProperty("clientEnvironment", ClientEnvironment) private _clientEnvironment: ClientEnvironment;

    @JsonProperty("purchase", ThreeDSPurchase) private _purchase: ThreeDSPurchase;

    @JsonProperty("threeDSRequestorPreferences", ThreeDSRequestorPreferences) private _threeDsRequestorPreferences: ThreeDSRequestorPreferences;


    constructor(cardholder: ThreeDSCardholder = null,
                clientEnvironment: ClientEnvironment = null,
                purchase: ThreeDSPurchase = null,
                threeDsRequestorPreferences: ThreeDSRequestorPreferences = null) {
        this._cardholder = cardholder;
        this._clientEnvironment = clientEnvironment;
        this._purchase = purchase;
        this._threeDsRequestorPreferences = threeDsRequestorPreferences;
    }
}