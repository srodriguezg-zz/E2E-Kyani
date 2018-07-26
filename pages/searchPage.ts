import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public serachButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("#lst-ib");
        this.serachButton = $("input[value='Google Search']");
        this.logo = $("div#logocont");
    }
}