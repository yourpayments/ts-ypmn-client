import {YPMN} from "../../YPMN";
import {Product} from "../../model/payments/authorize/request/product/Product";
import {BillingInformation} from "../../model/payments/authorize/request/client/BillingInformation";
import {Client} from "../../model/payments/authorize/request/client/Client";
import {AuthorizationType} from "../../model/payments/authorize/request/authorization/AuthorizationType";
import {API, PaymentMethod} from "../../YpmnConstants";
import {AuthorizeOrder} from "../../model/payments/authorize/request/AuthorizeOrder";
import {AuthorizeOrderResult} from "../../model/payments/authorize/response/AuthorizeOrderResult";
import {CardDetails} from "../../model/payments/authorize/request/authorization/CardDetails";

/*
 * Пример запроса на авторизацию платежа картой на странице мерчанта
 */
let CardAuthorizeOrderMerchantPageRequest = async () => {

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

    // Задаем данные сохраненной карты
    let cardDetails = new CardDetails(
        5105105105105100,
        3,
        2025,
        235,
        "John Doe"
    );

    // Задаем параметры авторизации платежа
    let authorization = new AuthorizationType(
        PaymentMethod.Card,
        "NO",
        cardDetails);

    // Создаем модель информации об авторизации платежа
    let authorizeOrder = new AuthorizeOrder(
        "nhiot4f1c2aask56k3ls2o",
        "RUB",
        "https://supermegamarketplace.ru",
        authorization,
        client
    );

    // Добавляем товар в модель информации
    authorizeOrder.addProduct(product);

    // Запрашиваем данные с сервера
    let response: AuthorizeOrderResult = await ypmn_client.build(API.AuthorizeOrder)?.call(authorizeOrder);

    console.log(response.paymentResult.payuResponseCode);
}

CardAuthorizeOrderMerchantPageRequest().then();