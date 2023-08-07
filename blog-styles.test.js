/* 
 * This file contains tests that check whether your solution in style.css is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const { queries } = require('@testing-library/dom');
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const defs = fs.readFileSync(path.resolve(__dirname, './definitions.css'), 'utf8');
const styles = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

jest.dontMock('fs');

describe('The blog page has required style', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML += defs.toString();
    styleElement.innerHTML += styles.toString();
    document.body.appendChild(styleElement)
  });

  test('header styles', function () {
    const header = queries.getAllByRole(document, 'navigation')[0].parentElement
    const style = window.getComputedStyle(header)
    expect(style.padding).toBe('24px')
    expect(style.fontSize).toBe('1.125rem')

    const link = queries.getAllByRole(header, 'link')[0]
    const linkStyle = window.getComputedStyle(link)
    expect(linkStyle.textDecoration).toBe('none')

    const title = document.querySelector('.title')
    const titleStyle = window.getComputedStyle(title)
    expect(titleStyle.textTransform).toBe('uppercase')
    expect(titleStyle.fontWeight).toBe('bold')
    expect(titleStyle.marginLeft).toBe('1rem')
  });

  test('main article styles', function () {
    const infoSpan = document.querySelector('.info span')
    const infoSpanStyle = window.getComputedStyle(infoSpan)
    expect(infoSpanStyle.display).toBe('inline-block')

    const infoLink = document.querySelector('.info a')
    const infoLinkStyle = window.getComputedStyle(infoLink)
    expect(infoLinkStyle.textDecoration).toBe('none')

    const heading = document.querySelector('h1')
    const headingStyle = window.getComputedStyle(heading)
    expect(headingStyle.fontFamily).toBe('"Libre Baskerville", serif')
    expect(headingStyle.marginTop).toBe('10px')

    const text = document.querySelector('main p')
    const textStyle =  window.getComputedStyle(text)
    expect(textStyle.fontSize).toBe('1.125rem')
    expect(textStyle.lineHeight).toBe('1.6')

    const article = document.querySelector('main')
    const articleStyle =  window.getComputedStyle(article)
    expect(articleStyle.margin).toBe('auto')
    expect(articleStyle.maxWidth).toBe('620px')
  });

  test('footer styles', function () {
    const footer = document.querySelector('footer')
    let style = window.getComputedStyle(footer)
    expect(style.padding).toBe('3rem')

    const foothead = document.querySelector('footer h4')
    style = window.getComputedStyle(foothead)
    expect(style.textAlign).toBe('center')
    expect(style.fontSize).toBe('1.25rem')

    const footerText= document.querySelector('footer p')
    style = window.getComputedStyle(footerText)
    expect(style.maxWidth).toBe('500px')
    expect(style.margin).toBe('auto')

  const footerIcons = document.querySelector('footer .social-icons')
    style = window.getComputedStyle(footerIcons)
    expect(style.textAlign).toBe('center')
    expect(style.fill).toBe('var(--footer-text-color)')
  });
})
