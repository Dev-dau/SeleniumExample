// const {Builder, By, Key, util} = require("selenium-webdriver");
// async function example() {
//     let driver = await new Builder().forBrowser("firefox").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
// }
// example();

// Include firefox - driver
require("chromedriver");
//Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

let {name, email } = require("./credential.json");

let tabToOpen = tab.get("https://twoacesolutions.com.np/#portfolio");
tabToOpen
    .then(function()
    {
        let findTimeOutP = 
            tab.manage().setTimeouts({
                implicit: 10000,
            });
        return findTimeOutP;
    })
    // .then(function()
    // {
    //     let promiseSignInLink =
    //         tab.findElement(swd.By.className("MuiTypography-root MuiTypography-body2 MuiTypography-noWrap"));
    //         return promiseSignInLink;
    // })
    // .then(function(SignInLink)
    // {
    //     let promiseSignInLinkClick = SignInLink.click();
    //     return promiseSignInLinkClick;
             
    // })
    .then(function () {
        let promiseUsernameBox =
            tab.findElement(swd.By.name("fname"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
        let promiseFillUsername =
            usernameBox.sendKeys(name);
        return promiseFillUsername;
    })
    .then(function()
    {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for Facebook"
        );
        let promiseEmailBox = 
            tab.findElement(swd.By.name("email"));
        return promiseEmailBox;
    })
    .then(function(EmailBox)
    {
        let promiseFillEmailBox = 
            EmailBox.sendKeys(email);
        return promiseFillEmailBox;
    })
    .then(function()
    {
        Debug.console(
            "Email entered successfully in" +
            "'login demonstration' for TAS"
        );
        let promiseSignUpForFreeBtn = 
            tab.findElement(swd.By.className("custom-btn"));
        return promiseSignUpForFreeBtn;
    })
    .then(function(signUpForFreeBtn)
    {
        let promiseClickSignUpForFreeBtn = signUpForFreeBtn.click();
        return promiseClickSignUpForFreeBtn;
    })
    .then(function()
    {
        console.log("Successfully signed in as Anil Devkota!");
    })
    .catch(function(err)
    {
        console.log("Error", err, "occurred!"); 
    });


