import {API, RefundOrder, RefundOrderResult, YPMN} from "ts-ypmn-client";

/*
 * Пример запроса на возврат
 */

let RefundOrderExample = async () => {

    // Инициализируем API клиент
    let client = new YPMN("typescript", "typescript");
    client.setDebug(); // Запросы будут приходить на песочницу

    // Запрашиваем информацию с сервера
    let response: RefundOrderResult;
    response = await client.build(API.RefundOrder)?.call(new RefundOrder(
        2501007, // ID-ссылка на платеж
        2000, // начальная стоимость
        2000, // нынешняя стоимость
        "RUB" // код валюты
    ));

    console.log(response.refundRequestId);
}

RefundOrderExample().then();