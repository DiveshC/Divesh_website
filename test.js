let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('file:///C:/Users/drchu/Divesh_Website/Divesh_website/index.html');

//test cases 
driver.findElement(webdriver.By.name('techclub')).click();