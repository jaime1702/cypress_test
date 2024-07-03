import HomeActions from '../../actions/homeActions/homeActions';
import SearchActions from '../../actions/searchActions/searchActions';
import Search from '../../factories/search/search';
import '@testing-library/cypress/add-commands';

describe('Home Page', () => {
  beforeEach(() => {
    HomeActions.homePage();
    cy.compareScreenShot('homePage');
  });

  it('search for a country', () => {
    SearchActions.filter(Search.searchData);
    SearchActions.validateFilter(Search.searchData);
  });
});
