package com.peoplenet.cucumber.common.common;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

/**
 * Created by toien on 7/13/2015.
<<<<<<< HEAD
 * This is Branch 4
=======
 * Adding this for Branch1
>>>>>>> FETCH_HEAD
 */


public class MyStepdefs {

    @Before
    public void testSetUp () {
        System.out.println("Before set up");
    }

    @After
    public void afterTestRun () {
        System.out.println("After set up is done");
    }

    @Given("^this is my first step$")
    public void this_is_my_first_step() throws Throwable {
        System.out.println("This is my first step");

    }

    @When("^this is my second step$")
    public void this_is_my_second_step() throws Throwable {
        System.out.println("This is my second step");
    }

    @Then("^this is my final step$")
    public void this_is_my_final_step() throws Throwable {
        System.out.println("This is my final step");
    }

    @And("^I submit the form with valid data$")
    public void I_submit_the_form_with_valid_data(DataTable table) throws Throwable {
        System.out.println(table);

        // 2D list array
        List<List<String>> data = table.raw();

        System.out.println("Your name is " + data.get(1).get(1));
    }

    @Given("^I am at the site$")
    public void I_am_at_the_site() throws Throwable {
        System.out.println("I entered the correct site");
    }

    @When("^I click on ([^\"]*)$")
    public void I_click_on_Link(String link) throws Throwable {
        System.out.println("These are the links " + link);
    }

    @Then("^I check I am on ([^\"]*)$")
    public void I_check_I_am_on_Title(String title) throws Throwable {
        System.out.println("This is the title " + title);
    }

    @And("^I leave the browser$")
    public void I_leave_the_browser() throws Throwable {
        for (int i = 0; i < 4; i++) {
            System.out.println("You are leaving the website: times " + i);
        }

    }
}
