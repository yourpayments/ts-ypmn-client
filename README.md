# «Твои платежи» - интеграция на TypeScript
---
### Простая установка

#### Установите пакет `ts-ypmn-client`
```shell
npm install ts-ypmn-client
```
---
### Примеры кода


1. Самые простые платежи:
- [Оплата картой](src/examples/authorize/CardAuthorizeOrderExample.ts)
- [Оплата картой на странице мерчанта](src/examples/authorize/CardAuthorizeOrderMerchantPageExample.ts)
- [Оплата по СБП](src/examples/authorize/FasterPaymentsAuthorizeOrderExample.ts)
- [Оплата зарубежной картой](src/examples/authorize/SOMAuthorizeOrderExample.ts)
- [Оплата с помощью "подели"](src/examples/authorize/PodeliAuthorizeOrderExample.ts)
- [Оплата с выбором способа оплаты](src/examples/authorize/ChooseAuthorizeOrderExample.ts)


2. [Списание средств](src/examples/CaptureOrderExample.ts)
3. [Возврат средств](src/examples/RefundOrderExample.ts)
4. [Запрос информации о платеже](src/examples/GetOrderStatusExample.ts)

---
### Ссылки
- [НКО «Твои платежи»](https://YPMN.ru/)
- [Докуметация API](https://ypmn.ru/ru/documentation/)
- [Тестовые банковские карты](https://ypmn.ru/ru/documentation/#tag/testing)
- [Задать вопрос или сообщить о проблеме](https://github.com/yourpayments/go-api-client/issues/new)
