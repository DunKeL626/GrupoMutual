import { HeadUp } from './commands/head_footer_fly_button/head-up';
import { HeadDown } from './commands/head_footer_fly_button/head-down';
import { FooterUp } from './commands/head_footer_fly_button/footer-up';
import { FooterDown } from './commands/head_footer_fly_button/footer-down';
import { FlyBottom } from './commands/head_footer_fly_button/fly-bottom';
import { RedesSociales } from './commands/home/redes-sociales';
import { Banner } from './commands/home/banner';
import { Mutuales } from './commands/home/mutuales';


Cypress.Commands.add('HeadFooterFlyBottom', (size) => {
    HeadUp(size);
    cy.reload();
    HeadDown(size);
    cy.reload();
    FooterUp(size);
    cy.reload();
    FooterDown(size);
    cy.reload();
    FlyBottom(size);
    cy.reload();
});

Cypress.Commands.add('RedesSociales', (size) => {
    RedesSociales(size);
    cy.reload();
});

Cypress.Commands.add('Banner', (size) => {
    Banner(size);
    cy.reload();
});

Cypress.Commands.add('Mutuales', (size) => {
    Mutuales(size);
    cy.reload();
});