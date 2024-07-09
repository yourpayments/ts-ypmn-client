import {YpmnConstants} from "../YpmnConstants";
import {HttpResponse} from "./HttpResponse";
import {callbackify} from "node:util";

/*
 * Основа ApiRequest, использует fetch для сборки HttpResponse
 */
export class HttpRequest{

    /*
     * Сеттер метода запроса
     * @params method - метод запроса
     */
    public set method(value: string) {
        this._method = value;
    }

    /*
     * Сеттер тела запроса
     * @params value - тело запроса
     */
    public set body(value: string) {
        this._body = value;
    }

    /*
     * Сеттер дополнительного пути в url
     * @params value - путь запроса после стандартного URL API
     */
    public set url(value: string) {
        this._url += value;
    }

    /*
     * Добавляет в словарь хэдер для отправки запроса
     * @params name - название хэдера
     * @params value - значение хэдера
     */
    public addHeader = (name: string, value: string) => {
        if(this._headers === undefined) {
            this._headers = {};
        }
        // @ts-ignore
        this._headers[name] = value;
    }

    /*
     * Фетч запроса и сборка HttpResponse
     */
    public call = async () => {

        const response = await fetch(this._url, {
            method: this._method,
            headers: this._headers,
            body: this._body
        });

        const data = await response.json();

        return new HttpResponse(data, response.ok);
    };

    private _url: string = YpmnConstants.api_url;
    private _method: string | undefined;
    private _headers: {} | undefined;
    private _body: string | undefined;
}