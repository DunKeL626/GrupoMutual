import banner from '../../../fixtures/home/banner.json'

export function NameFuction(zise) {
  //Boton
  cy.get(headDown.Boton.TipoDeCambio.selectorLaptop).scrollIntoView().should('exist').contains(headDown.Boton.TipoDeCambio.texto).click();

  switch (zise) {

    case "Movil":
      for (const component in Objeto) {
        // TextosURL
        cy.get(Objeto.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', Objeto.TextoURL[component].elemento, Objeto.TextoURL[component].URL).contains(Objeto.TextoURL[component].texto);
      }
      break;

    case "Tablet":
      for (const component in Objeto) {
        // Textos
        cy.get(Objeto.TipoDeCambio.Texto[component].selectorMovil).scrollIntoView().should('exist').contains(Objeto.TipoDeCambio.Texto[component].texto);
      }
      break;

    case "Laptop":
      for (const component in Objeto) {
        //Imagenes
        cy.get(Objeto.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', Objeto.TextoURL[component].elemento, Objeto.TextoURL[component].URL)
      }
      break;

    case "Desktop":
      for (const component in Objeto) {
        cy.log(component);
      }
      break;
  }
}