package code_bindings;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
import org.junit.Assert;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ByIdOrName;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationSteps {
	WebDriver driver;
	String firstName, lastName, department, userName, password, confirmPassword, email, contactNo;
	public static Map<String, Integer> attributeMap = new HashMap<String, Integer>();

	@Given("^the user navigates to \"([^\"]*)\"$")
	public void the_user_navigates_to_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:/Users/shubham.srivastava/Downloads/chromedriver_win32/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(url);
	}

	@When("^the user fills First name as \"([^\"]*)\"$")
	public void the_user_fills_First_name_as(String firstName) throws Throwable {
		driver.findElement(ByIdOrName.name("first_name")).sendKeys(firstName);
		this.firstName = firstName;
	}

	@When("^the user fills Last name as \"([^\"]*)\"$")
	public void the_user_fills_Last_name_as(String lastName) throws Throwable {
		driver.findElement(ByIdOrName.name("last_name")).sendKeys(lastName);
		this.lastName = lastName;
	}

	@When("^the user selects Department as \"([^\"]*)\"$")
	public void the_user_selects_Department_as(String department) throws Throwable {
		Select selectDepartment = new Select(driver.findElement(ByIdOrName.name("department")));
		selectDepartment.selectByVisibleText(department);
		this.department = department;
	}

	@When("^the user fills Username as \"([^\"]*)\"$")
	public void the_user_fills_Username_as(String userName) throws Throwable {
		driver.findElement(ByIdOrName.name("user_name")).sendKeys(userName);
		this.userName = userName;
	}

	@When("^the user fills Password as \"([^\"]*)\"$")
	public void the_user_fills_Password_as(String password) throws Throwable {
		driver.findElement(ByIdOrName.name("user_password")).sendKeys(password);
		this.password = password;
	}

	@When("^the user fills Confirm Password as \"([^\"]*)\"$")
	public void the_user_fills_Confirm_Password_as(String confirmPassword) throws Throwable {
		driver.findElement(ByIdOrName.name("confirm_password")).sendKeys(confirmPassword);
		this.confirmPassword = confirmPassword;
	}

	@When("^the user fills Email as \"([^\"]*)\"$")
	public void the_user_fills_Email_as(String email) throws Throwable {
		driver.findElement(ByIdOrName.name("email")).sendKeys(email);
		this.email = email;
	}

	@When("^the user fills Contact No as \"([^\"]*)\"$")
	public void the_user_fills_Contact_No_as(String contactNo) throws Throwable {
		driver.findElement(ByIdOrName.name("contact_no")).sendKeys(contactNo);
		this.contactNo = contactNo;
	}

	@When("^the user clicks on Submit button$")
	public void submit() throws Throwable {
		driver.findElement(ByXPath.xpath("/html[1]/body[1]/div[1]/form[1]/fieldset[1]/div[10]/div[1]/button[1]"))
				.click();
	}

	@Then("^the error message should be displayed under \"([^\"]*)\" as \"([^\"]*)\"$")
	public void validate_message_for_error(String attribute, String message) throws Throwable {

		initialise_attribute_map();
		String currentError = "";
		String EmailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
				+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
		Pattern validEmailPattern = Pattern.compile(EmailPattern);
		String contactNoPattern = "[1-9]\\d{9}";
		Pattern validContactNoPattern = Pattern.compile(contactNoPattern);
		// Validation checks for Mandatory parameters/Null Checks
		switch (attributeMap.get(attribute)) {
		case 1:
			if (firstName.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("/html[1]/body[1]/div[1]/form[1]/fieldset[1]/div[1]/div[1]/small[2]"))
						.getText();
			} else if (firstName.length() > 0 && firstName.length() < 2) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();

			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 2:
			if (lastName.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("//small[@data-bv-validator='notEmpty'][contains(text(),'Please enter your Last Name')]"))
						.getText();
			} else if (lastName.length() > 0 && lastName.length() < 2) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();

			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 4:

			if (userName.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("/html[1]/body[1]/div[1]/form[1]/fieldset[1]/div[4]/div[1]/small[2]"))
						.getText();
			} else if (userName.length() < 8) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();

			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 5:
			if (password.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("//small[@data-bv-validator='notEmpty'][contains(text(),'Please enter your Password')]"))
						.getText();
			} else if (password.length() < 8) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();
			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 6:
			if (confirmPassword.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("//small[@data-bv-validator='notEmpty'][contains(text(),'Please confirm your Password')]"))
						.getText();
			} else if (confirmPassword.length() < 8 || !confirmPassword.equals(password)) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();
			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 7:
			if (email.length() == 0) {
				currentError = driver
						.findElement(
								ByXPath.xpath("//small[@data-bv-validator='notEmpty'][contains(text(),'Please enter your Email Address')]"))
						.getText();
			} else if (validEmailPattern.matcher(email).matches() == false) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();
			}
			Assert.assertTrue(currentError.equals(message));
			break;
		case 8:
			if (validContactNoPattern.matcher(contactNo).matches() == false) {
				currentError = driver
						.findElement(ByXPath
								.xpath("//div[@class='form-group has-feedback has-error']//div[@class='col-md-4 inputGroupContainer']//small[@data-bv-validator='stringLength']"))
						.getText();
			}
			Assert.assertTrue(currentError.equals(message));
			break;
		default:
			break;
		}
		driver.close();
	}

	@Then("^the user should be successfully registered$")
	public void validate_success_response() throws Throwable {
		Assert.assertTrue(driver.getCurrentUrl().equals("http://adjiva.com/qa-test/thanks.html"));
		driver.close();
	}

	public static void initialise_attribute_map() {
		attributeMap.put("First Name", 1);
		attributeMap.put("Last Name", 2);
		attributeMap.put("Department", 3);
		attributeMap.put("User Name", 4);
		attributeMap.put("Password", 5);
		attributeMap.put("Confirm Password", 6);
		attributeMap.put("Email", 7);
		attributeMap.put("Contact Number", 8);
	}
}