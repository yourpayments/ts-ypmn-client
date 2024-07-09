import {YpmnApiRequestInterface} from "../api/YpmnApiRequestInterface";
import {Merchant} from "../model/Merchant";
import {ApiRequest} from "../api/ApiRequest";
import {OrderStatus} from "../model/payments/status/OrderStatus";


/*
 * API запрос статуса платежа
 */
export class GetOrderStatusRequest implements YpmnApiRequestInterface {
    _merchant = new Merchant();
    _method: string = "GET";
    _url: string = "payments/status/";

    /*
     * Вызов API запроса
     * @params data - референс на заказ
     */
    async call(data: string): Promise<OrderStatus> {
        let response = await new ApiRequest(this._merchant).call(this._url + data, this._method);

        return response.deserialize<OrderStatus>(OrderStatus);
    }

    process(merchant: Merchant): GetOrderStatusRequest {
        return new GetOrderStatusRequest(merchant);
    }

    constructor(merchant: Merchant) {
        this._merchant = merchant;
    }

}

