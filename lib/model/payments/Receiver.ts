import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Receiver")
export class Receiver {
    set sku(value: string) { this._sku = value; }
    set bic(value: string) { this._bic = value; }
    set correspondentAccount(value: string) { this._correspondentAccount = value; }
    set account(value: string) { this._account = value; }
    set name(value: string) { this._name = value; }
    set inn(value: string) { this._inn = value; }
    set kpp(value: string) { this._kpp = value; }
    set purpose(value: string) { this._purpose = value; }
    set personalAccount(value: string) { this._personalAccount = value; }
    set period(value: string) { this._period = value; }

    @JsonProperty("sku", String) private _sku: string = null;
    @JsonProperty("bic", String) private _bic: string = null;
    @JsonProperty("correspondentAccount", String) private _correspondentAccount: string = null;
    @JsonProperty("account", String) private _account: string = null;
    @JsonProperty("name", String) private _name: string = null;
    @JsonProperty("inn", String) private _inn: string = null;
    @JsonProperty("kpp", String) private _kpp: string = null;
    @JsonProperty("purpose", String) private _purpose: string = null;
    @JsonProperty("personalAccount", String) private _personalAccount: string = null;
    @JsonProperty("period", String) private _period: string = null;

    constructor(
        sku: string = null, bic: string = null, correspondentAccount: string = null,
        account: string = null, name: string = null, inn: string = null, kpp: string = null,
        purpose: string = null, personalAccount: string = null, period: string = null
    ) {
        this._sku = sku;
        this._bic = bic;
        this._correspondentAccount = correspondentAccount;
        this._account = account;
        this._name = name;
        this._inn = inn;
        this._kpp = kpp;
        this._purpose = purpose;
        this._personalAccount = personalAccount;
        this._period = period;
    }
}
