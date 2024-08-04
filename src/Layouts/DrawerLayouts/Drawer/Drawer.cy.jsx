import React from 'react'
import Drawer from './Drawer';
import { Provider, useDispatch } from 'react-redux'
import { createBrowserRouter, MemoryRouter, RouterProvider } from 'react-router-dom'
import { ROUTER } from '../../../config/Router'
import {STORE} from '../../../redux/store'
import { setIsAuthenticated, setUserData } from '../../../redux/reducers/user/userSlice';
import HeroPage from '../../../Pages/HeroPage/HeroPage';
import HeroSectionHeader from '../../HeroSectionLayouts/HeroSectionHeader/HeroSectionHeader';

describe('Given: <Drawer />', () => {

  beforeEach(() => {
    // cy.setCookie('token', 'TOKEN DE PRUEBA');
    cy.mount(
      <Provider store={STORE}>
        <MemoryRouter initialEntries={['/', '/products']}>
          <Drawer />
        </MemoryRouter>
      </Provider>
    )
    // STORE.dispatch(setUserData({
    //   name: 'juan perez prada',
    //   username: 'juani300.12xxx',
    //   email: 'email@mail.com',
    //   avatar: ''
    // }))
    // STORE.dispatch(
    //   setIsAuthenticated(true)
    // )
    // cy.window().then(win => {
    //   win.localStorage.setItem('userNickname', STORE.getState().user.userData.username)
    //   win.localStorage.setItem('userEmail', STORE.getState().user.userData.email)
    //   win.localStorage.setItem('userName', STORE.getState().user.userData.name)
    // })
  })

  it('When: Renders first time', () => {
    cy.get('ul > button').should('have.length', 6)
  })

  it('When: click on item list options sidebar', () => {
    const productsItemOpt = cy.get('[data-test-id="productos"]')
    productsItemOpt.click({force: true})
    cy.location('pathname').should('to.contain', '/products')
    // cy.on("url:changed", (newUrl) => {
    //   // expect(newUrl).to.contain("?magic=true")
    // })
  })
})