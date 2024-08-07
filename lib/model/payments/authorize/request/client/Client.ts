import {JsonObject, JsonProperty} from "json2typescript";
import {BillingInformation} from "./BillingInformation";
import { DeliveryInformation } from "./DeliveryInformation";

/*
 * Модель данных клиента
 */
@JsonObject("Client")
export class Client {

    set clientIp(value: string) {
        this._clientIp = value;
    }

    set clientTime(value: string) {
        this._clientTime = value;
    }

    set billingInformation(value: BillingInformation) {
        this._billing = value;
    }

    set deliveryInformation(value: DeliveryInformation) {
        this._delivery = value;
    }

    set communicationLanguage(value: string) {
        this._communicationLanguage = value;
    }

    @JsonProperty("ip", String) private _clientIp: string;

    @JsonProperty("time", String) private _clientTime: string;

    @JsonProperty("communicationLanguage", String) private _communicationLanguage: string;

    @JsonProperty("billing", BillingInformation) private _billing: BillingInformation;

    @JsonProperty("delivery", DeliveryInformation) private _delivery: DeliveryInformation;

    constructor(
        billing: BillingInformation = null,
        clientIp: string = null,
        clientTime: string = null,
        communicationLanguage: string = null,
        delivery: DeliveryInformation = null) {
        this._clientIp = clientIp;
        this._clientTime = clientTime;
        this._billing = billing;
        this._delivery = delivery;
        this._communicationLanguage = communicationLanguage;
    }

}