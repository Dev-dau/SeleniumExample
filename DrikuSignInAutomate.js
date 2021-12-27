require("chromedriver");
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

let {phone, password} = require("./credential.json");

let tabToOpen = tab.get("https://driku.jp/");
tabToOpen
    .then(function()
    {
        let findTimeOutP = 
            tab.manage().setTimeouts({
                implicit: 10000,
            });
        return findTimeOutP;
    })
    .then(function()
    {
        let promiseSignInLink =
            tab.findElement(swd.By.xpath("//p[text()='Sign in']"));
        return promiseSignInLink;
    })
    .then(function(signInLink)
    {
        let promiseClickSignInLink =
            signInLink.click();
        return promiseClickSignInLink;
    })
    .then(function()
    {
        console.log(
            "Sign In box opened"
            );
        let promisePhoneBox =
            tab.findElement(swd.By.xpath("//input[@id='mobile_number']"));
        return promisePhoneBox;
    })
    .then(function(PhoneBox)
    {
        let promiseFillPhoneBox =
            PhoneBox.sendKeys(phone);
        return promiseFillPhoneBox;
    })
    .then(function()
    {
        let promisePasswordBox =
            tab.findElement(swd.By.xpath("//input[@id='password']"));
        return promisePasswordBox;
    })
    .then(function(passwordBox)
    {
        let promiseFillPasswordBox =
            passwordBox.sendKeys(password);
        return promiseFillPasswordBox;
    })
    .then(function()
    {
        console.log(
            "Phone and password entered successfully" +
            "for 'login automation of D.Riku Mart'."
        );
        let promiseFindSignInButton = 
            tab.findElement(swd.By.xpath("//span[text()='Sign In']"));
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
        let promiseFindProfile = 
            tab.findElement(swd.By.xpath("//p[text()='Profile']"));
        return promiseFindProfile;
    })
    .then(function()
    {
        // console.log(
        //     ```Profile link found 
        //     Test has been passed.```
        // );
        console.log(`Successfully signed in as ${phone} in D.Riku Mart!`);
    })
    .catch(function(err)
    {
        console.log("Error", err, "occurred!"); 
    });
