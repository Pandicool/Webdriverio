Feature: proto commerce signup website

    Scenario: signup form fillup

    Given visit the website "https://rahulshettyacademy.com/angularpractice/"
    Then validate the page header <header>
    When I entered name <name>
    And enter email <email>
    And enter password <password>
    And select checkbox <checkbox>
    And select Gender <Gender>
    And select employee Radio
    And select Date of Birth <DOB>
    And click submit form
    Then validate the success message "Success!"

           

    Examples:
            | header | name | email | password | checkbox | Gender | DOB |
            | ProtoCommerce | Pandiya | pandicool333@gmail.com | cool@333 | True | Male | 27031997 |