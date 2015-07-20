package com.peoplenet.cucumber.common.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
/**
 * Created by mroien on 7/19/15.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"classpath:features/myFeature.feature", "classpath:features/second.feature"},
        glue = {"com/peoplenet/cucumber/common"},
        format = {"json:build/reports/tests/cucumber.json", "html:build/reports/tests/html/"}
)
public class RunCukesTest {
}
