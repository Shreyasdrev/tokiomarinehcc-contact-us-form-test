# tokiomarinehcc-contact-us-form-test
Make sure you have Node.js 18 or later installed. Then, in this directory, run:

npm install # install dependencies npx playwright install # setup Playwright browsers npm run test # run your tests! ##Configuration

See :https://playwright.dev/docs/intro

Running your Tests You can follow these steps. Ensure you have Visual Studio Code installed on your system:

Instructions to Set Up and Run Tests:

Launch Visual Studio Code and open the project folder. Open the Terminal:

In Visual Studio Code, open the integrated terminal by selecting Terminal > New Terminal from the menu. 
Install Dependencies:
1.Run the following command to install Node Package Manager (npm) dependencies: "npm install" This will ensure all required packages specified in the package.json file are installed.

2.Install Playwright: Install Playwright and its required dependencies by running: "npx playwright install" This step will set up browsers and dependencies required by Playwright.

Run the Tests: Execute the following command to run the tests: "npx playwright test" This will initiate the tests using the Playwright framework.

Reporting View Test Results: Once the tests are complete, Playwright will generate a report. You can view detailed test results in the terminal.
We can also implement a Allure reporting for Pie chart and better representation of the html report.

For an HTML report, run:
"npx playwright show-report" or click on playwright-reports=> index.html=> open with live server

Documentation: For better documentation I have used additional grouping (For better understanding the test reports)

Test case names:
 tc1_verifyPageHeader- This test case will click on all the links on the home page and verify the page header.
 tc2_verifyContactUsForm- This test case will verify all the page headers and go to contact us page, will fill the "Inquiry Form" and "Send Inquiry" and also verify for "Thank you for your form message"
