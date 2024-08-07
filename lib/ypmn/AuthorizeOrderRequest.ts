import {YpmnApiRequestInterface} from "../api/YpmnApiRequestInterface";
import {Merchant} from "../model/Merchant";
import {AuthorizeOrder} from "../model/payments/authorize/request/AuthorizeOrder";
import {AuthorizeOrderResult} from "../model/payments/authorize/response/AuthorizeOrderResult";
import {ApiRequest} from "../api/ApiRequest";

/*
 * API запрос авторизации платежа
 */
export class AuthorizeOrderRequest implements YpmnApiRequestInterface{
    _merchant: Merchant = new Merchant();
    _method: string = "POST";
    _url: string = "payments/authorize";

    async call(data: AuthorizeOrder): Promise<AuthorizeOrderResult> {
        let request = new ApiRequest(this._merchant);
        request.body = JSON.stringify(ApiRequest.serialize<AuthorizeOrder>(data, AuthorizeOrder), null, 4);

        let response = await request.call(this._url, this._method);

        return response.deserialize<AuthorizeOrderResult>(AuthorizeOrderResult);
    }

    process(merchant: Merchant): YpmnApiRequestInterface {
        return new AuthorizeOrderRequest(merchant);
    }

    constructor(merchant: Merchant) {
        this._merchant = merchant;
    }
}