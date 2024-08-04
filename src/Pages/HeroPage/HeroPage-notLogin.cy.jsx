import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import {STORE} from '../../redux/store'
import { setIsAuthenticated, setUserData } from '../../redux/reducers/user/userSlice';
import HeroPage from './HeroPage';
import { authUser } from '../../redux/reducers/user/actions&Thunks';
import { PATH } from '../../utils/api';

describe('Given: <HeroPage />', () => {

  beforeEach(() => {
    cy.intercept(
      'POST',
      PATH.authenticate,
      {fixture: 'user.json'}
    )
    cy.mount(
      <Provider store={STORE}>
        <MemoryRouter initialEntries={['http://localhost:5173/', '/dashboard']}>
          <HeroPage />
        </MemoryRouter>
      </Provider>
    )
  })

  it('When: Renders and not login', () => {
    cy.get('[data-cy="revenueText"]').should('not.exist')
  })
})