import { Page } from '@playwright/test';

/**
 * Enter text into an input field
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param text - Text to enter
 */
export async function enterInputText(page: Page, selector: string, text: string): Promise<void> {
    // Wait for element to be visible
    await page.waitForSelector(selector);
    // Clear and fill the input field (page.fill automatically clears the field first)
    await page.fill(selector, text);
}

/**
 * Click on an element
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function clickElement(page: Page, selector: string): Promise<void> {
    await page.click(selector);
}

/**
 * Wait for an element with explicit timeout and state options
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param timeout - Maximum time to wait in milliseconds (default: 30000)
 * @param state - State to wait for: 'visible', 'hidden', 'attached', or 'detached' (default: 'visible')
 */
export async function waitFor(
    page: Page, 
    selector: string, 
    timeout: number = 30000,
    state: 'visible' | 'hidden' | 'attached' | 'detached' = 'visible'
): Promise<void> {
    await page.waitForSelector(selector, { 
        state: state,
        timeout: timeout 
    });
}
