Feature: Validate registration portal for DeltaX 

Scenario: Verify the successful registration when all the input data passed are valid 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Engineering" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the user should be successfully registered 
	
Scenario: Verify the response of the system when First Name is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Sales" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "First Name" as "Please enter your First Name" 
	
Scenario: Verify the response of the system when First Name is less than 2 characters 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "S" 
	Then the error message should be displayed under "First Name" as "This value is not valid" 
	
Scenario: Verify the response of the system when Last Name is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "" 
	And the user selects Department as "Support" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "Last Name" as "Please enter your Last Name" 
	
Scenario: Verify the response of the system when Last Name is less than 2 characters 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Last name as "S" 
	Then the error message should be displayed under "Last Name" as "This value is not valid" 
	
Scenario: Verify the response of the system when Username is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Support" 
	And the user fills Username as "" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "User Name" as "Please enter your Username" 
	
Scenario: Verify the response of the system when Username is less than 8 characters 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Username as "test" 
	Then the error message should be displayed under "User Name" as "This value is not valid" 
	
Scenario: Verify the response of the system when Password is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Support" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "Password" as "Please enter your Password" 
	
Scenario: Verify the response of the system when Password is less than 8 characters 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Password as "test" 
	Then the error message should be displayed under "Password" as "This value is not valid" 
	
Scenario: Verify the response of the system when Confirm Password is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Support" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "Confirm Password" as "Please confirm your Password" 
	
Scenario: Verify the response of the system when Confirm Password is less than 8 characters 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Confirm Password as "test" 
	Then the error message should be displayed under "Confirm Password" as "This value is not valid"

Scenario: Verify the response of the system when Password & Confirm Password is not entered same 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "passwordtest"
	Then the error message should be displayed under "Confirm Password" as "This value is not valid"
	
Scenario: Verify the response of the system when Email is NULL 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Support" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "" 
	And the user fills Contact No as "8105178070" 
	And the user clicks on Submit button 
	Then the error message should be displayed under "Email" as "Please enter your Email Address" 
	
Scenario: Verify the response of the system when Email is entered in invalid format 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Email as "123-456.com" 
	Then the error message should be displayed under "Email" as "This value is not valid"
	
Scenario: Verify the response of the system when Contact Number is entered in invalid format 
	Given the user navigates to "http://adjiva.com/qa-test/" 
	And the user fills Contact No as "ABCDEFGHI" 
	Then the error message should be displayed under "Contact Number" as "This value is not valid"
