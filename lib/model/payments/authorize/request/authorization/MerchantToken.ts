import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о раннее сохраненных ранее токенах
 */
@JsonObject("MerchantToken")
export class MerchantToken {

    set bindingId(value: string) {
        this._bindingId = value;
    }

    set tokenHash(value: string) {
        this._tokenHash = value;
    }

    set cvv(value: number) {
        this._cvv = value;
    }

    set owner(value: string) {
        this._owner = value;
    }

    @JsonProperty("bindingId", String) private _bindingId: string;

    @JsonProperty("tokenHash", String) private _tokenHash: string;

    @JsonProperty("cvv", Number) private _cvv: number;

    @JsonProperty("owner", String) private _owner: string;


    constructor(bindingId: string = null, tokenHash: string = null, cvv: number = null, owner: string = null) {
        this._bindingId = bindingId;
        this._tokenHash = tokenHash;
        this._cvv = cvv;
        this._owner = owner;
    }
}