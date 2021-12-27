require("chromedriver");
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

let {phone, password} = require("./credential.json");

let tabToOpen = tab.get("http://sattwik.banil.com.np/login");
tabToOpen
    .then(function()
    {
        let findTimeOut = 
            tab.manage().setTimeouts({
                implicit: 10000,
            });
        return findTimeOut;
    })
    .then(function()
    {
        let promiseFindPhoneBox =
            tab.findElement(swd.By.xpath("//input[@class='form-control' and @type='text']"));
        return promiseFindPhoneBox;
    })
    .then(function(PhoneBox)
    {
        let promiseFillPhoneBox = 
            PhoneBox.sendKeys(phone);
        return promiseFillPhoneBox;
    })
    .then(function()
    {
        let promiseFindPasswordBox = 
            tab.findElement(swd.By.xpath("//input[@class='form-control' and @type='password']"));
        return promiseFindPasswordBox;
    })
    .then(function(PasswordBox)
    {
        let promiseFillPasswordBox = 
            PasswordBox.sendKeys(password);
        return promiseFillPasswordBox;
    })
    
    .then(function()
    {
        console.log(
            "Phone and Password Entered Successfully" +
            "for login automation of Sattwik"
        );
        let promiseFindSignInButton = 
            tab.findElement(swd.By.xpath("//button[contains(text(),'Login')]"));
        return promiseFindSignInButton;
    })
    .then(function(SignInButton)
    {
        let promiseClickSignInButton = 
            SignInButton.click();
        return promiseClickSignInButton;
    })
    .then(function()
    {
        console.log(`Successfully signed in as ${phone} in Sattwik!`);
    })
    .catch(function(err)
    {
        console.log("Error", err, "occurred!"); 
    });
