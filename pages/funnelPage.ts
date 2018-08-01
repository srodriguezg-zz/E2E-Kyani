import { $, ElementFinder } from "protractor";

export class FunnelPageObject {
    private txtName: ElementFinder;
    private txtEmail: ElementFinder;
    private txtPhone: ElementFinder;
    private btnGetInfo: ElementFinder;
    private lblTitle: ElementFinder;

    constructor() {
        this.txtName = $("#contactName");
        this.txtEmail = $("#contactEmail");
        this.txtPhone = $("#contactPhone");
        this.btnGetInfo = $(".button");
        this.lblTitle = $(".connection");
    }
    
}