import uiHelper from "../utilities/uiHelper"
const selectors  = {
    userNameInput : "//form/div[1]/input",
    emailInput : "//form/div[2]/input",
    uIHeaderText : "[class='navbar-brand']",
    alertMessage : "//div[@class='alert alert-success alert-dismissible']/strong",
    passwordInput : "//form/div[3]/input",
    checkBoxInput : "//form/div[4]/input",
    genderDropDown: "#exampleFormControlSelect1",
    radioBtn: "#inlineRadio2",
    dobInput : "[type='date']",
    submit : ".btn.btn-success"
}

class formFill {
        async enterCredentials(name, email, password){
            await uiHelper.enterValue({selector : selectors.userNameInput,value : name});
            await uiHelper.enterValue({selector:selectors.emailInput, value: email})
            await uiHelper.enterValue({selector:selectors.passwordInput, value: password})
        }
        async validateHeader(header) {
            const uIheaderText = await uiHelper.getText({selector: selectors.uIHeaderText})
            expect(uIheaderText).toEqual(header);
        }
        async validateSuccessMessage(successMessage) {
            const successText = await uiHelper.getText({selector:selectors.alertMessage});
            expect(successText).toEqual(successMessage);
        }
        async fillFormDetails(checkbox, gender, dob) {
            if(checkbox)
                await uiHelper.clickElement({selector:selectors.checkBoxInput});
            await uiHelper.SelectByValue({selector:selectors.genderDropDown,value: gender});
            await uiHelper.enterValue({selector:selectors.dobInput,value:dob})
        }
        async submitForm(){
            await uiHelper.clickElement({selector:selectors.submit})
        }
}

export default new formFill()