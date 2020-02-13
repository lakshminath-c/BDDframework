package pageObjectmodel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage {

	public WebDriver ldriver;

	public Loginpage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(name = "email")
	private WebElement txtusername;

	@FindBy(name = "password")
	private WebElement txtpassword;

	@FindBy(xpath = "//div[text()='Login']")
	private WebElement loginbtn;

	@FindBy(xpath = "//i[@class='settings icon']")
	private WebElement settingsbtn;

	@FindBy(xpath = "//span[text()='Log Out']")
	private WebElement logoutlink;

	public void setUserName(String uNmae) {
		txtusername.clear();
		txtusername.sendKeys(uNmae);
	}

	public void setPassword(String password) {
		txtpassword.clear();
		txtpassword.sendKeys(password);
	}

	public void clickLogin() {
		loginbtn.click();
	}

	public void clickLogout() {
		settingsbtn.click();
		logoutlink.click();
	}

}
