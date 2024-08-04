// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import { Provider } from 'react-redux'
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'
// import { STORE } from '../../src/redux/store'
// import { MemoryRouter } from 'react-router-dom'

Cypress.Commands.add('mount', (component, options = {}) => {
//     const {
//             routerProps = {
//                 initialEntries: ['/']
//             },
//             reduxStore = STORE,
//             ...mountOptions
//         } = options
//     const wrapped =(
//         <Provider store={reduxStore}>
//             <MemoryRouter {...routerProps}>
//                 {component}
//             </MemoryRouter>
//         </Provider>
//     )
    return mount(component, options)
})

// Example use:
// cy.mount(<MyComponent />)