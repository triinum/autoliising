import { browser, protractor, element, by, $ } from "protractor";
import { leasingPageObject } from "../pages/leasingPage";

const { Given, When, Then } = require("cucumber");
const {defineSupportCode} = require('cucumber');

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(50 * 1000);
});


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const leasing: leasingPageObject = new leasingPageObject();



    Given('You are on leasing main page', async () => {
    
                 //lülitame Angulari välja
                 browser.waitForAngularEnabled(false);
                 

                 //Avalehelt liisingu lehele
                 await element.all(by.css('.dropdown')).get(3).click();


                 await element(by.linkText('Liising')).click();

                 }); 

          
          
     When('You move on to leasing application', async () => {
        
             
                 await element(by.linkText('Taotle')).click();


                 browser.getCurrentUrl();
                 expect(browser.getCurrentUrl()).to.eventually.equal("https://www.lhv.ee/et/liising/taotlus");


                 await expect(browser.getTitle()).to.eventually.contains("Liisingutaotlus");
         
                 }); 
         
        
        
     Then('You start filling in the details', async () => {
        
 
                //Lähme iframe'i
                let document = await browser.executeScript('return document.body.innerHTML'); 
         

                const iframe = await $('iframe').getWebElement();
                await browser.switchTo().frame(iframe);

                document = await browser.executeScript('return document.body.innerHTML'); 
   

                //juriidilise isikuna
                await expect(leasing.legalPerson.isPresent()).to.eventually.equal(true);
                await leasing.legalPerson.click();

                }); 

        
        
     When('You establish price with VAT as {string}',  async (string) => {
        
        
                //sõiduki hind
                await leasing.Price.sendKeys(string); 

                //sisaldab käibemaksu
                await leasing.includesVAT.click();  

                 }); 


        
     Then('You fill in conditions concerning VAT',  async () => {
       
       
                //Käibemaksu tasumine - ajatamine kolmele kuule
                browser.executeScript("arguments[0].scrollIntoView();", leasing.paymentDay.getWebElement());
                await leasing.paymentDay.click();


                browser.executeScript("arguments[0].scrollIntoView();", leasing.vatScheduling.getWebElement());
                await leasing.vatScheduling.click();

                }); 
        
        
        
     When('You fill in initial percentage as {string} and duration in years',  async (string) => {
     
     
                //sissemakse 
                await leasing.initialPercentage.sendKeys(string);
                browser.sleep(60000);

                //await expect(leasing.initialCalculation.getText()).to.eventually.equal('1000.00');


                //browser.actions().mouseMove(leasing.allOptions).perform();  
                browser.executeScript("arguments[0].scrollIntoView();", leasing.allOptions.getWebElement());

                leasing.allOptions.click();     
        
                }); 
        
 
        
     Then('You choose duration for five years',  async () => {
       

                //Pikkus aastates
                leasing.fiveYears.click();
        
                }); 
        
        
        
     When('You choose payment date and set reminder percentage as {string}',   async (string) => {


                //Jääkväärtus
                //browser.actions().mouseMove(leasing.amountinEuros).perform();
                browser.executeScript("arguments[0].scrollIntoView();", leasing.reminderPercentage.getWebElement());
                leasing.reminderPercentage.sendKeys(string);


                //Makse tähtpäev
                browser.actions().mouseMove(leasing.paymentDay).perform();
                leasing.paymentDay.click();

                }); 

        
        
     Then('You choose payment day of the 15th',  async () => {
     
                //dropdowni väärtus
                await element(by.id('payment_day-15')).click();

                }); 
        
        
        
     When('You click to continue',  {timeout: 2 * 50000},  async () => {

                 
                 browser.actions().mouseMove(leasing.continueButton).perform();
                 await leasing.continueButton.click();

                 browser.getCurrentUrl();
                 expect(browser.getCurrentUrl()).to.eventually.equal("https://www.lhv.ee/et/liising/taotlus");
                 
                 browser.executeScript("arguments[0].scrollIntoView();", leasing.backButton.getWebElement());
                 await leasing.backButton.click();
                 
                 await expect(leasing.textLiisingutaotlus.isPresent()).to.eventually.equal(true);
                 
              
  
                 }); 
        
        
        
      Then('You expect the error message to become visible',  async () => {
     
                 await expect(leasing.errorMessage.isPresent()).to.eventually.equal(true);
                          
                 });
        
   
      
     When('You click the back button',  async () => {
     
     
                browser.executeScript("arguments[0].scrollIntoView();", leasing.backButton.getWebElement());
                await leasing.backButton.click();
                
                //kontroll, et vorm oleks nähtav ka tagasi nuppu vajutades

                });




 


    