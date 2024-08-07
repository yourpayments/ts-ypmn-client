import {JsonConvert, OperationMode, PropertyConvertingMode, ValueCheckingMode} from "json2typescript";


/*
 * Класс ответа API.
 */
export class ApiResponse {

    /*
     * Геттер успешности ответа
     */
    get success(): boolean {
        return this._success;
    }

    /*
     * Конструктор ответа
     * @params response - JSON бъект ответа API
     */
    constructor(response: object = {}, success: boolean = true) {
        this._response = response;
        this._success = success;
    }

    /*
     * Возвращает готовую модель ответа
     * @params modelType - конструктор класса-модели
     * @template ModelType - тип класса-модели
     */
    public deserialize<ModelType extends Object>(modelType: new() => ModelType): ModelType {

        let jsonConvert = new JsonConvert();
        let model: ModelType | undefined;

        jsonConvert.operationMode = OperationMode.ENABLE;
        jsonConvert.ignorePrimitiveChecks = true;
        jsonConvert.mapUndefinedToNull = true;
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        jsonConvert.propertyConvertingMode = PropertyConvertingMode.IGNORE_NULLABLE;

        try {
            model = jsonConvert.deserializeObject(this._response, modelType);
        } catch (e) {
            console.error(e);
        }

        if (model === undefined) {
            throw new Error("Api request failed!");
        }

        return model;
    }

    private readonly _response: object;
    private readonly _success: boolean;
}