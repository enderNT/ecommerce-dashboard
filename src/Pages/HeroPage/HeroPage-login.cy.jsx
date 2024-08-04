import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import {STORE} from '../../redux/store'
import { setIsAuthenticated, setUserData } from '../../redux/reducers/user/userSlice';
import HeroPage from './HeroPage';

describe('Given: <HeroPage />', () => {

  beforeEach(() => {
    cy.setCookie('token', 'TOKEN DE PRUEBA');
    cy.mount(
      <Provider store={STORE}>
        <MemoryRouter initialEntries={['/', '/dashboard']}>
          <HeroPage />
        </MemoryRouter>
      </Provider>
    )
    STORE.dispatch(setUserData({
      name: 'juan perez prada',
      username: 'juani300.12xxx',
      email: 'email@mail.com',
      avatar: ''
    }))
    STORE.dispatch(
      setIsAuthenticated(true)
    )
    cy.window().then(win => {
      win.localStorage.setItem('userNickname', STORE.getState().user.userData.username)
      win.localStorage.setItem('userEmail', STORE.getState().user.userData.email)
      win.localStorage.setItem('userName', STORE.getState().user.userData.name)
    })
  })

  it('When: Is login', () => {
    cy.get('[data-cy="revenueText"]').should('exist')
  })
})