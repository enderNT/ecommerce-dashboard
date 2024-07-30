import React from 'react'
import LoginForm from './LoginForm'

describe('<LoginForm />', () => {

  beforeEach(() => {
    // Given: The loginForm Mounted
    cy.mount(<LoginForm />)
  })

  it('Render the Login Form', () => {
    // Then input username, password & button SignIn are exist
    cy.get('#userUsername').should('exist')
    cy.get('#userPassword').should('exist')
    cy.get('[data-cy="signIn-btn"]').should('exist')
    cy.get('button[data-cy="signIn-btn"]').should('be.disabled')
  })

  it('Button active/inactive', () => {
    // When: An only one input is typed
    cy.get('#userUsername').type('mail@mail.com')
    // Then: Button is disabled
    cy.get('button[data-cy="signIn-btn"]').should('be.disabled')
    // And
    // When: Both inputs are typed
    cy.get('#userPassword').type('password')
    // Then: Button is enabled
    cy.get('button[data-cy="signIn-btn"]').should('be.enabled')
  })

  it.skip('should login successfully with valid credentials', () => {
    // When type correct credentials
    cy.get('#userUsername').type('mail@mail.com')
    cy.get('#userPassword').type('password')
    // Then: Must navigate to /dashboard and
    //And
    // Then unmount component
  })

  it.skip('should show an error message with invalid credentials', () => {
    // When type incorrect credentials
    cy.get('#userUsername').type('mail@mail.com')
    cy.get('#userPassword').type('password')
    // Then: Must show an error
  })
})