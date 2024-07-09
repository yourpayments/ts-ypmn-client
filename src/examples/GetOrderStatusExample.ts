import {YPMN} from "../YPMN";
import {API} from "../YpmnConstants";
import {OrderStatus} from "../model/payments/status/OrderStatus";

/*
 * Пример запроса информации о платеже
 */
let GetOrderStatusRequest = async () => {

    // Инициализируем API клиент
    let client = new YPMN("typescript", "typescript");
    client.setDebug(); // Запросы будут приходить на песочницу

    // Запрашиваем данные с сервера, передаем платежную ссылку
    let response: OrderStatus = await client.build(API.GetOrderStatus)?.call("nhiot4f1c2aszi26k3ei2o");

    console.log(response.paymentStatus);
}

GetOrderStatusRequest().then();