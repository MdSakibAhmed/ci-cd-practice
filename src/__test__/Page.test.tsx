import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

 
test('Page', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 3, name: 'Hello Testing' })).toBeDefined()
})