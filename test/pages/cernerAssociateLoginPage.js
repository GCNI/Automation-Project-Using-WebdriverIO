import elements from '../utils/ElementsUtils';

class CernerAssociateLoginPage {
  title = 'Cerner Associate - Log In';

  get usernameTextBoxLocator() {
    return $('#authUsername');
  }

  get passwordTextBoxLocator() {
    return $('#authPassword');
  }

  get loginBtnLocator() {
    return $('#login');
  }

  async getPageTitle() {
     elements.doGetPageTitle(this.title);
  }

  async login(username, password) {
     elements.doSetValue(this.usernameTextBoxLocator, username);
     elements.doSetValue(this.passwordTextBoxLocator, password);
     elements.doClick(this.loginBtnLocator);
  }
}

export default CernerAssociateLoginPage;

