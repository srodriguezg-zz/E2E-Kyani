import { browser, element, by } from 'protractor';


//PAGE
var FunnelPage = function() {

//OBJECTS

var nameInput = element(by.id('contactName'));
var phoneInput = element(by.id('contactPhone'));
var continueClick =  element(by.className('button'));
var connectionName = element(by.className('connection'));
var funnelTitle = element(by.className('title'));
var funnelTitleDescription =  element(by.xpath('.//div[@class= "homeHeader"]/span')); 
var acceptButton = element(by.className('acceptButton'));
var play = element(by.className('video'));
var stepTitle = element(by.className('stepTitle'));
var stepDescription = element(by.className('stepDescription'));




//ACTIONS
this.get =   async function() {
    await browser.get('https://ericmyrup.dev.kyanipro.com/en-us/enuschs');
    await browser.sleep(10000);
  };

this.setName =    function(name) {
   nameInput.sendKeys(name);
};

this.setPhone =  async function(phone) {
  await phoneInput.sendKeys(phone);
};

this.sendInfo =  async function() {
  await continueClick.click();
  await browser.sleep(5000);
};

this.acceptCookie =   function() {
   acceptButton.click();
};

this.getconnectionName =  async function() {
    
  await connectionName.getText().then(function(text) {
    console.log('*********************************************  CONECTION NAME ********************************');
    console.log('log de getconnectionname                          ' +text);
    });
    return connectionName.getText();
};


this.getFunnelTitle = async function() {
    
    await funnelTitle.getText().then(function(text) {
    console.log('*****************************  FUNNEL TITLE ********************************************************');
    console.log('FunnelTitle Log:         ' + text);
    //return text;
  });
  return funnelTitle.getText();
};


this.getFunnelDescription = function() {
  funnelTitleDescription.getText().then(function(text) {
    console.log('*****************************  FUNNEL DESCRIPTION ********************************************************');
    console.log('FunnelTitle Log:         ' + text);
    //return text;
  });
  return funnelTitleDescription.getText();
};

this.getStepTitle = function() {
  /*stepTitle.getText().then(function(text) {
    console.log('*****************************  FUNNEL DESCRIPTION ********************************************************');
    console.log('FunnelTitle Log:         ' + text);
    //return text;
  });*/
  return stepTitle.getText();
};

this.getStepDescription = function() {
  /*funnelTitleDescription.getText().then(function(text) {
    console.log('*****************************  FUNNEL DESCRIPTION ********************************************************');
    console.log('FunnelTitle Log:         ' + text);
    //return text;
  });*/
  return stepDescription.getText();
};

this.playFunnel = function() {
  play.click
};

};

module.exports = new FunnelPage();