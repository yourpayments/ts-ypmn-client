import {HttpRequest} from "../http/HttpRequest";
import {Merchant} from "../model/Merchant";
import {YpmnConstants} from "../YpmnConstants";

import {createHash, createHmac} from 'crypto';
import {ApiResponse} from "./ApiResponse";
import {JsonConvert, OperationMode, PropertyConvertingMode, ValueCheckingMode} from "json2typescript";

/*
 * Прослойка между YPMNApiRequest и HttpRequest. Здесь задаются
 * все изначально известные параметры.
 */
export class ApiRequest {

    /*
     * Конструктор API запроса
     * @param merchant - данные мерчанта
     */
    public constructor(merchant: Merchant) {
        this._merchant = merchant;
        this._request = new HttpRequest();

        this._request.addHeader("Accept", "application/json");
        this._request.addHeader("Content-Type", "application/json");
        this._request.addHeader("Accept-Encoding", "gzip, deflate, br");
        this._request.addHeader("Connection", "keep-alive");
        this._request.addHeader("User-Agent", 'ypmn-ts-sdk-agent__' + merchant.code);

    }

    /*
     * Вызывает запрос и отдает ApiResponse промис
     * @param url - путь после ypmn.ru/api/v4
     * @param method - метод HTML запроса
     * @param query - Query строка запроса
     */
    public call = async (url: string, method: string, query: string = "") => {
        let fullURL = "/api/" + YpmnConstants.api_version + "/" + url + query;

        this._request.url = url + query;
        this._request.method = method;

        // Проверка на наличие чего-то в теле запроса
        this._body = this._body === undefined ? "" : this._body;

        this._request.addHeader("X-Header-Signature", getSignature(this._merchant, fullURL, method, this._body));
        this._request.addHeader("X-Header-Date", getDate());
        this._request.addHeader("X-Header-Merchant", this._merchant.code);

        if (method != "GET" && this._body != null) {
            this._request.body = this._body;
        }

        let response = await this._request.call();

        if (!response.success) {
            console.error("[" + fullURL + "]: API request failed!");
        }

        return new ApiResponse(response.response, response.success);
    }

    /*
     * Сеттер тела запроса
     * @param body - тело запроса
     */
    public set body(body: string) {
        this._body = body;
    }

    /*
     * Добавляет хэдер к запросу
     * @param name - название хэдера
     * @param value - значение хэдера
     */
    public addHeader(name: string, value: string) {
        this._request.addHeader(name, value);
    }

    /*
     * Сериализует класс в JSON
     * @params model - экземпляр класса-модели
     * @params modelType - конструктор класса-модели
     * @template ModelType - тип класса-модели
     */
    public static serialize<ModelType extends Object>(model: ModelType, modelType: new() => ModelType) {
        let jsonConvert = new JsonConvert();
        let json: string = "";

        jsonConvert.operationMode = OperationMode.ENABLE;
        jsonConvert.ignorePrimitiveChecks = true;
        jsonConvert.mapUndefinedToNull = true;
        jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
        jsonConvert.propertyConvertingMode = PropertyConvertingMode.IGNORE_NULLABLE;

        try {
            json = jsonConvert.serializeObject(model, modelType);
        }catch (e) {
            console.error(e);
        }

        return json;
    }

    private readonly _merchant: Merchant;
    private _request: HttpRequest;
    private _body: null | string | undefined;
}

/*
 * Создает сигнатуру
 * @params merchant - данные мерчанта
 * @params url - полный url с корня сайта
 * @params method - метод HTTP запроса
 * @params body - тело запроса
 */
let getSignature = (merchant: Merchant, url: string, method: string, body: string | null) => {
    const bodyHash = createHash('md5').update(body === null ? "" : body.toString()).digest('hex');
    const rawSignature = merchant.code + getDate() + method + url + bodyHash;

    return createHmac('sha256', merchant.secret).update(rawSignature).digest('hex');
}

/*
 * Создает дату в формате ISO_8601
 */
let getDate = () => {
    let date = new Date();

    let tz = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2].slice(4);
    let day =  date.getUTCDate().toString();
    let month =  (date.getUTCMonth() + 1).toString();
    let year =  date.getUTCFullYear().toString();
    let hour =  date.getHours().toString();
    let minute =  date.getUTCMinutes().toString();
    let second =  date.getUTCSeconds().toString();

    second = second.length < 2 ? "0" + second : second;
    minute = minute.length < 2 ? "0" + minute : minute;
    hour = hour.length < 2 ? "0" + hour : hour;
    month = month.length < 2 ? "0" + month : month;
    day = day.length < 2 ? "0" + day : day;
    tz = tz.length < 2 ? "0" + tz : tz;

    return year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "+" + tz + ":00";
}