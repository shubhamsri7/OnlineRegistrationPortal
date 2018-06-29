Feature: Validate registration portal for DeltaX 

@TestNew
Scenario: Verify the successful registration when all the data passed are valid 
	Given the user navigates to "http://adjiva.com/qa-test/"
	When the user fills First name as "Shubham" 
	And the user fills Last name as "Srivastava" 
	And the user selects Department as "Engineering" 
	And the user fills Username as "shubhamsri7" 
	And the user fills Password as "password123" 
	And the user fills Confirm Password as "password123" 
	And the user fills Email as "shubhamsri7@gmail.com" 
	And the user fills Contact No as "8105178070" 
	Then the user should be successfully registered 

	