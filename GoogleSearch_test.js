Feature('GoogleSearch');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.google.com');
    I.see("Gmail");
});
