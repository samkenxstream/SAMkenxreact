import React from 'react'
import {Pagehead} from '..'
import theme from '../theme'
import {behavesAsComponent, checkExports} from '../utils/testing'
import {render as HTMLRender} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Pagehead', () => {
  behavesAsComponent({Component: Pagehead})

  checkExports('Pagehead', {
    default: Pagehead,
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<Pagehead theme={theme}>Pagehead</Pagehead>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
