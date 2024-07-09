import {JsonObject, JsonProperty} from "json2typescript";
import {BankResponse} from "./BankResponse";
import {CustomBankNode} from "./CustomBankNode";

/*
 * Модель информации об ответе банка
 */
@JsonObject("BankResponseDetails")
export class BankResponseDetails {

    get terminalId(): string {
        return this._terminalId;
    }

    get hostRefNum(): string {
        return this._hostRefNum;
    }

    get merchantId(): string {
        return this._merchantId;
    }

    get shortName(): string {
        return this._shortName;
    }

    get txRefNo(): string {
        return this._txRefNo;
    }

    get oid(): string {
        return this._oid;
    }

    get transId(): string {
        return this._transId;
    }

    get bankResponse(): BankResponse {
        return this._bankResponse;
    }

    get customBankNode(): CustomBankNode {
        return this._customBankNode;
    }

    @JsonProperty("terminalId", String) private _terminalId: string = "";

    @JsonProperty("hostRefNum", String) private _hostRefNum: string = "";

    @JsonProperty("merchantId", String) private _merchantId: string = "";

    @JsonProperty("shortName", String) private _shortName: string = "";

    @JsonProperty("txRefNo", String) private _txRefNo: string = "";

    @JsonProperty("oid", String) private _oid: string = "";

    @JsonProperty("transId", String) private _transId: string = "";

    @JsonProperty("bankResponse", BankResponse) private _bankResponse: BankResponse = new BankResponse;

    @JsonProperty("customBankNode", CustomBankNode) private _customBankNode: CustomBankNode = new CustomBankNode;

}