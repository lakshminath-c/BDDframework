package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pageObjectmodel.Loginpage;

public class Steps {

	public WebDriver driver;
	public Loginpage lp;

	@Given("^user launch Chromebrowser$")
	public void user_launch_Chromebrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		lp = new Loginpage(driver);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
	}

	@When("^user opens url as \"([^\"]*)\"$")
	public void user_opens_url_as(String url) {
		driver.get(url);
	}

	@When("^user enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enter_username_as_and_password_as(String username, String password) throws InterruptedException {
		lp.setUserName(username);
		lp.setPassword(password);

	}

	@When("^user  click on Login$")
	public void user_click_on_Login() throws InterruptedException {
		lp.clickLogin();
		Thread.sleep(20);
	}

	@Then("^page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String arg1) {
		System.out.println("you are in homepage");
	}

	@When("^user click on Logout link$")
	public void user_click_on_Logout_link() throws InterruptedException {
		Thread.sleep(20);
		lp.clickLogout();
	}

	@Then("^close browser$")
	public void close_browser() {
		System.out.println("you are in loginpage");
	}

}
