import footerDown from '../../fixtures/footer-down.json'

export function FooterDown(zise){

    switch (zise) {

        case "Movil":
            for(const component in footerDown.Texto){
                cy.get(footerDown.Texto[component].selectorMovil).scrollIntoView().should('exist').contains(footerDown.Texto[component].texto);
            }

            for(const component in footerDown.TextoURL){
                cy.get(footerDown.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', footerDown.TextoURL[component].elemento, footerDown.TextoURL[component].URL).contains(footerDown.TextoURL[component].texto);
            }

            for(const component in footerDown.Imagenes){
                cy.get(footerDown.Imagenes[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', footerDown.Imagenes[component].elemento, footerDown.Imagenes[component].URL)
            }
        break;

        case "Tablet":
            for(const component in footerDown.Texto){
                cy.get(footerDown.Texto[component].selectorTablet).scrollIntoView().should('exist').contains(footerDown.Texto[component].texto);
            }

            for(const component in footerDown.TextoURL){
                cy.get(footerDown.TextoURL[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', footerDown.TextoURL[component].elemento, footerDown.TextoURL[component].URL).contains(footerDown.TextoURL[component].texto);
            }

            for(const component in footerDown.Imagenes){
                cy.get(footerDown.Imagenes[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', footerDown.Imagenes[component].elemento, footerDown.Imagenes[component].URL)
            }
        break;

        case "Laptop":
            for(const component in footerDown.Texto){
                cy.get(footerDown.Texto[component].selectorLaptop).scrollIntoView().should('exist').contains(footerDown.Texto[component].texto);
            }

            for(const component in footerDown.TextoURL){
                cy.get(footerDown.TextoURL[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', footerDown.TextoURL[component].elemento, footerDown.TextoURL[component].URL).contains(footerDown.TextoURL[component].texto);
            }

            for(const component in footerDown.Imagenes){
                cy.get(footerDown.Imagenes[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', footerDown.Imagenes[component].elemento, footerDown.Imagenes[component].URL)
            }
        break;

        case "Desktop":
            for(const component in footerDown.Texto){
                cy.get(footerDown.Texto[component].selectorDesktop).scrollIntoView().should('exist').contains(footerDown.Texto[component].texto);
            }

            for(const component in footerDown.TextoURL){
                cy.get(footerDown.TextoURL[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', footerDown.TextoURL[component].elemento, footerDown.TextoURL[component].URL).contains(footerDown.TextoURL[component].texto);
            }

            for(const component in footerDown.Imagenes){
                cy.get(footerDown.Imagenes[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', footerDown.Imagenes[component].elemento, footerDown.Imagenes[component].URL)
            }
        break;
    }
}