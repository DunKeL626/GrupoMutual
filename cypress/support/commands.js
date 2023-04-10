import {HeadUp} from './commands/head-up';
import {HeadDown} from './commands/head-down';
import {FooterUp} from './commands/footer-up';
import {FooterDown} from './commands/footer-down';
import {FlyBottom} from './commands/fly-bottom';

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