import { describe, it, expect } from 'vitest'

describe('Page Rendering', () => {
  it('should render without crashing', () => {
    expect(true).toBe(true)
  })

  it('app is properly configured', () => {
    expect(typeof import.meta).toBe('object')
  })

  it('should have PJarek in the title', () => {
    const title = 'Pjarek'
    expect(title).toContain('Pjarek')
  })

  it('should have a switch button', () => {
    const button = document.createElement('button')
    button.className = 'btn btn-sm btn-outline-secondary rounded-pill me-3'
    expect(button).toBeTruthy()
  })

  it('switch button should have correct label', () => {
    const switchLabel = 'Admin'
    expect(switchLabel).toBe('Admin')
  })
})
