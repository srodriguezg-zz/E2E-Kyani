Feature: Funnels

@CucumberScenario
Scenario: Prospect Registration
Given I am in the funnel
When I fill the information of the register form
When I click on save button
Then I can to see my name on the title