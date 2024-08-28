# «Твои платежи» - интеграция на TypeScript
![](https://repository-images.githubusercontent.com/638835276/2067d028-b541-4355-b069-3c12c8a28042)
---
### Простая установка

#### Установите пакет `ts-ypmn-client`
```shell
npm install ts-ypmn-client
```
---
### Примеры кода


#### 1. Самые простые платежи:
1. [Оплата картой](lib/examples/authorize/CardAuthorizeOrderExample.ts)
2. [Оплата картой на странице мерчанта](lib/examples/authorize/CardAuthorizeOrderMerchantPageExample.ts)
3. [Оплата по СБП](lib/examples/authorize/FasterPaymentsAuthorizeOrderExample.ts)
4. [Оплата зарубежной картой](lib/examples/authorize/SOMAuthorizeOrderExample.ts)
5. [Оплата с помощью "подели"](lib/examples/authorize/PodeliAuthorizeOrderExample.ts)
6. [Оплата с выбором способа оплаты](lib/examples/authorize/ChooseAuthorizeOrderExample.ts)
7. [Т-пэй](lib/examples/authorize/TPAYAuthorizeOrderExample.ts)


#### 2. [Списание средств](lib/examples/CaptureOrderExample.ts)
#### 3. [Возврат средств](lib/examples/RefundOrderExample.ts)
#### 4. [Запрос информации о платеже](lib/examples/GetOrderStatusExample.ts)

---
### Ссылки
- [НКО «Твои платежи»](https://YPMN.ru/)
- [Докуметация API](https://ypmn.ru/ru/documentation/)
- [Тестовые банковские карты](https://ypmn.ru/ru/documentation/#tag/testing)
- [Задать вопрос или сообщить о проблеме](https://github.com/yourpayments/go-api-client/issues/new)
