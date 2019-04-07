import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    
    //selleks, et kasutada await'i
    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.lhv.ee/et",

     Capabilities: [
{
  browserName: 'firefox',
  firefoxOptions: {
    args: ['--headless']
  },
  'moz:firefoxOptions': {
    args: [ '--headless' ]
  }
}
        ],
        
        
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    allScriptsTimeout: 300000,

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(6000);
        browser.waitForAngularEnabled(false); //will not observe the ControlFlow for new promises again. Ei oota Angulari
        Reporter.createDirectory(jsonReports);
        
      //beforeEach( async () => {
      //await browser.refresh();
   // }); 
    },
    
    

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
        strict: true,
        keepAlive: true,
        tags: "@TriinuM",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
