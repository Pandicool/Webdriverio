import { Given, When, Then, } from '@wdio/cucumber-framework';
import pageObject from '../pageobjects/form.page'

Given(/^visit the website \"([^\"]*)\"$/, async (url) => {
    await browser.url(url);
    await browser.maximizeWindow();
});

When(/^I entered name (.+)$/, async (name) => {
    await pageObject.enterUsername.addValue(name);
});

Then(/^enter email (.+)$/, async (email) => {
    await pageObject.enterEmail.addValue(email);
});

Then(/^validate the page header (.+)$/, async (headerText) => {
    const uIheaderText = await pageObject.getUiHeaderText.getText();
    expect(uIheaderText).toEqual(headerText);
});

Then(/^validate the success message \"([^\"]*)\"$/, async (expectedText) => {
    const successText = await pageObject.getALertText.getText();
    console.log("successText : ",successText)
    expect(successText).toEqual(expectedText);
});

Then(/^enter password (.+)$/, async (password) => {
    await pageObject.enterPassword.addValue(password)
});

Then(/^select checkbox (.+)$/, async (checkbox) => {
    if(checkbox)
        await pageObject.clickCheckBox.click()
});

Then(/^select Gender (.+)$/, async (gender) => {
    await (await pageObject.selectGender).selectByVisibleText(gender)
});

Then(/^select employee Radio$/, async () =>{
    await pageObject.clickRadioButton.click()
})

Then(/^select Date of Birth (.+)$/, async (dob) => {
    await pageObject.enterDOB.addValue(dob)
});

Then(/^click submit form$/, async () => {
    await pageObject.clickSubmit.click()
});