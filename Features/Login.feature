Feature: Login

 Scenario: Succsessful Login with valid Credentials
    Given user launch Chromebrowser
    When user opens url as "https://ui.cogmento.com"
    And user enter username as "nandasele69@gmail.com" and password as "Test@1234"
    And user  click on Login 
    Then page title should be ""
    When user click on Logout link
    Then page title should be ""
    And close browser
