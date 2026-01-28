import {ApiRequest} from "../../api/ApiRequest";
import {Details} from "../../model/payments/Details";
import {Receiver} from "../../model/payments/Receiver";
import {YPMN} from "../../YPMN";
import {Product} from "../../model/payments/authorize/request/product/Product";
import {BillingInformation} from "../../model/payments/authorize/request/client/BillingInformation";
import {Client} from "../../model/payments/authorize/request/client/Client";
import {AuthorizationType} from "../../model/payments/authorize/request/authorization/AuthorizationType";
import {PaymentMethod} from "../../YpmnConstants";
import {AuthorizeOrder} from "../../model/payments/authorize/request/AuthorizeOrder";

/*
 * Пример запроса на авторизацию платежа картой
 */

let CardAuthorizeOrderRequest = async () => {

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
    let authorization = new AuthorizationType(
        PaymentMethod.Card,
        "YES");

    let details = new Details(
        "test",
        "test",
        [
            new Receiver(
                '123',
                '123',
                '123',
                '123',
                '123',
                '123',
                '123',
                '123',
                '123',
                '123'
            )
        ],
        {
            "key": "value"
        }
    );

    details.addCustomField("debugMode", true);

    // Создаем модель информации об авторизации платежа
    let authorizeOrder = new AuthorizeOrder(
        "nhiot4f1c2aasi56k3ls2o",
        "RUB",
        "https://supermegamarketplace.ru",
        authorization,
        client,
        null,
        null,
        null,
        details
    );

    // Добавляем товар в модель информации
    authorizeOrder.addProduct(product);

    // Запрашиваем данные с сервера
    let json = JSON.stringify(ApiRequest.serialize<AuthorizeOrder>(authorizeOrder, AuthorizeOrder), null, 4);

    console.log(json);
}

CardAuthorizeOrderRequest().then();