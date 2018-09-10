import login from '../login';

export default {
    'Title is 2getThere': (browser) => {
      // Browser is the browser that is being controlled
      browser
        .url('http://192.168.1.168:8620') // Navigate to the url
        .waitForElementVisible('body', 1000) // Wait until you can see the body element.
        .verify.title('2GT Demo - Index') // Verify that the title is 'Bing'
        .end() // This must be called to close the browser at the end
      },
      'Terminal typing': (browser) => {
        const terminalSelector = 'input.terminal-input';
        login(browser, 'http://192.168.1.168:8620/inspector/#!/terminal')
          .waitForElementVisible('.terminal-viewport:first-child', 1000)
          .setValue(terminalSelector, 'run your script')
          .end()
      }
  }