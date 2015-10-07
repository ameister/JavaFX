package ch.bbv.fxtest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( monochrome = true,
features = "src/test/resources/",
plugin = { "pretty","html: cucumber-html-reports",
         "json: cucumber-html-reports/cucumber.json" })
public class SearchTest  {
	


}
