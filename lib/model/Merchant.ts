/*
 * Модель мерчанта
 */

export class Merchant {

    /*
     * Конструктор мерчанта
     * @params code - ID мерчанта
     * @params secret - Секретный ключ мерчанта
     */
    constructor(code: string = "", secret: string = "") {
        this._code = code;
        this._secret = secret;
    }

    /*
     * Геттер ID мерчанта
     */
    get code(): string {
        return this._code;
    }

    /*
     * Геттер секретного ключа мерчанта
     */
    get secret(): string {
        return this._secret;
    }

    private readonly _code: string;
    private readonly _secret: string;
}