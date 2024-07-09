import {YPMN} from "../../YPMN";
import {Product} from "../../model/payments/authorize/request/product/Product";
import {BillingInformation} from "../../model/payments/authorize/request/client/BillingInformation";
import {Client} from "../../model/payments/authorize/request/client/Client";
import {AuthorizationType} from "../../model/payments/authorize/request/authorization/AuthorizationType";
import {AuthorizeOrder} from "../../model/payments/authorize/request/AuthorizeOrder";
import {AuthorizeOrderResult} from "../../model/payments/authorize/response/AuthorizeOrderResult";
import {API} from "../../YpmnConstants";

/*
 * Пример запроса на авторизацию платежа картой
 */
let ChooseAuthorizeOrderRequest = async () => {

    // Инициализируем API клиент
    let ypmn_client = new YPMN("typescript", "typescript");
    ypmn_client.setDebug(); // Запросы будут приходить на песочницу

    // Создаем модель товара
    let product = new Product(
        "Coffee with cookies collection",
        "3301",
        2000,
        1);

    // Создаем модель платежной информации
    let billing = new BillingInformation(
        "Вася",
        "Пупкин",
        "vasya.pupkin@ypmn.ru",
        "+7-800-555-35-35",
        "Сочи",
        "RU");

    // Создаем модель клиента
    let client = new Client(billing);

    // Задаем параметры авторизации платежа
    let authorization = new AuthorizationType();
    authorization.usePaymentPage = "YES";

    // Создаем модель информации об авторизации платежа
    let authorizeOrder = new AuthorizeOrder(
        "nhiot4f1c5aasi56k3ls2o",
        "RUB",
        "https://supermegamarketplace.ru",
        authorization,
        client
    );

    // Добавляем товар в модель информации
    authorizeOrder.addProduct(product);

    // Запрашиваем данные с сервера
    let response: AuthorizeOrderResult = await ypmn_client.build(API.AuthorizeOrder)?.call(authorizeOrder);

    console.log(response.paymentResult.url);
}

ChooseAuthorizeOrderRequest().then();