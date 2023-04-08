import fotterUp from '../../fixtures/Footer-up.json'

export function FooterUp(zise){

    if(zise >= 1100){   
        
        for(const component in fotterUp.Desktop.H2){
            cy.log(`Se valida el componente ${component}`);
            cy.get(fotterUp.Desktop.H2[component].selector).scrollIntoView().should('exist').and('have.attr', fotterUp.Desktop.H2[component].elemento, fotterUp.Desktop.H2[component].URL).contains(fotterUp.Desktop.H2[component].texto);
        }   

        for(const component in fotterUp.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(fotterUp.Desktop[component].selector).scrollIntoView().should('exist').and('have.attr', fotterUp.Desktop[component].elemento, fotterUp.Desktop[component].URL).contains(fotterUp.Desktop[component].texto);
        }   

    }else{

        cy.get(fotterUp.LogoGrupoMutual.selector).scrollIntoView().should('exist').and('have.attr',fotterUp.LogoGrupoMutual.elemento,fotterUp.LogoGrupoMutual.URL);
        cy.get(fotterUp.BotonDespliegueMenu.selector).scrollIntoView().should('exist').click();
        
        for(const component in fotterUp.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(fotterUp.Responsive[component].selector).scrollIntoView().should('exist').and('have.attr', fotterUp.Responsive[component].elemento, fotterUp.Responsive[component].URL).contains(fotterUp.Responsive[component].texto);
        }
    }  
}