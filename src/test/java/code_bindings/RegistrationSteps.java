package code_bindings;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ByIdOrName;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class RegistrationSteps {
	
	WebDriver driver;
	Map<String, String> inputData = new HashMap<String,String>();
		
	@Given("^the user navigates to \"([^\"]*)\"$")
	public void the_user_navigates_to_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:/Users/shubham.srivastava/Downloads/chromedriver_win32/chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(url);
	}

	@When("^the user fills First name as \"([^\"]*)\"$")
	public void the_user_fills_First_name_as(String firstName) throws Throwable {
		driver.findElement(ByIdOrName.name("first_name")).sendKeys(firstName);
		inputData.put("first_name", firstName);	
	}

	@When("^the user fills Last name as \"([^\"]*)\"$")
	public void the_user_fills_Last_name_as(String lastName) throws Throwable {
		driver.findElement(ByIdOrName.name("last_name")).sendKeys(lastName);
		inputData.put("last_name", lastName);
	}

	@When("^the user selects Department as \"([^\"]*)\"$")
	public void the_user_selects_Department_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^the user fills Username as \"([^\"]*)\"$")
	public void the_user_fills_Username_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^the user fills Password as \"([^\"]*)\"$")
	public void the_user_fills_Password_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^the user fills Confirm Password as \"([^\"]*)\"$")
	public void the_user_fills_Confirm_Password_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^the user fills Email as \"([^\"]*)\"$")
	public void the_user_fills_Email_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^the user fills Contact No as \"([^\"]*)\"$")
	public void the_user_fills_Contact_No_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the user should be successfully registered$")
	public void the_user_should_be_successfully_registered() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


	
}
