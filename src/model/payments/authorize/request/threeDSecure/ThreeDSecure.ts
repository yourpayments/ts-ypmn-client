import {JsonObject, JsonProperty} from "json2typescript";
import {StrongCustomerAuthentication} from "./StrongCustomerAuthentication";

/*
 * Модель параметров 3DS
 */
@JsonObject("ThreeDSecure")
export class ThreeDSecure {

    set strongCustomerAuthentication(value: StrongCustomerAuthentication) {
        this._strongCustomerAuthentication = value;
    }

    @JsonProperty("strongCustomerAuthentication", StrongCustomerAuthentication) private _strongCustomerAuthentication: StrongCustomerAuthentication = new StrongCustomerAuthentication;


    constructor(strongCustomerAuthentication: StrongCustomerAuthentication = new StrongCustomerAuthentication) {
        this._strongCustomerAuthentication = strongCustomerAuthentication;
    }
}