Feature: Proto commerce signup website POM

    Scenario: signup form fillup in raghul shetty academy
        
        Given visit the website POM "https://rahulshettyacademy.com/angularpractice"
        Then validate page header text <header>
        When enter name <name> and enter email <email> and enter password <password>
        Then please select checkbox <checkbox> and select Gender <Gender> and select employee Radio and select Date of Birth <DOB>
        And enter submit form
        Then validate the success message text "Success!"

        Examples:
            | header        | name    | email                  | password | checkbox | Gender | DOB      |
            | ProtoCommerce | Pandiya | pandicool333@gmail.com | cool@333 | True     | Male   | 27031997 |