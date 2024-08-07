import {Merchant} from "./model/Merchant";
import {builder} from "./api/YpmnApiRequestBuilder";
import {YpmnConstants} from "./YpmnConstants";

/*
 * Клиент YPMN API
 */
export class YPMN {

    /*
     * Конструктор клиента, собирает модель Merchant
     * @params merchantCode - ID мерчанта
     * @params merchantSecret - секретный ключ мерчанта
     */
    public constructor(merchantCode: string, merchantSecret: string) {
        this._merchant = new Merchant(merchantCode, merchantSecret);
    }

    /*
     * Создает класс API запроса, оболочка для клиента
     * @params requestType - тип API запроса, описанный в файле YpmnConstants.ts
     */
    public build(requestType: number) {
        return builder.build(this._merchant, requestType);
    }

    /*
     * Настройка констант на режим разработки и релиза
     * @params debug - режим разработки
     */
    public setDebug(debug: boolean = true) {
        if(debug) {
            YpmnConstants.api_domain = YpmnConstants.dev_domain;
        } else {
            YpmnConstants.api_domain = YpmnConstants.release_domain;
        }
    }

    private readonly _merchant: Merchant;
}