import {YpmnApiRequestInterface} from "../api/YpmnApiRequestInterface";
import {Merchant} from "../model/Merchant";
import {CaptureOrder} from "../model/payments/capture/CaptureOrder";
import {CaptureOrderResult} from "../model/payments/capture/CaptureOrderResult";
import {ApiRequest} from "../api/ApiRequest";

/*
 * API запрос списания средств
 */
export class CaptureOrderRequest implements YpmnApiRequestInterface {
    _merchant: Merchant = new Merchant();
    _method: string = "POST";
    _url: string = "payments/capture";

    async call(data: CaptureOrder): Promise<CaptureOrderResult> {
        let request = new ApiRequest(this._merchant);
        request.body = JSON.stringify(ApiRequest.serialize<CaptureOrder>(data, CaptureOrder), null, 4);

        let response = await request.call(this._url, this._method);
        return response.deserialize<CaptureOrderResult>(CaptureOrderResult);
    }

    process(merchant: Merchant): YpmnApiRequestInterface {
        return new CaptureOrderRequest(merchant);
    }

    constructor(merchant: Merchant) {
        this._merchant = merchant;
    }

}