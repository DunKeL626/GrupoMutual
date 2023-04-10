import redesSociales from '../../../fixtures/home/redes-sociales.json'

export function RedesSociales(zise) {

    switch (zise) {

        case "Movil":
            cy.get(redesSociales.Texto.SiganosEn.selectorMovil).scrollIntoView().should('exist').contains(redesSociales.Texto.SiganosEn.texto);
            for (const component in redesSociales.URL) {
                cy.log(`Se valida el componente ${component}`);
                cy.get(redesSociales.URL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', redesSociales.URL[component].elemento, redesSociales.URL[component].URL)
            }
            break;

        case "Tablet":
            cy.get(redesSociales.Texto.SiganosEn.selectorTablet).scrollIntoView().should('exist').contains(redesSociales.Texto.SiganosEn.texto);
            for (const component in redesSociales.URL) {
                cy.log(`Se valida el componente ${component}`);
                cy.get(redesSociales.URL[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', redesSociales.URL[component].elemento, redesSociales.URL[component].URL)
            }
            break;

        case "Laptop":
            cy.get(redesSociales.Texto.SiganosEn.selectorLaptop).scrollIntoView().should('exist').contains(redesSociales.Texto.SiganosEn.texto);
            for (const component in redesSociales.URL) {
                cy.log(`Se valida el componente ${component}`);
                cy.get(redesSociales.URL[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', redesSociales.URL[component].elemento, redesSociales.URL[component].URL)
            }
            break;

        case "Desktop":
            cy.get(redesSociales.Texto.SiganosEn.selectorDesktop).scrollIntoView().should('exist').contains(redesSociales.Texto.SiganosEn.texto);
            for (const component in redesSociales.URL) {
                cy.log(`Se valida el componente ${component}`);
                cy.get(redesSociales.URL[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', redesSociales.URL[component].elemento, redesSociales.URL[component].URL)
            }
            break;
    }
}