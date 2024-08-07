import {JsonObject, JsonProperty} from "json2typescript";
import {CardDetails} from "./CardDetails";
import {MerchantToken} from "./MerchantToken";
import {OneTimeUseToken} from "./oneTimeUseToken";
import {PaymentPageOptions} from "./PaymentPageOptions";

/*
 * Модель информации о типе авторизации платежа
 */
@JsonObject("AuthorizationType")
export class AuthorizationType {

    set paymentMethod(value: string) {
        this._paymentMethod = value;
    }

    set usePaymentPage(value: string) {
        this._usePaymentPage = value;
    }

    set cardDetails(value: CardDetails) {
        this._cardDetails = value;
    }

    set merchantToken(value: MerchantToken) {
        this._merchantToken = value;
    }

    set oneTimeUseToken(value: OneTimeUseToken) {
        this._oneTimeUseToken = value;
    }

    set paymentPageOptions(value: PaymentPageOptions) {
        this._paymentPageOptions = value;
    }

    set orderTimeout(value: number) {
        this._paymentPageOptions = new PaymentPageOptions(value);
    }

    @JsonProperty("paymentMethod", String) private _paymentMethod: string;

    @JsonProperty("usePaymentPage", String) private _usePaymentPage: string;

    @JsonProperty("cardDetails", CardDetails) private _cardDetails: CardDetails ;

    @JsonProperty("merchantToken", MerchantToken) private _merchantToken: MerchantToken;

    @JsonProperty("oneTimeUseToken", OneTimeUseToken) private _oneTimeUseToken: OneTimeUseToken;

    @JsonProperty("paymentPageOptions", PaymentPageOptions) private _paymentPageOptions: PaymentPageOptions;

    constructor(paymentMethod: string  = null,
                usePaymentPage: string  = null,
                cardDetails: CardDetails  = null,
                merchantToken: MerchantToken  = null,
                oneTimeUseToken: OneTimeUseToken  = null,
                paymentPageOptions: PaymentPageOptions  = null,
                ) {
        this._paymentMethod = paymentMethod;
        this._usePaymentPage = usePaymentPage;
        this._cardDetails = cardDetails;
        this._merchantToken = merchantToken;
        this._oneTimeUseToken = oneTimeUseToken;
        this._paymentPageOptions = paymentPageOptions;
    }
}