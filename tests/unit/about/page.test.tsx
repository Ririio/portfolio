import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import Home from '@/app/about/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    expect(screen.getByText("Hello, I am")).toBeInTheDocument();
  })
})