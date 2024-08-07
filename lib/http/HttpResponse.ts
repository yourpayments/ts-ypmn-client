
/*
 * Модель ответа сервера
 */

export class HttpResponse {

    /*
     * Конструктор модели, собирается в HttpRequest
     * @params response - JSON строка ответа
     * @params success - результат запроса
     */
    constructor(response: object, success: boolean = false) {
        this._response = response;
        this._success = success;
    }

    /*
     * Геттер ответа сервера
     */
    get response(): object{
        return this._response;
    }

    /*
     * Геттер результата запроса
     */
    get success(): boolean{
        return this._success;
    }

    private readonly _response: object;
    private readonly _success: boolean;
}