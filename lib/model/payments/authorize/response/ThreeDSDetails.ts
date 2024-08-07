import {JsonObject, JsonProperty} from "json2typescript";
/*
 * Модель ответа 3DSecure
 */
@JsonObject("ThreeDSDetails")
export class ThreeDSDetails {

    get mdStatus(): string {
        return this._mdStatus;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    get txStatus(): string {
        return this._txStatus;
    }

    get xid(): string {
        return this._xid;
    }

    get eci(): number {
        return this._eci;
    }

    get cavv(): number {
        return this._cavv;
    }

    @JsonProperty("mdStatus", String) private _mdStatus: string = "";

    @JsonProperty("errorMessage", String) private _errorMessage: string = "";

    @JsonProperty("txStatus", String) private _txStatus: string = "";

    @JsonProperty("xid", String) private _xid: string = "";

    @JsonProperty("eci", Number) private _eci: number = 0;

    @JsonProperty("cavv", Number) private _cavv: number = 0;

}