export default function login(browser, url) {
    browser
        .url(url)
        .click('li[ng-hide="user.isLoggedIn"]')
        .waitForElementVisible('.modal-dialog', 1000)
        .pause(10000)
        .setValue('input[name=username]', 'admin')
        .setValue('input[name=password]', 'admin123')
        .click('.modal-footer button[type="submit"]')
        return browser
}