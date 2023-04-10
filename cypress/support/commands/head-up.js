import headUp from '../../fixtures/head-up.json'

export function HeadUp(zise){

    switch (zise) {

        case "Movil":
            cy.get(headUp.URL.LogoHeadGrupoMutual.selectorMovil).should('have.attr',headUp.URL.LogoHeadGrupoMutual.elemento,headUp.URL.LogoHeadGrupoMutual.URL);
            cy.get(headUp.Boton.BotonDespliegueMenu.selectorMovil).scrollIntoView().should('exist').click();

            for(const component in headUp.TextoURL){
                cy.log(`Se valida el componente ${component}`);
                cy.get(headUp.TextoURL[component].selectorMovil).scrollIntoView().should('exist').and('have.attr', headUp.TextoURL[component].elemento, headUp.TextoURL[component].URL).contains(headUp.TextoURL[component].texto);
            }
        break;

        case "Tablet":
            cy.get(headUp.URL.LogoHeadGrupoMutual.selectorMovil).should('have.attr',headUp.URL.LogoHeadGrupoMutual.elemento,headUp.URL.LogoHeadGrupoMutual.URL);
            cy.get(headUp.Boton.BotonDespliegueMenu.selectorTablet).scrollIntoView().should('exist').click();

            for(const component in headUp.TextoURL){
                cy.log(`Se valida el componente ${component}`);
                cy.get(headUp.TextoURL[component].selectorTablet).scrollIntoView().should('exist').and('have.attr', headUp.TextoURL[component].elemento, headUp.TextoURL[component].URL).contains(headUp.TextoURL[component].texto);

            }
        break;

        case "Laptop":
            cy.get(headUp.URL.LogoHeadGrupoMutual.selectorMovil).should('have.attr',headUp.URL.LogoHeadGrupoMutual.elemento,headUp.URL.LogoHeadGrupoMutual.URL);
            
            for(const component in headUp.TextoURL){
                cy.log(`Se valida el componente ${component}`);
                cy.get(headUp.TextoURL[component].selectorLaptop).scrollIntoView().should('exist').and('have.attr', headUp.TextoURL[component].elemento, headUp.TextoURL[component].URL).contains(headUp.TextoURL[component].texto);

            }
        break;

        case "Desktop":
            cy.get(headUp.URL.LogoHeadGrupoMutual.selectorMovil).should('have.attr',headUp.URL.LogoHeadGrupoMutual.elemento,headUp.URL.LogoHeadGrupoMutual.URL);
            
            for(const component in headUp.TextoURL){
                cy.log(`Se valida el componente ${component}`);
                cy.get(headUp.TextoURL[component].selectorDesktop).scrollIntoView().should('exist').and('have.attr', headUp.TextoURL[component].elemento, headUp.TextoURL[component].URL).contains(headUp.TextoURL[component].texto);
            }
        break;
    }
}