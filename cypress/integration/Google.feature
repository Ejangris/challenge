Feature: The search engine

    I want to open a search engine page

    Scenario: Opening a search engine page
        Given I open Google page
        Then I see "Google" in the title
        And I see apps button on header

    Scenario: I search the term car in google
        Given I open Google page
        And I search "car"
        Then I see "car" in the title
