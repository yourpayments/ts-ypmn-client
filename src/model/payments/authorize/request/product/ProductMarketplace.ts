import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о маркетплейсе продукта
 */
@JsonObject("ProductMarketplace")
export class ProductMarketplace {

    set version(value: number) {
        this._version = value;
    }

    set merchantCode(value: string) {
        this._merchantCode = value;
    }

    @JsonProperty("version", Number) private _version: number;

    @JsonProperty("merchantCode", String) private _merchantCode: string;


    constructor(version: number = null, merchantCode: string = null) {
        this._version = version;
        this._merchantCode = merchantCode;
    }
}