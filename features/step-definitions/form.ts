import { Given, When, Then, } from '@wdio/cucumber-framework';

Given(/^visit the website \"([^\"]*)\"$/, async (url) => {
    await browser.url(url);
    await browser.maximizeWindow();
});

When(/^I entered name (.+)$/, async (name) => {
    await $(`//form/div[1]/input`).addValue(name);
});

Then(/^enter email (.+)$/, async (email) => {
    await $(`//form/div[2]/input`).addValue(email);
});

Then(/^validate the page header (.+)$/, async (headerText) => {
    const uIheaderText = await $('[class="navbar-brand"]').getText();
    expect(uIheaderText).toEqual(headerText);
});

Then(/^validate the success message \"([^\"]*)\"$/, async (expectedText) => {
    const successText = await $('//div[@class="alert alert-success alert-dismissible"]/strong').getText();
    console.log("successText : ",successText)
    expect(successText).toEqual(expectedText);
});

Then(/^enter password (.+)$/, async (password) => {
    await $(`//form/div[3]/input`).addValue(password);
});

Then(/^select checkbox (.+)$/, async (checkbox) => {
    if(checkbox)
        await $(`//form/div[4]/input`).click();
});

Then(/^select Gender (.+)$/, async (gender) => {
    await (await $('#exampleFormControlSelect1')).selectByVisibleText(gender);
});

Then(/^select employee Radio$/, async () =>{
    await $('#inlineRadio2').click();
})

Then(/^select Date of Birth (.+)$/, async (dob) => {
    await $("[type='date']").addValue(dob);
});

Then(/^click submit form$/, async () => {
    await $('.btn.btn-success').click();
});