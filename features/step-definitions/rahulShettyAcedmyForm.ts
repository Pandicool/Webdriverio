import formFill from '../pageobjects/formPagePOM'

const { Given, When, Then } = require('@wdio/cucumber-framework')

Given(/^visit the website POM \"([^\"]*)\"$/, async (url) => {
    await browser.url(url);
    await browser.maximizeWindow();
});

When(/^enter name (.+) and enter email (.+) and enter password (.+)$/, async (name, email, password) => {
    await formFill.enterCredentials(name,email,password)
});

Then(/^validate page header text (.+)$/, async (header) => {
    await formFill.validateHeader(header);
});

Then(/^validate the success message text \"([^\"]*)\"$/, async (success) => {
    await formFill.validateSuccessMessage(success)
});

Then(/^please select checkbox (.+) and select Gender (.+) and select employee Radio and select Date of Birth (.+)$/, async (checkbox, gender, dob) => {
    await formFill.fillFormDetails(checkbox,gender,dob)
});

Then(/^enter submit form$/, async () => {
    await formFill.submitForm();
});