Feature: This feature ensures that the login functionality to the quales app works appropriately

As a user, i want to visit the login page successfully so that i can perform some courses

Scenario: Verify that a user can login to the app
     Given A user is on the quales landing page
     When The user types in their correct username and password
     Then The user should be logged into the app

Scenario: Verify that a user cannot login to the App with wrong credentials
     Given A user is on the quales landing page
     When The user types an incorrect username and password
     Then An error login message should be displayed