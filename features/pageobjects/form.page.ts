import pages from './page';

class form extends pages {
    
    public get enterUsername() { 
       return $(`//form/div[1]/input`)
    }
    public get enterEmail(){
       return $(`//form/div[2]/input`)
    }
    public get getUiHeaderText(){
        return $('[class="navbar-brand"]')
    }
    public get getALertText(){
        return $('//div[@class="alert alert-success alert-dismissible"]/strong')
    }
    public get enterPassword(){
        return $(`//form/div[3]/input`)
    }
    public get clickCheckBox(){
        return $(`//form/div[4]/input`)
    }
    public get selectGender(){
        return $('#exampleFormControlSelect1')
    }
    public get clickRadioButton(){
        return $('#inlineRadio2')
    }
    public get enterDOB(){
        return $("[type='date']")
    }
    public get clickSubmit(){
        return $('.btn.btn-success')
    }
}
export default new form()