import {JsonObject, JsonProperty} from "json2typescript";
import {ProductMarketplace} from "./ProductMarketplace";

/*
 * Модель продукта
 */
@JsonObject("Product")
export class Product {

    set name(value: string) {
        this._name = value;
    }

    set sku(value: string) {
        this._sku = value;
    }

    set unitPrice(value: number) {
        this._unitPrice = value;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    set additionalDetails(value: string) {
        this._additionalDetails = value;
    }

    set vat(value: number) {
        this._vat = value;
    }

    set marketplace(value: ProductMarketplace) {
        this._marketplace = value;
    }

    @JsonProperty("name", String) private _name: string;

    @JsonProperty("sku", String) private _sku: string;

    @JsonProperty("unitPrice", Number) private _unitPrice: number;

    @JsonProperty("quantity", Number) private _quantity: number;

    @JsonProperty("vat", Number) private _vat: number;

    @JsonProperty("additionalDetails", String) private _additionalDetails: string;

    @JsonProperty("marketplace", ProductMarketplace) private _marketplace: ProductMarketplace;


    constructor(name: string = null,
                sku: string = null,
                unitPrice: number = null,
                quantity: number = null,
                additionalDetails: string = null,
                vat: number = null,
                marketplace: ProductMarketplace = null) {
        this._name = name;
        this._sku = sku;
        this._unitPrice = unitPrice;
        this._quantity = quantity;
        this._additionalDetails = additionalDetails;
        this._vat = vat;
        this._marketplace = marketplace;
    }
}