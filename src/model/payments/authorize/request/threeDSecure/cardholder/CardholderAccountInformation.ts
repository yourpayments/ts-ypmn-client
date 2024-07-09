import {JsonObject, JsonProperty} from "json2typescript";
import {CardholderAccountAddress} from "./CardholderAccountAddress";

/*
 * Модель информации об аккаунте владельца карты
 */
@JsonObject("CardholderAccountInformation")
export class CardholderAccountInformation {

    set fraudActivity(value: string) {
        this._fraudActivity = value;
    }

    set createDate(value: string) {
        this._createDate = value;
    }

    set pastOrdersYear(value: number) {
        this._pastOrdersYear = value;
    }

    set pastOrdersDay(value: number) {
        this._pastOrdersDay = value;
    }

    set purchasesLastSixMonths(value: number) {
        this._purchasesLastSixMonths = value;
    }

    set changeDate(value: string) {
        this._changeDate = value;
    }

    set changeIndicator(value: string) {
        this._changeIndicator = value;
    }

    set ageIndicator(value: string) {
        this._ageIndicator = value;
    }

    set passwordChangedDate(value: string) {
        this._passwordChangedDate = value;
    }

    set nameToRecipientMatch(value: string) {
        this._nameToRecipientMatch = value;
    }

    set addCardAttemptsDay(value: number) {
        this._addCardAttemptsDay = value;
    }

    set authMethod(value: string) {
        this._authMethod = value;
    }

    set authDateTime(value: string) {
        this._authDateTime = value;
    }

    set requestorAuthenticationData(value: string) {
        this._requestorAuthenticationData = value;
    }

    set additionalDetails(value: string) {
        this._additionalDetails = value;
    }

    set cardAddedIndicator(value: string) {
        this._cardAddedIndicator = value;
    }

    set cardAddedDate(value: string) {
        this._cardAddedDate = value;
    }

    set address(value: CardholderAccountAddress) {
        this._address = value;
    }

    @JsonProperty("fraudActivity", String) private _fraudActivity: string;

    @JsonProperty("createDay", String) private _createDate: string;

    @JsonProperty("pastOrdersYear", Number) private _pastOrdersYear: number;

    @JsonProperty("pastOrdersDay", Number) private _pastOrdersDay: number;

    @JsonProperty("purchasesLastSixMonths", Number) private _purchasesLastSixMonths: number;

    @JsonProperty("changeDate", String) private _changeDate: string;

    @JsonProperty("changeIndicator", String) private _changeIndicator: string;

    @JsonProperty("ageIndicator", String) private _ageIndicator: string;

    @JsonProperty("passwordChangedDate", String) private _passwordChangedDate: string;

    @JsonProperty("nameToRecipientMatch", String) private _nameToRecipientMatch: string;

    @JsonProperty("addCardAttemptsDay", Number) private _addCardAttemptsDay: number;

    @JsonProperty("authMethod", String) private _authMethod: string;

    @JsonProperty("authDateTime", String) private _authDateTime: string;

    @JsonProperty("requestorAuthenticationData", String) private _requestorAuthenticationData: string;

    @JsonProperty("additionalDetails", String) private _additionalDetails: string;

    @JsonProperty("cardAddedIndicator", String) private _cardAddedIndicator: string;

    @JsonProperty("cardAddedDate", String) private _cardAddedDate: string;

    @JsonProperty("address", CardholderAccountInformation) private _address: CardholderAccountAddress;

    constructor(
        fraudActivity: string = null,
        createDate: string = null,
        pastOrdersYear: number = null,
        pastOrdersDay: number = null,
        purchasesLastSixMonths: number = null,
        changeDate: string = null,
        changeIndicator: string = null,
        ageIndicator: string = null,
        passwordChangedDate: string = null,
        nameToRecipientMatch: string = null,
        addCardAttemptsDay: number = null,
        authMethod: string = null,
        authDateTime: string = null,
        requestorAuthenticationData: string = null,
        additionalDetails: string = null,
        cardAddedIndicator: string = null,
        cardAddedDate: string = null,
        address: CardholderAccountAddress = null) {
        this._fraudActivity = fraudActivity;
        this._createDate = createDate;
        this._pastOrdersYear = pastOrdersYear;
        this._pastOrdersDay = pastOrdersDay;
        this._purchasesLastSixMonths = purchasesLastSixMonths;
        this._changeDate = changeDate;
        this._changeIndicator = changeIndicator;
        this._ageIndicator = ageIndicator;
        this._passwordChangedDate = passwordChangedDate;
        this._nameToRecipientMatch = nameToRecipientMatch;
        this._addCardAttemptsDay = addCardAttemptsDay;
        this._authMethod = authMethod;
        this._authDateTime = authDateTime;
        this._requestorAuthenticationData = requestorAuthenticationData;
        this._additionalDetails = additionalDetails;
        this._cardAddedIndicator = cardAddedIndicator;
        this._cardAddedDate = cardAddedDate;
        this._address = address;
    }
}