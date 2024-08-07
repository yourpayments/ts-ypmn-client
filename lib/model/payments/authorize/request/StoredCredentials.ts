import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель-индикатор операции с сохраненной картой
 */
@JsonObject("StoredCredentials")
export class StoredCredentials {

    set consentType(value: string) {
        this._consentType = value;
    }

    set useType(value: string) {
        this._useType = value;
    }

    set useId(value: string) {
        this._useId = value;
    }

    @JsonProperty("consentType", String) private _consentType: string;

    @JsonProperty("useType", String) private _useType: string;

    @JsonProperty("useId", String) private _useId: string;


    constructor(consentType: string = null,
                useType: string = null,
                useId: string = null) {
        this._consentType = consentType;
        this._useType = useType;
        this._useId = useId;
    }
}