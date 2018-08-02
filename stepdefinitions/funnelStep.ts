import { browser } from "protractor";
import { FunnelPageObject } from "../pages/funnelPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const funnel: FunnelPageObject = new FunnelPageObject();

Given("I am in the funnel", async () => {

});

When("I fill the information of the register form", async () => {

});

When("I click on save button", async () => {

});

Then("I can to see my name on the title", async () => {

});