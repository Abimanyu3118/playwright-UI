import { test, expect } from '@playwright/test';
import * as actions from '../../support/actions';
import * as check from '../../support/check';
import * as pageLibrary from '../pages/pageLibrary.json';
import { fetchRowById } from '../../support/utility/fetchData';

test.describe('ParaBank Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the website
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        // Verify the element is visible
        await check.expectElementToBeVisible(page, pageLibrary.Login.userName);
        // Verify the login page is loaded through visual comparison
        await check.imageComparison(page, 'login-page', { fullPage: true });
    });

    test('Login with credentials from CSV', async ({ page }) => {
        // Get test data from CSV using the fetchData utility
        const testData = fetchRowById('local.csv', 'TC01', 'SC01');
        
        if (!testData) {
            throw new Error('Test data not found for TC01/SC01');
        }

        // Enter username
        await actions.enterInputText(
            page,
            pageLibrary.Login.userName,
            testData.username || ''
        );

        // Enter password
        await actions.enterInputText(
            page,
            pageLibrary.Login.password,
            testData.password || ''
        );

        // Click login button
        await actions.clickElement(
            page,
            pageLibrary.Login.loginButton
        );

        await actions.waitFor(page, pageLibrary.Login.welcomeMessage, 5000, 'visible')
        
        const expectedUsername = testData.homePageWelcomeName;
        const welcomeText = await page.locator(pageLibrary.Login.welcomeMessage).textContent();
        expect(welcomeText).toContain(`Welcome ${expectedUsername}`);
    });
});