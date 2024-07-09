import {YpmnApiRequestInterface} from "./YpmnApiRequestInterface";
import {Merchant} from "../model/Merchant";
import {API} from "../YpmnConstants";

import {GetOrderStatusRequest} from "../ypmn/GetOrderStatusRequest";
import {AuthorizeOrderRequest} from "../ypmn/AuthorizeOrderRequest";
import {RefundOrderRequest} from "../ypmn/RefundOrderRequest";
import {CaptureOrderRequest} from "../ypmn/CaptureOrderRequest";


/*
 * Фабрика API запросов, работающая от интерфейса YpmnApiRequestInterface
 */
class YpmnApiRequestBuilder
{
    /*
     * Конструктор инстанса
     */
    private constructor()
    {
        this._requests = new Map<number, YpmnApiRequestInterface>;
    }

    /*
     * Отдает instance для работы только с одним экземпляром класса
     */
    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    /*
     * Создает API запрос
     * @params merchant - данные мерчанта
     * @params requestType - тип запроса, описанный в файле YpmnConstants.ts
     */
    public build(merchant: Merchant, requestType: number) {
        return this._requests.get(requestType)?.process(merchant);
    }

    /*
     * Добавляет шаблон API запроса в словарь
     */
    public registerRequest(type: number, request: YpmnApiRequestInterface) {
        this._requests.set(type, request);
    }

    private _requests: Map<number, YpmnApiRequestInterface>;
    private static _instance: YpmnApiRequestBuilder;
}


export const builder = YpmnApiRequestBuilder.Instance;

builder.registerRequest(API.GetOrderStatus, new GetOrderStatusRequest(new Merchant()));
builder.registerRequest(API.AuthorizeOrder, new AuthorizeOrderRequest(new Merchant()));
builder.registerRequest(API.CaptureOrder, new CaptureOrderRequest(new Merchant()));
builder.registerRequest(API.RefundOrder, new RefundOrderRequest(new Merchant()));