import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о интерфейсе запросчика
 */
@JsonObject("RequestorUi")
export class RequestorUi {

    set windowSize(value: string) {
        this._windowSize = value;
    }

    @JsonProperty("windowSize", String) private _windowSize: string;


    constructor(windowSize: string = null) {
        this._windowSize = windowSize;
    }
}