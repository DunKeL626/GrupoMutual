import mutuales from '../../../fixtures/home/mutuales.json'

export function Mutuales(zise) {
    switch (zise) {

        case "Movil":
            for (const component in mutuales) {
                cy.get(mutuales[component].Titulo.selectorMovil).scrollIntoView().should('exist').contains(mutuales[component].Titulo.texto);
                cy.get(mutuales[component].Descripcion.selectorMovil).scrollIntoView().should('exist').contains(mutuales[component].Descripcion.texto);
                cy.get(mutuales[component].Imagen.selectorMovil).scrollIntoView().should('exist').and('have.attr', mutuales[component].Imagen.elemento, mutuales[component].Imagen.URL)
            }
            break;

        case "Tablet":
            for (const component in mutuales) {
                cy.get(mutuales[component].Titulo.selectorTablet).scrollIntoView().should('exist').contains(mutuales[component].Titulo.texto);
                cy.get(mutuales[component].Descripcion.selectorTablet).scrollIntoView().should('exist').contains(mutuales[component].Descripcion.texto);
                cy.get(mutuales[component].Imagen.selectorTablet).scrollIntoView().should('exist').and('have.attr', mutuales[component].Imagen.elemento, mutuales[component].Imagen.URL)
            }
            break;

        case "Laptop":
            for (const component in mutuales) {
                cy.get(mutuales[component].Titulo.selectorLaptop).scrollIntoView().should('exist').contains(mutuales[component].Titulo.texto);
                cy.get(mutuales[component].Descripcion.selectorLaptop).scrollIntoView().should('exist').contains(mutuales[component].Descripcion.texto);
                cy.get(mutuales[component].Imagen.selectorLaptop).scrollIntoView().should('exist').and('have.attr', mutuales[component].Imagen.elemento, mutuales[component].Imagen.URL)
            }
            break;

        case "Desktop":
            for (const component in mutuales) {
                cy.get(mutuales[component].Titulo.selectorDesktop).scrollIntoView().should('exist').contains(mutuales[component].Titulo.texto);
                cy.get(mutuales[component].Descripcion.selectorDesktop).scrollIntoView().should('exist').contains(mutuales[component].Descripcion.texto);
                cy.get(mutuales[component].Imagen.selectorDesktop).scrollIntoView().should('exist').and('have.attr', mutuales[component].Imagen.elemento, mutuales[component].Imagen.URL)
            }
            break;
    }
}