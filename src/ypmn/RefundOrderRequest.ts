import {YpmnApiRequestInterface} from "../api/YpmnApiRequestInterface";
import {Merchant} from "../model/Merchant";
import {RefundOrderResult} from "../model/payments/refund/RefundOrderResult";
import {RefundOrder} from "../model/payments/refund/request/RefundOrder";
import {ApiRequest} from "../api/ApiRequest";

/*
 * API запрос возврата платежа
 */
export class RefundOrderRequest implements  YpmnApiRequestInterface{
    _merchant: Merchant = new Merchant();
    _method: string = "POST";
    _url: string = "payments/refund";

    async call(data: RefundOrder): Promise<RefundOrderResult> {
        let request = new ApiRequest(this._merchant);
        request.body = JSON.stringify(ApiRequest.serialize<RefundOrder>(data, RefundOrder), null, 4);

        let response = await request.call(this._url, this._method);

        return response.deserialize<RefundOrderResult>(RefundOrderResult);
    }

    process(merchant: Merchant): YpmnApiRequestInterface {
        return new RefundOrderRequest(merchant);
    }

    constructor(merchant: Merchant) {
        this._merchant = merchant;
    }

}