import login from '../login'
export default {
    "Test order": (browser) => {
        login(browser, "http://192.168.1.168:8620/2gt/sitecontroller/#!/main/dashboards/dashboard/panels?dashboardId=1")
            .pause(10000)
            .waitForElementVisible('.table-condensed', 1000)
            .click(".table-condensed tr:first-child")
            .assert.urlEquals("http://192.168.1.168:8620/2gt/sitecontroller/#!/main/dashboards/dashboard/panels?dashboardId=1")
            .assert.elementPresent('div[ng-if="addOrderEnabled"]')
            .click('div[ng-if="addOrderEnabled"]')
            .assert.elementPresent('.modal-dialog')
            .assert.containsText('.modal-header', 'Add Order')

    }
}