import '@testing-library/jest-dom'
import { vi } from 'vitest'

// jsdom doesn't implement these observer APIs that some components rely on.
const ObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  takeRecords: vi.fn(() => []),
}))

vi.stubGlobal('IntersectionObserver', ObserverMock)
vi.stubGlobal('ResizeObserver', ObserverMock)
