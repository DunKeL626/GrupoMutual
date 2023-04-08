import headUp from '../../fixtures/head-up.json'

export function HeadUp(zise){

    if(zise >= 1100){

        cy.get(headUp.LogoGrupoMutual.selector).scrollIntoView().should('exist').and('have.attr', headUp.LogoGrupoMutual.elemento, headUp.LogoGrupoMutual.URL);
        
        for(const component in headUp.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(headUp.Desktop[component].selector).scrollIntoView().should('exist').and('have.attr', headUp.Desktop[component].elemento, headUp.Desktop[component].URL).contains(headUp.Desktop[component].texto);;
        }   

    }else{

        cy.get(headUp.LogoGrupoMutual.selector).scrollIntoView().should('exist').and('have.attr',headUp.LogoGrupoMutual.elemento,headUp.LogoGrupoMutual.URL);
        cy.get(headUp.BotonDespliegueMenu.selector).scrollIntoView().should('exist').click();
        
        for(const component in headUp.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(headUp.Responsive[component].selector).scrollIntoView().should('exist').and('have.attr', headUp.Responsive[component].elemento, headUp.Responsive[component].URL).contains(headUp.Responsive[component].texto);;
        }
    }  
}