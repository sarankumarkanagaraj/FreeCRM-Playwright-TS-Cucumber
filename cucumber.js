const getWorldParams = () => {
  const params = {
    foo: 'bar'
  };

  return params;
};

const config = {
  import: ['src/**/*.ts'],
  format: [
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'junit:reports/junit.xml',
    'summary',
    'progress-bar'
  ],
  formatOptions: {
    snippetInterface: 'async-await'
  },
  worldParameters: getWorldParams()
};

if (process.env.USE_ALLURE) {
  config.format.push('./src/support/reporters/allure-reporter.ts');
} else {
  config.format.push('@cucumber/pretty-formatter');
}
export default config;
