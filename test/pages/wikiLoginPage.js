import elements from '../utils/ElementsUtils';

class WikiLoginPage {
  url = 'https://wiki.cerner.com/display/public/cortex/CSS_ASD+-+Domain+Strategy-+Cerner+Support+App-GD';

  title = 'Cerner Cerner Wiki';

  get cernerAssociateBtnLocator() {
    return $("//a[@class='button provider provider--associate']");
  }

  scrollToCernerAssociateBtn() {
     elements.scrollTo(this.cernerAssociateBtnLocator);
  }

  clickCernerAssociateBtn() {
     elements.doClick(this.cernerAssociateBtnLocator);
  }

  getPageTitle() {
     elements.doGetPageTitle(this.title);
  }
}

export default WikiLoginPage;

