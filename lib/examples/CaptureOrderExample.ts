import {API, CaptureOrder, CaptureOrderResult, YPMN,} from "ts-ypmn-client";

/*
 * Пример запроса на списание средств
 */
let CaptureOrderRequest = async () => {

    // Инициализируем API клиент
    let client = new YPMN("typescript", "typescript");
    client.setDebug(); // Запросы будут приходить на песочницу

    // Запрашиваем данные с сервера
    let response: CaptureOrderResult = await client.build(API.CaptureOrder)?.call(new CaptureOrder(
        2501007, // ID-ссылка на платеж
        2000, // начальная стоимость
        2000, // нынешняя стоимость
        "RUB" // код валюты
        ));

    console.log(response.message);
}

CaptureOrderRequest().then();