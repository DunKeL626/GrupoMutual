import headDown from '../../fixtures/head-down.json'

export function HeadDown(zise) {

    switch (zise) {

        case "Movil":
            cy.get(headDown.Boton.TipoDeCambio.selectorMovil).scrollIntoView().should('exist').click();

            for (const component in headDown.TipoDeCambio.Texto) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TipoDeCambio.Texto[component].selectorMovil).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Texto[component].texto);
            }

            cy.get(headDown.Boton.DespliegueMenu.selectorMovil).scrollIntoView().should('exist').click();

            for (const component in headDown.TextoURL) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', headDown.TextoURL[component].elemento, headDown.TextoURL[component].URL).contains(headDown.TextoURL[component].texto);
            }
            break;

        case "Tablet":
            cy.get(headDown.Boton.TipoDeCambio.selectorMovil).scrollIntoView().should('exist').click();

            for (const component in headDown.TipoDeCambio.Texto) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TipoDeCambio.Texto[component].selectorTablet).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Texto[component].texto);
            }

            cy.get(headDown.Boton.DespliegueMenu.selectorTablet).scrollIntoView().should('exist').click();

            for (const component in headDown.TextoURL) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TextoURL[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', headDown.TextoURL[component].elemento, headDown.TextoURL[component].URL).contains(headDown.TextoURL[component].texto);
            }
            break;

        case "Laptop":
            cy.get(headDown.Boton.TipoDeCambio.selectorLaptop).scrollIntoView().should('exist').contains(headDown.Boton.TipoDeCambio.texto).click();

            for (const component in headDown.TipoDeCambio.Texto) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TipoDeCambio.Texto[component].selectorLaptop).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Texto[component].texto);
            }

            for (const component in headDown.TextoURL) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TextoURL[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', headDown.TextoURL[component].elemento, headDown.TextoURL[component].URL).contains(headDown.TextoURL[component].texto);
            }
            break;

        case "Desktop":
            cy.get(headDown.Boton.TipoDeCambio.selectorDesktop).scrollIntoView().should('exist').contains(headDown.Boton.TipoDeCambio.texto).click();

            for (const component in headDown.TipoDeCambio.Texto) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TipoDeCambio.Texto[component].selectorDesktop).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Texto[component].texto);
            }

            for (const component in headDown.TextoURL) {
                cy.log(`Se valida el componente tipo de cambio ${component}`);
                cy.get(headDown.TextoURL[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', headDown.TextoURL[component].elemento, headDown.TextoURL[component].URL).contains(headDown.TextoURL[component].texto);
            }
            break;
    }
}