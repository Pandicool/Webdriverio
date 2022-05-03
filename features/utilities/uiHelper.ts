class uiHelper{

    async findElement({selector}){
        const element = await $(selector);
        return element;
    }

    async findElements({selector}){
        const element = await $$(selector);
        return element;
    }

    async clickElement({selector}){
        try {
            const elementToClick = await $(selector);
            await elementToClick.waitForDisplayed();
            await elementToClick.click();
        } catch (error) {
            throw new Error(error)
        }
    }

    async enterValue({selector,value}){
        try {
            const textBoxSelector = await $(selector);
            await textBoxSelector.waitForDisplayed();
            await textBoxSelector.addValue(value);
        } catch (error) {
            throw new Error(error)
        }
    }

    async getText({selector}){
        let elem =  await $(selector);
        const textValue = await elem.getText();
        return textValue;
    }

    async clearValue({selector}){
        let elem =  await $(selector);
        const textValue = await elem.getValue();
        const backspace = new Array(textValue.length).fill('Backspace');
        await elem.addValue(backspace);
    }

    async waitUntilNotDisplayed({selector}){
        await browser.waitUntil(selector,{timeout: 5000})
    }

    async waitForElementDisplay({selector}){
        try {
            const elem = await $(selector);
            elem.waitForDisplayed();
        } catch (error) {
            throw new Error(error)
        }
    }

    async waitForElementExist({selector}){
        const elem = await $(selector);
        await elem.waitForExist();
    }

    async scrollToElement({selector}){
        try {
            const elem = await $(selector);
            await elem.waitForExist();
            await elem.scrollIntoView();
        } catch (error) {
            throw new Error(error)
        }
    }

    async SelectByAttribute({selector, index}){
        try {
            const elementToSelect = await $(selector);
            await elementToSelect.waitForExist();
            await elementToSelect.selectByIndex(index);
        } catch (error) {
            throw new Error(error)
        }
    }

    async SelectByValue({selector, value}){
        try {
            const elementToSelect = await $(selector);
            await elementToSelect.waitForExist();
            await elementToSelect.selectByVisibleText(value);
        } catch (error) {
            throw new Error(error)
        }
    }

    async isElementDisplayed({selector}){
        let isDisplayed;
        try {
            const element = await $(selector);
            isDisplayed = await element.isDisplayed()
        } catch (error) {
            throw new Error(error)
        }
    }

    async isExisting({selector}){
        const isExisting = await (await $(selector)).isExisting();
        return isExisting;
    }

    async isClickable({selector}){
        const isClickable = await (await $(selector)).isClickable();
        return isClickable;
    }

    async pauseExecution({timeout}){
        await browser.pause(timeout)
    }

    async switchToIframe({selector}){
        await browser.switchToFrame(selector);
    }

    async switchToParentIframe(){
        await browser.switchToParentFrame();
    }

    async refreshPage(){
        await browser.refresh();
    }

    async switchWindow(){
        var windows = await browser.getWindowHandles();
        console.log(windows); 
    }

    async windowSwitch({switchValue}){
        let beforeTitle = await browser.getTitle();
        console.log("beforeTitle : ",beforeTitle);
        await browser.switchToWindow(switchValue);
        let afterTitle = await browser.getTitle();
        console.log("afterTitle : ",afterTitle);
    }

    async pressBackButton({num}){
        for(let i =0 ; i< num ;i++){
            await browser.back();
        }
    }

}

export default new uiHelper();