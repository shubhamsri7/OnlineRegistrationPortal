package runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\shubham.srivastava\\Desktop\\Selenium Workspace\\OnlineRegistrationPortal\\src\\test\\java\\feature_files\\Registration.feature"
		,glue={"stepDefinition"}
		)
 
public class Test{
	
}