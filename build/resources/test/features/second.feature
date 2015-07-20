Feature: second outline feature

  Scenario Outline: Test Contact Page Heading
    Given I am at the site
    When I click on <Link>
    Then I check I am on <Title>
    And I leave the browser

    Examples:
      | Link       | Title      |
      | home_link  | Home       |
      | about_link | About Us   |
      | contact_us | Contact Us |