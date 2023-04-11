import flyBottom from '../../../fixtures/head_footer_fly_button/fly-bottom.json'

export function FlyBottom(zise) {

    switch (zise) {
        case "Movil":
            cy.get(flyBottom.Boton.Flotante.selectorMovil).scrollIntoView().should('exist').click();

            for (const component in flyBottom.TextoURL) {
                cy.get(flyBottom.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', flyBottom.TextoURL[component].elemento, flyBottom.TextoURL[component].URL).contains(flyBottom.TextoURL[component].texto);
            }
            break;

        case "Tablet":
            cy.get(flyBottom.BotonTexto.Flotante.selectorTablet).scrollIntoView().should('exist').click();

            for (const component in flyBottom.TextoURL) {
                cy.get(flyBottom.TextoURL[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', flyBottom.TextoURL[component].elemento, flyBottom.TextoURL[component].URL).contains(flyBottom.TextoURL[component].texto);
            }
            break;
        case "Laptop":
            cy.get(flyBottom.BotonTexto.Flotante.selectorLaptop).scrollIntoView().should('exist').click();

            for (const component in flyBottom.TextoURL) {
                cy.get(flyBottom.TextoURL[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', flyBottom.TextoURL[component].elemento, flyBottom.TextoURL[component].URL).contains(flyBottom.TextoURL[component].texto);
            }
            break;
        case "Desktop":
            cy.get(flyBottom.BotonTexto.Flotante.selectorDesktop).scrollIntoView().should('exist').click();

            for (const component in flyBottom.TextoURL) {
                cy.get(flyBottom.TextoURL[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', flyBottom.TextoURL[component].elemento, flyBottom.TextoURL[component].URL).contains(flyBottom.TextoURL[component].texto);
            }
            break;
    }
}