import fotterUp from '../../../fixtures/head_footer_fly_button/footer-up.json'

export function FooterUp(zise) {

    switch (zise) {

        case "Movil":
            for (const component in fotterUp.texto) {
                cy.get(fotterUp.texto[component].selectorMovil).scrollIntoView().should('exist').contains(fotterUp.texto[component].texto);
            }
            for (const componentTitle in fotterUp.TextoURL) {
                cy.get(fotterUp.Boton[`${componentTitle}`].selectorMovil).scrollIntoView().should('exist').click();
                for (const component in fotterUp.TextoURL[componentTitle]) {
                    cy.log(`Se valida el componente ${component} de la sección ${componentTitle}`);
                    cy.get(fotterUp.TextoURL[componentTitle][component].selectorMovil).scrollIntoView().should('exist').and('have.attr', fotterUp.TextoURL[componentTitle][component].elemento, fotterUp.TextoURL[componentTitle][component].URL).contains(fotterUp.TextoURL[componentTitle][component].texto);
                }
            }
            break;

        case "Tablet":
            for (const component in fotterUp.texto) {
                cy.get(fotterUp.texto[component].selectorTablet).scrollIntoView().should('exist').contains(fotterUp.texto[component].texto);
            }
            for (const componentTitle in fotterUp.TextoURL) {
                for (const component in fotterUp.TextoURL[componentTitle]) {
                    cy.log(`Se valida el componente ${component} de la sección ${componentTitle}`);
                    cy.get(fotterUp.TextoURL[componentTitle][component].selectorTablet).scrollIntoView().should('exist').and('have.attr', fotterUp.TextoURL[componentTitle][component].elemento, fotterUp.TextoURL[componentTitle][component].URL).contains(fotterUp.TextoURL[componentTitle][component].texto);
                }
            }
            break;

        case "Laptop":
            for (const component in fotterUp.texto) {
                cy.get(fotterUp.texto[component].selectorLaptop).scrollIntoView().should('exist').contains(fotterUp.texto[component].texto);
            }
            for (const componentTitle in fotterUp.TextoURL) {
                for (const component in fotterUp.TextoURL[componentTitle]) {
                    cy.log(`Se valida el componente ${component} de la sección ${componentTitle}`);
                    cy.get(fotterUp.TextoURL[componentTitle][component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', fotterUp.TextoURL[componentTitle][component].elemento, fotterUp.TextoURL[componentTitle][component].URL).contains(fotterUp.TextoURL[componentTitle][component].texto);
                }
            }
            break;

        case "Desktop":
            for (const component in fotterUp.texto) {
                cy.get(fotterUp.texto[component].selectorDesktop).scrollIntoView().should('exist').contains(fotterUp.texto[component].texto);
            }
            for (const componentTitle in fotterUp.TextoURL) {
                for (const component in fotterUp.TextoURL[componentTitle]) {
                    cy.log(`Se valida el componente ${component} de la sección ${componentTitle}`);
                    cy.get(fotterUp.TextoURL[componentTitle][component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', fotterUp.TextoURL[componentTitle][component].elemento, fotterUp.TextoURL[componentTitle][component].URL).contains(fotterUp.TextoURL[componentTitle][component].texto);
                }
            }
            break;
    }
}