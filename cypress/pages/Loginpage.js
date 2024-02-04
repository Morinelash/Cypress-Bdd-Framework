class LoginPage {
elements = {
  openApp: () => cy.visit("/login"),
  usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
  passwordInputField: () => cy.get('[data-testid="Password"]'),
  loginBtn: () => cy.get('.MuiButton-contained'),
  addCourseBtn: () => cy.contains('Add Course'),
  errorLoginMsg: () => cy.contains("Invalid Login Credential")
};

visitQualesApp() {
    this.elements.openApp();
}

visitQualesApp() {
    this.elements.openApp();
}
verifysuccessfulLogin() {
    this.elements.addCourseBtn().should("be.visible");
}

verifyUnsuccessfulLogin() {
    this.elements.errorLoginMsg().should("be.visible");
}
typeUsernameAndPassword() {
    this.elements.usernameInputField().type(Cypress.env("username"));
    this.elements.passwordInputField().type(Cypress.env("password"));
}

typeIncorrectUsernameAndPassword() {
    this.elements.usernameInputField().type("at@mail.com");
    this.elements.passwordInputField().type(Cypress.env("password"));
    this.elements.loginBtn().click();
}

clickLoginButton() {
    this.elements.loginBtn().click();
}
}
export const loginPage = new LoginPage();