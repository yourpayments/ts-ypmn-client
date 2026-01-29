import {JsonObject, JsonProperty} from "json2typescript";
import { Receiver } from "./Receiver";
import { MarketplaceReceipt } from "./MarketplaceReceipt";

@JsonObject("Details")
export class Details {

    set receipts(value: string | MarketplaceReceipt[]) {
        this._receipts = value;
    }

    set paymentPurpose(value: string) {
        this._paymentPurpose = value;
    }

    set receivers(value: [Receiver]) {
        this._receivers = value;
    }

    set customFields(value: {}) {
        this._customFields = value;
    }

    public addReceiver(value: Receiver) {
        this._receivers.push(value);
    }

    public addCustomField(key: string, value: any) {
        if (!this._customFields) {
            this._customFields = {};
        }
        this._customFields[key] = value;
    }

    get receipts(): string | MarketplaceReceipt[] | null {
        return this._receipts;
    }

    get paymentPurpose(): string | null {
        return this._paymentPurpose;
    }

    get receivers(): [Receiver] | null {
        return this._receivers;
    }

    get customFields(): { [key: string]: any } {
        return this._customFields;
    }

    public getCustomField(key: string): any {
        return this._customFields ? this._customFields[key] : undefined;
    }

    @JsonProperty("receipts", Object) private _receipts: string | MarketplaceReceipt[];

    @JsonProperty("paymentPurpose", String) private _paymentPurpose: string = null;

    @JsonProperty("receivers", [Receiver]) private _receivers: [Receiver] = null;

    @JsonProperty("customFields", Object) private _customFields: { [key: string]: any } = null;

    constructor(
        receipts: string | MarketplaceReceipt[] = null,
        paymentPurpose: string = null,
        receivers: [Receiver] = null,
        customFields: { [key: string]: any } = null
    ) {
        this._receipts = receipts;
        this._paymentPurpose = paymentPurpose;
        this._receivers = receivers;
        this._customFields = customFields;
    }
}
