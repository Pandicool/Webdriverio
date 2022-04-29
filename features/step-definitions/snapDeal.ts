import { Given, Then } from '@wdio/cucumber-framework'

Given(/^visit the website (.+)$/, async (url) => {
    await browser.url(url);
    await browser.maximizeWindow();
});

Then(/^get the text of (.+)$/, async  (header) => {
    const uIText = await $('.trendProds.widgetLabelHead').getText();
    expect(header).toEqual(uIText);
});