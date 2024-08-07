import {JsonObject, JsonProperty} from "json2typescript";
import {RequestorUi} from "./RequestorUi";

/*
 * Модель информации о параметрах запроса
 */
@JsonObject("RequestorChallenge")
export class RequestorChallenge {

    set indicator(value: string) {
        this._indicator = value;
    }

    set ui(value: RequestorUi) {
        this._ui = value;
    }

    @JsonProperty("indicator", String) private _indicator: string;

    @JsonProperty("ui", RequestorUi) private _ui: RequestorUi;

    constructor(indicator: string = null, ui: RequestorUi = null) {
        this._indicator = indicator;
        this._ui = ui;
    }
}