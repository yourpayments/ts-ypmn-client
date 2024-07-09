/*
 * Интерфейс конечного API запроса.
 */
import {Merchant} from "../model/Merchant";

export interface YpmnApiRequestInterface {

    _url: string;
    _method: string;
    _merchant: Merchant;

    /*
     * Отправка запроса, получение и возврат нужной информации
     * @params data - данные, которые вводит клиент (ex.: Ref платежа)
     */
    call(data: any): Promise<any>;

    /*
     * Создание копии класса запроса для выолнения с данными мерчанта.
     * @params merchant - данные мерчанта
     */
    process(merchant: Merchant) : YpmnApiRequestInterface;
}