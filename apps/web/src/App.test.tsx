import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )

describe('Portfolio', () => {
  it('renders the hero name on the home page', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SITU')
  })

  it('renders the featured projects section', () => {
    renderAt('/')
    expect(screen.getByText('Featured', { exact: false })).toBeInTheDocument()
  })

  it('renders the contact / thank you section', () => {
    renderAt('/')
    expect(screen.getByText('Thank You')).toBeInTheDocument()
  })

  it('renders a Behance case study page', () => {
    renderAt('/work/zusa-waste-management')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ZUSA')
  })

  it('renders a live product case study page', () => {
    renderAt('/work/mycareerweb')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MyCareerWeb')
  })
})
