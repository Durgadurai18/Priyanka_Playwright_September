 import { test, expect } from '@playwright/test';


test('drag and drop',async ({page})=>{

    await page.goto('https://jqueryui.com/droppable/');

    const frame =page.frameLocator('.demo-frame');

    const source =frame.locator('#draggable');

    const target = frame.locator('#droppable');

    await expect(target).toHaveText('Drop here');

    await source.dragTo(target);

    await expect(target).toHaveText('Dropped!');

    console.log('Connected successfully');


});



