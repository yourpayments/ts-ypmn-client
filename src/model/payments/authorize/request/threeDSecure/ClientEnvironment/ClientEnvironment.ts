import {JsonObject, JsonProperty} from "json2typescript";
import {ThreeDSBrowserEnvironment} from "./ThreeDSBrowserEnvironment";

/*
 * Модель информации об окружении пользователя
 */
@JsonObject("ClientEnvironment")
export class ClientEnvironment {

    set browser(value: ThreeDSBrowserEnvironment) {
        this._browser = value;
    }

    @JsonProperty("deviceChannel", String) private _deviceChannel: string = "01";

    @JsonProperty("browser", ThreeDSBrowserEnvironment) private _browser: ThreeDSBrowserEnvironment;


    constructor(browser: ThreeDSBrowserEnvironment = null) {
        this._browser = browser;
    }
}