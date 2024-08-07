import {JsonObject, JsonProperty} from "json2typescript";

/*
 * Модель информации о браузере пользователя
 */
@JsonObject("ThreeDSBrowserEnvironment")
export class ThreeDSBrowserEnvironment {

    set acceptHeader(value: string) {
        this._acceptHeader = value;
    }

    set requestIp(value: string) {
        this._requestIp = value;
    }

    set javaEnabled(value: string) {
        this._javaEnabled = value;
    }

    set language(value: string) {
        this._language = value;
    }

    set colorDepth(value: number) {
        this._colorDepth = value;
    }

    set screenHeight(value: number) {
        this._screenHeight = value;
    }

    set screenWidth(value: number) {
        this._screenWidth = value;
    }

    set timezone(value: number) {
        this._timezone = value;
    }

    @JsonProperty("acceptHeader", String) private _acceptHeader: string;

    @JsonProperty("requestIp", String) private _requestIp: string;

    @JsonProperty("javaEnabled", String) private _javaEnabled: string;

    @JsonProperty("language", String) private _language: string;

    @JsonProperty("colorDepth", Number) private _colorDepth: number;

    @JsonProperty("screenHeight", Number) private _screenHeight: number;

    @JsonProperty("screenWidth", Number) private _screenWidth: number;

    @JsonProperty("timezone", Number) private _timezone: number;


    constructor(acceptHeader: string = null,
                requestIp: string = null,
                javaEnabled: string = null,
                language: string = null,
                colorDepth: number = null,
                screenHeight: number = null,
                screenWidth: number = null,
                timezone: number = null) {
        this._acceptHeader = acceptHeader;
        this._requestIp = requestIp;
        this._javaEnabled = javaEnabled;
        this._language = language;
        this._colorDepth = colorDepth;
        this._screenHeight = screenHeight;
        this._screenWidth = screenWidth;
        this._timezone = timezone;
    }
}