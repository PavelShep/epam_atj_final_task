/**
 * @param element { ChainablePromiseElement }
 */

async function clearField(element) {
    await element.click(); 
    await browser.keys(['Control', 'a']); 
    await browser.keys('Backspace');
    const value = await element.getValue();
    if (value !== '') {
        throw new Error('Field was not cleared properly');
    }
}

export default clearField;