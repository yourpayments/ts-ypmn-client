import {YPMN} from "../YPMN";
import {RefundOrderResult} from "../model/payments/refund/RefundOrderResult";
import {RefundOrder} from "../model/payments/refund/request/RefundOrder";
import {API} from "../YpmnConstants";

/*
 * Пример запроса на возврат
 */
let RefundOrderExample = async () => {

    // Инициализируем API клиент
    let client = new YPMN("typescript", "typescript");
    client.setDebug(); // Запросы будут приходить на песочницу

    // Запрашиваем информацию с сервера
    let response: RefundOrderResult = await client.build(API.RefundOrder)?.call(new RefundOrder(
        2501007, // ID-ссылка на платеж
        2000, // начальная стоимость
        2000, // нынешняя стоимость
        "RUB" // код валюты
    ))

    console.log(response.refundRequestId);
}

RefundOrderExample().then();