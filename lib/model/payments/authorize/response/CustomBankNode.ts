import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель дополинтельной информации о СБП
 */
@JsonObject("CustomBankNode")
export class CustomBankNode {

    get qr(): string {
        return this._qr;
    }

    get url(): String {
        return this._url;
    }

    @JsonProperty("qr", String) private _qr: string = "";

    @JsonProperty("url", String) private _url: string = "";

}