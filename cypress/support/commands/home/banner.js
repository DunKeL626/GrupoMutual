import banner from '../../../fixtures/home/banner.json'

export function Banner(zise) {
    switch (zise) {

        case "Movil":
            for (const component in banner.banner) {
                cy.get(banner.Boton[component]).scrollIntoView().should('exist').click();
                cy.get(banner.banner[component].Titulo.selectorMovil).scrollIntoView().should('exist').contains(banner.banner[component].Titulo.texto);
                cy.get(banner.banner[component].Descripcion.selectorMovil).scrollIntoView().should('exist').contains(banner.banner[component].Descripcion.texto);
                cy.get(banner.banner[component].Imagen.selectorMovil).scrollIntoView().should('exist');
                component != "Libro" ? cy.get(banner.banner[component].Boton.selectorMovil).scrollIntoView().should('exist').and('have.attr', banner.banner[component].Boton.elemento, banner.banner[component].Boton.URL).contains(banner.banner[component].Boton.texto) : undefined
            }
            break;

        case "Tablet":
            for (const component in banner.banner) {
                cy.get(banner.Boton[component]).scrollIntoView().should('exist').click();
                cy.get(banner.banner[component].Titulo.selectorTablet).scrollIntoView().should('exist').contains(banner.banner[component].Titulo.texto);
                cy.get(banner.banner[component].Descripcion.selectorTablet).scrollIntoView().should('exist').contains(banner.banner[component].Descripcion.texto);
                cy.get(banner.banner[component].Imagen.selectorTablet).scrollIntoView().should('exist');
                component != "Libro" ? cy.get(banner.banner[component].Boton.selectorTablet).scrollIntoView().should('exist').and('have.attr', banner.banner[component].Boton.elemento, banner.banner[component].Boton.URL).contains(banner.banner[component].Boton.texto) : undefined
            }
            break;

        case "Laptop":
            for (const component in banner.banner) {
                cy.get(banner.Boton[component]).scrollIntoView().should('exist').click();
                cy.get(banner.banner[component].Titulo.selectorLaptop).scrollIntoView().should('exist').contains(banner.banner[component].Titulo.texto);
                cy.get(banner.banner[component].Descripcion.selectorLaptop).scrollIntoView().should('exist').contains(banner.banner[component].Descripcion.texto);
                cy.get(banner.banner[component].Imagen.selectorLaptop).scrollIntoView().should('exist');
                component != "Libro" ? cy.get(banner.banner[component].Boton.selectorLaptop).scrollIntoView().should('exist').and('have.attr', banner.banner[component].Boton.elemento, banner.banner[component].Boton.URL).contains(banner.banner[component].Boton.texto) : undefined
            }
            break;

        case "Desktop":
            for (const component in banner.banner) {
                cy.get(banner.Boton[component]).scrollIntoView().should('exist').click();
                cy.get(banner.banner[component].Titulo.selectorDesktop).scrollIntoView().should('exist').contains(banner.banner[component].Titulo.texto);
                cy.get(banner.banner[component].Descripcion.selectorDesktop).scrollIntoView().should('exist').contains(banner.banner[component].Descripcion.texto);
                cy.get(banner.banner[component].Imagen.selectorDesktop).scrollIntoView().should('exist');
                component != "Libro" ? cy.get(banner.banner[component].Boton.selectorDesktop).scrollIntoView().should('exist').and('have.attr', banner.banner[component].Boton.elemento, banner.banner[component].Boton.URL).contains(banner.banner[component].Boton.texto) : undefined
            }
            break;
    }
}