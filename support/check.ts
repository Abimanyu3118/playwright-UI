import { Page, expect } from '@playwright/test';

/**
 * Check if element contains specific text
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param expectedText - Text to check for
 */
export async function expectElementToHaveText(page: Page, selector: string, expectedText: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toHaveText(expectedText);
}

/**
 * Check if element is visible
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function expectElementToBeVisible(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeVisible();
}

/**
 * Check if element is hidden
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function expectElementToBeHidden(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeHidden();
}

/**
 * Check if element has specific value
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param expectedValue - Value to check for
 */
export async function expectElementToHaveValue(page: Page, selector: string, expectedValue: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toHaveValue(expectedValue);
}

/**
 * Check if element is enabled
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function expectElementToBeEnabled(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeEnabled();
}

/**
 * Check if element is disabled
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function expectElementToBeDisabled(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeDisabled();
}

/**
 * Check if element has specific attribute value
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param attributeName - Name of the attribute
 * @param expectedValue - Expected value of the attribute
 */
export async function expectElementToHaveAttribute(
    page: Page, 
    selector: string, 
    attributeName: string, 
    expectedValue: string
): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toHaveAttribute(attributeName, expectedValue);
}

/**
 * Check if URL matches expected value
 * @param page - Playwright page object
 * @param expectedUrl - Expected URL
 */
export async function expectUrlToBe(page: Page, expectedUrl: string): Promise<void> {
    await expect(page).toHaveURL(expectedUrl);
}

/**
 * Check if element contains class
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param className - Class name to check for
 */
export async function expectElementToHaveClass(page: Page, selector: string, className: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toHaveClass(className);
}

/**
 * Compare current page screenshot with baseline
 * @param page - Playwright page object
 * @param snapshotName - Name for the screenshot (will be used as filename)
 * @param options - Optional screenshot options
 */
export async function imageComparison(
    page: Page, 
    snapshotName: string, 
    options: { fullPage?: boolean; timeout?: number } = {}
): Promise<void> {
    await expect(page).toHaveScreenshot(snapshotName + '.png', {
        fullPage: options.fullPage ?? true,
        timeout: options.timeout ?? 30000,
        maxDiffPixelRatio: 0.1
    });
}