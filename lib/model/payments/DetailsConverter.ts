import {
    JsonCustomConvert,
    JsonConverter,
    JsonConvert,
    OperationMode,
    ValueCheckingMode,
    PropertyConvertingMode
} from "json2typescript";
import {Details} from "./Details";

@JsonConverter
export class DetailsConverter implements JsonCustomConvert<Details> {
    serialize(data: Details): any {
        let jsonConvert = new JsonConvert();
        let json: any = {};

        jsonConvert.operationMode = OperationMode.ENABLE;
        jsonConvert.ignorePrimitiveChecks = true;
        jsonConvert.mapUndefinedToNull = true;
        jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
        jsonConvert.propertyConvertingMode = PropertyConvertingMode.IGNORE_NULLABLE;

        try {
            json = jsonConvert.serializeObject(data, Details);
        }catch (e) {
            console.error(e);
        }

        if (json.hasOwnProperty('customFields')) {
            for (const key in json.customFields) {
                json[key] = (json.customFields as any)[key];
            }

            delete json.customFields;
        }

        return json;
    }

    deserialize(data: any): Details {
        const details = new Details(
            data.receipts,
            data.paymentPurpose,
            data.receivers
        );

        for (const key in data) {
            if (key !== 'receipts' && key !== 'paymentPurpose' && key !== 'receivers') {
                details.addCustomField(key, data[key]);
            }
        }

        return details;
    }
}