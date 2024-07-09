import {JsonObject, JsonProperty,} from "json2typescript";
import {Product} from "./product/Product";
import {Client} from "./client/Client";
import {AuthorizationType} from "./authorization/AuthorizationType";
import {AirlineInfo} from "./airlineInfo/AirlineInfo";
import {ThreeDSecure} from "./threeDSecure/ThreeDSecure";
import {StoredCredentials} from "./StoredCredentials";

/*
 * Модель запроса авторизации заказа
 */
@JsonObject("AuthorizeOrder")
export class AuthorizeOrder {

    set authorization(value: AuthorizationType) {
        this._authorizationRequest = value;
    }

    set merchantPaymentReference(value: string) {
        this._merchantPaymentReference = value;
    }

    set currency(value: string) {
        this._currency = value;
    }

    set returnUrl(value: string) {
        this._returnUrl = value;
    }

    public  addDetails(value: string) {
        if (this._additionalDetails === undefined) {
            this._additionalDetails = []
        }
        this._additionalDetails[this._additionalDetails.length] = value;
    }

    public addProduct(value: Product) {
        this._products[this._products.length] = value;
    }

    set client(value: Client) {
        this._client = value;
    }

    set airlineInfo(value: AirlineInfo) {
        this._airlineInfo = value;
    }

    set threeDSecure(value: ThreeDSecure) {
        this._threeDSecure = value;
    }

    set storedCredentials(value: StoredCredentials) {
        this._storedCredentials = value;
    }

    @JsonProperty("merchantPaymentReference", String) private _merchantPaymentReference: string = "";

    @JsonProperty("currency", String) private _currency: string = "";

    @JsonProperty("returnUrl", String) private _returnUrl: string = "";

    @JsonProperty("additionalDetails", [String]) private _additionalDetails: string[];

    @JsonProperty("products", [Product]) private _products: Product[] = [];

    @JsonProperty("authorization", AuthorizationType) private _authorizationRequest: AuthorizationType | undefined = undefined;

    @JsonProperty("client", Client) private _client: Client = new Client;

    @JsonProperty("airlineInfo", AirlineInfo) private _airlineInfo: AirlineInfo;

    @JsonProperty("threeDSecure", ThreeDSecure) private _threeDSecure: ThreeDSecure;

    @JsonProperty("storedCredentials", StoredCredentials) private _storedCredentials: StoredCredentials;

    constructor(merchantPaymentReference: string = "",
                currency: string = null,
                returnUrl: string = null,
                authorizationRequest: AuthorizationType = null,
                client: Client = null,
                airlineInfo: AirlineInfo = null,
                threeDSecure: ThreeDSecure = null,
                storedCredentials: StoredCredentials = null,) {
        this._merchantPaymentReference = merchantPaymentReference;
        this._currency = currency;
        this._returnUrl = returnUrl;
        this._authorizationRequest = authorizationRequest;
        this._client = client;
        this._airlineInfo = airlineInfo;
        this._storedCredentials = storedCredentials;
        this._threeDSecure = threeDSecure;
    }
}