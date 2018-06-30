$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/shubham.srivastava/Desktop/Selenium Workspace/OnlineRegistrationPortal/src/test/java/feature_files/Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Validate registration portal for DeltaX",
  "description": "",
  "id": "validate-registration-portal-for-deltax",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the successful registration when all the input data passed are valid",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-successful-registration-when-all-the-input-data-passed-are-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user selects Department as \"Engineering\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user should be successfully registered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9965074051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 714977231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 592290872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Engineering",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 332610461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 574382359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 577996308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 529856000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 814480410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 476558359,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 1516414359,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.validate_success_response()"
});
formatter.result({
  "duration": 345583590,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the response of the system when First Name is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-first-name-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user fills First name as \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects Department as \"Sales\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the error message should be displayed under \"First Name\" as \"Please enter your First Name\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9059301744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 190256821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 731874871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 238483692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 628496821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 525602461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 585028513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 779524103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 439147488,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 210496820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 45
    },
    {
      "val": "Please enter your First Name",
      "offset": 61
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 362956718,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the response of the system when First Name is less than 2 characters",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-first-name-is-less-than-2-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user fills First name as \"S\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the error message should be displayed under \"First Name\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 7855926564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 378106666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 61
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 422253538,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the response of the system when Last Name is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-last-name-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the user fills Last name as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user selects Department as \"Support\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message should be displayed under \"Last Name\" as \"Please enter your Last Name\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 8148898872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 804310975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 183450667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 304069334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 643486769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 541284923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 526345846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 795772307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 413487589,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 204995692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 45
    },
    {
      "val": "Please enter your Last Name",
      "offset": 60
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 420539487,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify the response of the system when Last Name is less than 2 characters",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-last-name-is-less-than-2-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the user fills Last name as \"S\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the error message should be displayed under \"Last Name\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 19663572513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 226576410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 60
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 676633025,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify the response of the system when Username is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-username-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user selects Department as \"Support\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user fills Username as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the error message should be displayed under \"User Name\" as \"Please enter your Username\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9978206769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 1162372513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 476865641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 283288615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 151167179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 558432410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 516355692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 805776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 431381334,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 195988513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User Name",
      "offset": 45
    },
    {
      "val": "Please enter your Username",
      "offset": 60
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 329376820,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify the response of the system when Username is less than 8 characters",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-username-is-less-than-8-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "the user fills Username as \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the error message should be displayed under \"User Name\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 8804001641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 471706666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User Name",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 60
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 524475488,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Verify the response of the system when Password is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-password-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user selects Department as \"Support\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user fills Password as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the error message should be displayed under \"Password\" as \"Please enter your Password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9695725949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 356345436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 363687384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 229206974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 407466256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 145326359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 401974564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 712093128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 317703795,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 5188991590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 45
    },
    {
      "val": "Please enter your Password",
      "offset": 59
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 2252228103,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Verify the response of the system when Password is less than 8 characters",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-password-is-less-than-8-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "the user fills Password as \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the error message should be displayed under \"Password\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9283776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 585490872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 59
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 459380512,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Verify the response of the system when Confirm Password is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-confirm-password-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user selects Department as \"Support\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user fills Confirm Password as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user fills Email as \"shubhamsri7@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the error message should be displayed under \"Confirm Password\" as \"Please confirm your Password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 10394491487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 589409231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 554920205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 269596307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 513238154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 547298051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 166188718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7@gmail.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 798852102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 425092923,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 193752205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password",
      "offset": 45
    },
    {
      "val": "Please confirm your Password",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 437647590,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Verify the response of the system when Confirm Password is less than 8 characters",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-confirm-password-is-less-than-8-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "the user fills Confirm Password as \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the error message should be displayed under \"Confirm Password\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 10181737025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 1063488410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 357782975,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Verify the response of the system when Password \u0026 Confirm Password is not entered same",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-password-\u0026-confirm-password-is-not-entered-same",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 107,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the user fills Confirm Password as \"passwordtest\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the error message should be displayed under \"Confirm Password\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 9159236102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 810934154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwordtest",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 569544205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 10109114667,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027form-group has-feedback has-error\u0027]//div[@class\u003d\u0027col-md-4 inputGroupContainer\u0027]//small[@data-bv-validator\u003d\u0027stringLength\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027BLRKEC200412L\u0027, ip: \u0027192.168.225.122\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\shubham.srivastava...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 89dbed6716e2441219ac9d3fb84baab9\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027form-group has-feedback has-error\u0027]//div[@class\u003d\u0027col-md-4 inputGroupContainer\u0027]//small[@data-bv-validator\u003d\u0027stringLength\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat code_bindings.RegistrationSteps.validate_message_for_error(RegistrationSteps.java:166)\r\n\tat ✽.Then the error message should be displayed under \"Confirm Password\" as \"This value is not valid\"(C:/Users/shubham.srivastava/Desktop/Selenium Workspace/OnlineRegistrationPortal/src/test/java/feature_files/Registration.feature:110)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 112,
  "name": "Verify the response of the system when Email is NULL",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-email-is-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 113,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "the user fills First name as \"Shubham\"",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "the user fills Last name as \"Srivastava\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user selects Department as \"Support\"",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the user fills Username as \"shubhamsri7\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "the user fills Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the user fills Confirm Password as \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the user fills Email as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the user fills Contact No as \"8105178070\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the error message should be displayed under \"Email\" as \"Please enter your Email Address\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 8816458667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_First_name_as(String)"
});
formatter.result({
  "duration": 724848410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srivastava",
      "offset": 29
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Last_name_as(String)"
});
formatter.result({
  "duration": 546356923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.the_user_selects_Department_as(String)"
});
formatter.result({
  "duration": 250818871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shubhamsri7",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Username_as(String)"
});
formatter.result({
  "duration": 570193641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Password_as(String)"
});
formatter.result({
  "duration": 494592820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 36
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 491174154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 126714666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8105178070",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 385776820,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.submit()"
});
formatter.result({
  "duration": 190821744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 45
    },
    {
      "val": "Please enter your Email Address",
      "offset": 56
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 433933538,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Verify the response of the system when Email is entered in invalid format",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-email-is-entered-in-invalid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 126,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "the user fills Email as \"123-456.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the error message should be displayed under \"Email\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 8563714051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-456.com",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Email_as(String)"
});
formatter.result({
  "duration": 597901949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 56
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 10038661744,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027form-group has-feedback has-error\u0027]//div[@class\u003d\u0027col-md-4 inputGroupContainer\u0027]//small[@data-bv-validator\u003d\u0027stringLength\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027BLRKEC200412L\u0027, ip: \u0027192.168.225.122\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\shubham.srivastava...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: b6721b96545a90fd3782e7de90af3625\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027form-group has-feedback has-error\u0027]//div[@class\u003d\u0027col-md-4 inputGroupContainer\u0027]//small[@data-bv-validator\u003d\u0027stringLength\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat code_bindings.RegistrationSteps.validate_message_for_error(RegistrationSteps.java:180)\r\n\tat ✽.Then the error message should be displayed under \"Email\" as \"This value is not valid\"(C:/Users/shubham.srivastava/Desktop/Selenium Workspace/OnlineRegistrationPortal/src/test/java/feature_files/Registration.feature:128)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 130,
  "name": "Verify the response of the system when Contact Number is entered in invalid format",
  "description": "",
  "id": "validate-registration-portal-for-deltax;verify-the-response-of-the-system-when-contact-number-is-entered-in-invalid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 131,
  "name": "the user navigates to \"http://adjiva.com/qa-test/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "the user fills Contact No as \"ABCDEFGHI\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the error message should be displayed under \"Contact Number\" as \"This value is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://adjiva.com/qa-test/",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.the_user_navigates_to_url(String)"
});
formatter.result({
  "duration": 8068148513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDEFGHI",
      "offset": 30
    }
  ],
  "location": "RegistrationSteps.the_user_fills_Contact_No_as(String)"
});
formatter.result({
  "duration": 690038564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Number",
      "offset": 45
    },
    {
      "val": "This value is not valid",
      "offset": 65
    }
  ],
  "location": "RegistrationSteps.validate_message_for_error(String,String)"
});
formatter.result({
  "duration": 587105641,
  "status": "passed"
});
});