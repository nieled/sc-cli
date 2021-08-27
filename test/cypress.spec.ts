import * as React from 'react'
import { mount } from '@cypress/react'
import App from '../App'

it('Button', () => {
  mount(<App />)
  cy.get('app').contains('world').click()
})