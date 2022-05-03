Feature: First test in cumcumber

        Scenario: visit the website and get the header

        Given visit the websites <url>
        Then get the text of <header>

        Examples:
            | url | header |
            | https://www.snapdeal.com | TRENDING PRODUCTS |