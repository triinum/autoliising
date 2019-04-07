import { $, element, by } from "protractor";

export class leasingPageObject {
    
    public Price: any;
    public menuElement: any;
    public initialPercentage: any;
    public leasingApplication: any;
    public amountinEuros: any;
    public reminderPercentage: any;
    public includesVAT: any;
    public durationYears: any;
    public durationYearsValue: any;
    public legalPerson: any;
    public continueButton: any;
    public paymentDay: any;
    public vatScheduling: any;
    public allOptions: any;
    public firstOption: any;
    public initialCalculation: any;
    public backButton: any;
    public fiveYears: any;
    public errorMessage: any;
    public textLiisingutaotlus: any;
    
    
    constructor() {

    this.Price = element(by.xpath('//*[@id="origin-price"]'));
    this.menuElement = element(by.xpath('//*[@id="content"]/div[3]'));
    this.initialPercentage = element(by.xpath('//*[@id="initial_percentage"]'));
    this.leasingApplication = element(by.xpath('//*[@id="leasing-application-form"]'));
    this.amountinEuros = element(by.xpath('//*[@id="initial"]'));
    this.reminderPercentage = element(by.xpath('//*[@id="reminder_percentage"]'));
    this.includesVAT = element(by.xpath('//*[@id="vat_included"]'));
    this.durationYears = element(by.id('duration_years'));
    this.durationYearsValue = element(by.cssContainingText('option', '5'));
    //this.durationYearsValue = element(by.xpath("//option[text()='5']"));
    this.legalPerson = element.all(by.css ("input[type='radio']")).get(1);
    this.continueButton = element(by.buttonText('Edasi'));
    this.backButton = element(by.xpath('//*[@id="form1"]/div[2]/span[1]/a'));
    this.paymentDay = element(by.id('payment_day'));
    this.vatScheduling = element(by.id('vat_scheduling-DELAY3M'));
    this.allOptions = element(by.id('duration_years'));
    this.initialCalculation =  element(by.xpath('//*[@id="initial"]'));
    this.fiveYears = element(by.xpath('//*[@id="duration_years-5"]'));
    this.errorMessage = element(by.xpath('//*[@id="msg-container"]/div'));
    this.textLiisingutaotlus = element(by.xpath('//*[@id="content"]/div[1]/div/div'));
    }
    
  
};
