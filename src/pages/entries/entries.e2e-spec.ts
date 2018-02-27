import { browser, element, by } from 'protractor';

describe('App test', () => {
  it('should have an add entries button', () => {
    browser.get('http://localhost:8100/');
    const actionButton = element(by.id('addEntriesBtn'));
    browser.actions().mouseMove(actionButton).click().perform();
  });

  it('entries button onClick should redirect to the income page with the value and description inputs', () => {
    const ionInputDescriptionField = element(by.id(('incomeDescriptionField')));
    const descriptionField = ionInputDescriptionField.element(by.tagName('input'));
    const ionInputValueField = element(by.id(('incomeValueField')));
    const valueField = ionInputValueField.element(by.tagName('input'));
    const form = element(by.tagName('form'));
    const submitBtn = form.element(by.tagName('button'));

    valueField.sendKeys('100');
    sendKeys(descriptionField, 'Protractor is running some shady tests (income)');
    browser.actions().mouseMove(submitBtn).click().perform();
  });

  it('on the income view, save changes button click should store the data as an income entry', (done) => {
    const lastIonCard = element(by.css('ion-card:last-of-type'));
    const ionCardBtn = lastIonCard.element(by.tagName('button'));

    setTimeout(() => {
      const html = lastIonCard.getText().then(text => {
        expect(text).toContain('Protractor is running some shady tests (income)');
        done();
      });
    }, 100);
  });

  it('should go to the income page through the add entries button', (done) => {
    const actionButtonElement = element(by.id('addEntriesBtn'));
    setTimeout(() => {
      actionButtonElement.click();
      done();
    }, 500);
  });

  it('should go to the expenses page through clicking the expenses tab', (done) => {
    const expenseTabElement = element.all(by.css('a')).last();
    setTimeout(() => {
      browser.actions().mouseMove(expenseTabElement).click().perform();
      done();
    }, 500);
  });

  it('should fill in the value, description and save changes', () => {
    const ionInputDescriptionField = element(by.id(('expenseDescriptionField')));
    const descriptionField = ionInputDescriptionField.element(by.tagName('input'));
    const ionInputValueField = element(by.id(('expenseValueField')));
    const valueField = ionInputValueField.element(by.tagName('input'));
    const form = element.all(by.tagName('form')).last();
    const submitBtn = form.element(by.tagName('button'));

    valueField.sendKeys('90');
    sendKeys(descriptionField, 'Protractor is running some shady tests (expense)');
    browser.actions().mouseMove(submitBtn).click().perform();
  });

  it('should navigate to the settings tab', (done) => {
    const ionTabsElement = element.all(by.tagName('ion-tabs')).last();
    const settingsElement = ionTabsElement.all(by.css('a')).last();
    setTimeout(() => {
      browser.actions().mouseMove(settingsElement).click().perform();
      done();
    }, 500);
  });

  it('should wipe all data when remove button is clicked', (done) => {
    const ionTabsElement = element.all(by.tagName('ion-tabs')).last();
    const homeElement = ionTabsElement.all(by.css('a')).first();
    const removeStoredDataBtn = element(by.id('removeStoredData'));
    browser.actions().mouseMove(removeStoredDataBtn).click().perform();
    setTimeout(() => {
      browser.actions().mouseMove(homeElement).click().perform();
      done();
    }, 500);
  });

  afterAll(() => {
    browser.sleep(2000);
  });
});

function sendKeys(targetElement, string: string): void {

  for (let i = 0; i < string.length; i++) {
    targetElement.sendKeys(string.charAt(i));
  }
}
