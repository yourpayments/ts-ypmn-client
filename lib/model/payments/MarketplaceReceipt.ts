import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("MarketplaceReceipt")
export class MarketplaceReceipt {
    set merchantCode(value: string) {
        this._merchantCode = value;
    }

    set receipt(value: string) {
        this._receipt = value;
    }

    get merchantCode() {
        return this._merchantCode;
    }

    get receipt() {
        return this._receipt;
    }

    @JsonProperty("merchantCode", String) private _merchantCode: string = null;
    @JsonProperty("receipt", String) private _receipt: string = null;

    constructor(merchantCode: string, receipt: string) {
        this._merchantCode = merchantCode;
        this._receipt = receipt;
    }
}
