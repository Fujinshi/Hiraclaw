import { describe, expect, it } from 'bun:test'
import {
  formatCoAuthorTrailer,
  parseCoAuthor,
  stripMatchingQuotes,
  USAGE,
} from './commit-message.js'

describe('commit-message command helpers', () => {
  it('parses quoted co-author names with a plain email', () => {
    expect(parseCoAuthor('"GPT 5.5" noreply@hiraclaw.dev')).toEqual({
      name: 'GPT 5.5',
      email: 'noreply@hiraclaw.dev',
    })
  })

  it('parses co-author trailers with angle-bracket emails', () => {
    expect(parseCoAuthor('Hiraclaw (gpt-5.5) <noreply@hiraclaw.dev>')).toEqual(
      {
        name: 'Hiraclaw (gpt-5.5)',
        email: 'noreply@hiraclaw.dev',
      },
    )
  })

  it('rejects co-author trailers with empty sanitized names', () => {
    expect(parseCoAuthor('"  " noreply@hiraclaw.dev')).toBeNull()
    expect(parseCoAuthor('"  " <noreply@hiraclaw.dev>')).toBeNull()
  })

  it('strips one pair of matching quotes from custom attribution text', () => {
    expect(stripMatchingQuotes('"Generated with Hiraclaw"')).toBe(
      'Generated with Hiraclaw',
    )
    expect(stripMatchingQuotes("'Generated with Hiraclaw'")).toBe(
      'Generated with Hiraclaw',
    )
    expect(stripMatchingQuotes('"Generated with Hiraclaw')).toBe(
      '"Generated with Hiraclaw',
    )
  })

  it('formats a sanitized co-author trailer', () => {
    expect(
      formatCoAuthorTrailer('Hiraclaw <gpt>\n', '<noreply@hiraclaw.dev>'),
    ).toBe('Co-Authored-By: Hiraclaw gpt <noreply@hiraclaw.dev>')
  })

  it('makes set scope explicit with example text', () => {
    expect(USAGE).toContain(
      'Controls only the attribution text appended after /commit messages.',
    )
    expect(USAGE).toContain(
      '/commit-message set "Generated with Hiraclaw using GPT-5.5"',
    )
    expect(USAGE).not.toContain('/commit-message set-attribution')
  })
})
