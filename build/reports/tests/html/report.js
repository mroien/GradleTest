$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Proof of concept that my framework works",
  "description": "",
  "id": "proof-of-concept-that-my-framework-works",
  "keyword": "Feature"
});
formatter.before({
  "duration": 347011,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "My first test",
  "description": "",
  "id": "proof-of-concept-that-my-framework-works;my-first-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "this is my first step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "this is my second step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "this is my final step",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I submit the form with valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 8
    },
    {
      "cells": [
        "Name",
        "Tim Oien"
      ],
      "line": 9
    },
    {
      "cells": [
        "Address",
        "Happy Land"
      ],
      "line": 10
    },
    {
      "cells": [
        "Zip Code",
        "55409"
      ],
      "line": 11
    },
    {
      "cells": [
        "Email",
        "kfh@gmail.com"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.this_is_my_first_step()"
});
formatter.result({
  "duration": 100720513,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.this_is_my_second_step()"
});
formatter.result({
  "duration": 97462,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.this_is_my_final_step()"
});
formatter.result({
  "duration": 83896,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.I_submit_the_form_with_valid_data(DataTable)"
});
formatter.result({
  "duration": 5003506,
  "status": "passed"
});
formatter.after({
  "duration": 74442,
  "status": "passed"
});
formatter.uri("features/second.feature");
formatter.feature({
  "line": 1,
  "name": "second outline feature",
  "description": "",
  "id": "second-outline-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "second-outline-feature;test-contact-page-heading",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at the site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \u003cLink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I leave the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "second-outline-feature;test-contact-page-heading;",
  "rows": [
    {
      "cells": [
        "Link",
        "Title"
      ],
      "line": 10,
      "id": "second-outline-feature;test-contact-page-heading;;1"
    },
    {
      "cells": [
        "home_link",
        "Home"
      ],
      "line": 11,
      "id": "second-outline-feature;test-contact-page-heading;;2"
    },
    {
      "cells": [
        "about_link",
        "About Us"
      ],
      "line": 12,
      "id": "second-outline-feature;test-contact-page-heading;;3"
    },
    {
      "cells": [
        "contact_us",
        "Contact Us"
      ],
      "line": 13,
      "id": "second-outline-feature;test-contact-page-heading;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 97354,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "second-outline-feature;test-contact-page-heading;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at the site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on home_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on Home",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I leave the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.I_am_at_the_site()"
});
formatter.result({
  "duration": 113150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home_link",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.I_click_on_Link(String)"
});
formatter.result({
  "duration": 2298135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.I_check_I_am_on_Title(String)"
});
formatter.result({
  "duration": 163656,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.I_leave_the_browser()"
});
formatter.result({
  "duration": 267831,
  "status": "passed"
});
formatter.after({
  "duration": 153999,
  "status": "passed"
});
formatter.before({
  "duration": 115990,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "second-outline-feature;test-contact-page-heading;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at the site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on about_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on About Us",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I leave the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.I_am_at_the_site()"
});
formatter.result({
  "duration": 109879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about_link",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.I_click_on_Link(String)"
});
formatter.result({
  "duration": 157405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.I_check_I_am_on_Title(String)"
});
formatter.result({
  "duration": 161559,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.I_leave_the_browser()"
});
formatter.result({
  "duration": 262130,
  "status": "passed"
});
formatter.after({
  "duration": 56994,
  "status": "passed"
});
formatter.before({
  "duration": 594701,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "second-outline-feature;test-contact-page-heading;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at the site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on contact_us",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on Contact Us",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I leave the browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.I_am_at_the_site()"
});
formatter.result({
  "duration": 153948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact_us",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.I_click_on_Link(String)"
});
formatter.result({
  "duration": 1346536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Us",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.I_check_I_am_on_Title(String)"
});
formatter.result({
  "duration": 193439,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.I_leave_the_browser()"
});
formatter.result({
  "duration": 154715,
  "status": "passed"
});
formatter.after({
  "duration": 73873,
  "status": "passed"
});
});