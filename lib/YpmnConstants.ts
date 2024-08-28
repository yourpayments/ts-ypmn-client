/*
 * Константы для работы SDK
 */


export class YpmnConstants {

    public static api_version = "v4"
    public static api_url: string = "https://secure.ypmn.ru/api/" + YpmnConstants.api_version + "/";


    public static set api_domain(domain: string) {
        this.api_url = "https://" + domain + YpmnConstants.api_version + "/";
    }

    public static dev_domain = "sandbox.ypmn.ru/api/";
    public static release_domain = "secure.ypmn.ru/api/";
}

export class PaymentMethod {
    public static Card = "CCVISAMC";
    public static FasterPayments = "FASTER_PAYMENTS";
    public static SOM = "SOM";
    public static Podeli = "BNPL";
    public static TPAY = "TPAY";
}

export enum API {
    AuthorizeOrder,
    GetOrderStatus,
    RefundOrder,
    CaptureOrder
}