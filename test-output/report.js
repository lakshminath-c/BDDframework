$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Succsessful Login with valid Credentials",
  "description": "",
  "id": "login;succsessful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch Chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens url as \"https://ui.cogmento.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter username as \"nandasele69@gmail.com\" and password as \"Test@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user  click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "page title should be \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "page title should be \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chromebrowser()"
});
formatter.result({
  "duration": 10933733201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.cogmento.com",
      "offset": 19
    }
  ],
  "location": "Steps.user_opens_url_as(String)"
});
formatter.result({
  "duration": 2411229900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandasele69@gmail.com",
      "offset": 24
    },
    {
      "val": "Test@1234",
      "offset": 64
    }
  ],
  "location": "Steps.user_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 375122900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Login()"
});
formatter.result({
  "duration": 94000900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 190200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Logout_link()"
});
formatter.result({
  "duration": 103147000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//i[@class\u003d\u0027settings icon\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.87)\n  (Driver info: chromedriver\u003d80.0.3987.16 (320f6526c1632ad4f205ebce69b99a062ed78647-refs/branch-heads/3987@{#185}),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 80 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027malli\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52598}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.16 (320f6526c1632ad4f205ebce69b99a062ed78647-refs/branch-heads/3987@{#185}), userDataDir\u003dC:\\Users\\MYPC~1\\AppData\\Local\\Temp\\scoped_dir7108_818661334}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.87, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bd886a7843e1874aa4c06714afc9b132\n*** Element info: {Using\u003dxpath, value\u003d//i[@class\u003d\u0027settings icon\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObjectmodel.Loginpage.clickLogout(Loginpage.java:47)\r\n\tat stepDefinations.Steps.user_click_on_Logout_link(Steps.java:54)\r\n\tat ✽.When user click on Logout link(./Features/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});