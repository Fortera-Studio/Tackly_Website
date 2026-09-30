import './site-header.css'
import logoMark from './assets/logo-mark.png'
import { siteConfig } from './config.js'

// Leaves and gold dots, borrowed from the Play Store feature graphic.
const decor = `
  <div class="header-decor" aria-hidden="true">
    <svg class="sprig sprig-left" viewBox="0 0 60 88" preserveAspectRatio="xMidYMax meet">
      <path d="M6 88 C 18 60, 26 40, 44 14" fill="none" stroke="#315c4c" stroke-width="1.4" />
      <path d="M20 58 C 8 52, 4 40, 8 30 C 18 36, 22 46, 20 58Z" fill="#315c4c" />
      <path d="M30 40 C 40 30, 52 30, 58 34 C 52 44, 40 46, 30 40Z" fill="#24382f" />
      <path d="M38 26 C 30 16, 30 6, 34 0 C 42 8, 42 18, 38 26Z" fill="#b9cbbf" />
    </svg>
    <svg class="sprig sprig-fern" viewBox="0 0 60 88" preserveAspectRatio="xMidYMax meet">
      <path d="M30 88 C 30 64, 31 40, 33 8" fill="none" stroke="#a9bfb0" stroke-width="1.2" />
      <path d="M30 70 C 22 70, 16 66, 13 60 C 21 59, 27 63, 30 70Z" fill="#a9bfb0" />
      <path d="M30 70 C 38 69, 44 64, 46 58 C 38 58, 33 63, 30 70Z" fill="#a9bfb0" />
      <path d="M31 52 C 23 52, 18 48, 15 42 C 23 41, 28 45, 31 52Z" fill="#a9bfb0" />
      <path d="M31 52 C 39 51, 44 46, 46 40 C 39 40, 34 45, 31 52Z" fill="#a9bfb0" />
      <path d="M32 34 C 25 33, 21 29, 19 24 C 26 24, 30 28, 32 34Z" fill="#a9bfb0" />
      <path d="M32 34 C 39 33, 43 28, 44 23 C 38 23, 34 28, 32 34Z" fill="#a9bfb0" />
      <path d="M33 16 C 29 12, 29 6, 33 2 C 37 6, 37 12, 33 16Z" fill="#a9bfb0" />
    </svg>
    <svg class="sprig sprig-eucalyptus" viewBox="0 0 70 60" preserveAspectRatio="xMidYMin meet">
      <path d="M2 0 C 14 18, 34 30, 66 34" fill="none" stroke="#8fa89a" stroke-width="1.2" />
      <circle cx="18" cy="20" r="7" fill="#c6d6cb" />
      <circle cx="34" cy="27" r="8" fill="#b3c7ba" />
      <circle cx="52" cy="31" r="7" fill="#c6d6cb" />
      <circle cx="44" cy="17" r="5" fill="#d5e1d8" />
    </svg>
    <svg class="sprig sprig-mid" viewBox="0 0 70 88" preserveAspectRatio="xMidYMax meet">
      <path d="M40 88 C 38 60, 40 36, 48 10" fill="none" stroke="#b9cbbf" stroke-width="1.4" />
      <path d="M39 62 C 28 58, 22 48, 24 40 C 34 44, 40 52, 39 62Z" fill="#b9cbbf" />
      <path d="M42 44 C 52 38, 62 40, 66 44 C 60 52, 50 52, 42 44Z" fill="#b9cbbf" />
      <path d="M45 28 C 38 22, 36 14, 38 8 C 46 12, 48 20, 45 28Z" fill="#b9cbbf" />
    </svg>
    <svg class="sprig sprig-leaf" viewBox="0 0 30 44" preserveAspectRatio="xMidYMax meet">
      <path d="M8 44 C 10 34, 14 26, 20 18" fill="none" stroke="#315c4c" stroke-width="1.2" />
      <path d="M20 18 C 18 8, 22 2, 28 0 C 30 10, 26 16, 20 18Z" fill="#315c4c" />
      <path d="M12 32 C 5 30, 2 25, 2 20 C 8 22, 11 26, 12 32Z" fill="#315c4c" />
    </svg>
    <svg class="sprig sprig-right" viewBox="0 0 60 88" preserveAspectRatio="xMidYMax meet">
      <path d="M54 88 C 42 62, 34 42, 18 16" fill="none" stroke="#315c4c" stroke-width="1.4" />
      <path d="M40 62 C 52 56, 56 44, 52 34 C 42 40, 38 50, 40 62Z" fill="#24382f" />
      <path d="M30 42 C 20 32, 8 32, 2 36 C 8 46, 20 48, 30 42Z" fill="#315c4c" />
      <path d="M22 26 C 30 16, 30 6, 26 0 C 18 8, 18 18, 22 26Z" fill="#b9cbbf" />
    </svg>
    <svg class="sprig sprig-grass grass-logo" viewBox="0 0 30 40" preserveAspectRatio="xMidYMax meet">
      <path d="M13 40 C 12 28, 8 18, 3 10 C 9 16, 13 26, 15 40Z" fill="#b9cbbf" />
      <path d="M16 40 C 17 26, 20 14, 26 4 C 22 16, 19 28, 18 40Z" fill="#c6d6cb" />
      <path d="M14 40 C 14 30, 14 22, 15 12 C 16 22, 17 30, 16.5 40Z" fill="#a9bfb0" />
    </svg>
    <svg class="sprig sprig-grass grass-button" viewBox="0 0 30 40" preserveAspectRatio="xMidYMax meet">
      <path d="M15 40 C 15 32, 16 24, 18 16" fill="none" stroke="#a9bfb0" stroke-width="1.1" />
      <circle cx="18.5" cy="12" r="4.5" fill="#c6d6cb" />
      <circle cx="10.5" cy="24" r="4" fill="#b9cbbf" />
      <circle cx="21.5" cy="29" r="4" fill="#c6d6cb" />
    </svg>
    <svg class="sprig sprig-grass grass-outer" viewBox="0 0 30 40" preserveAspectRatio="xMidYMax meet">
      <path d="M10 40 C 12 30, 16 20, 22 8" fill="none" stroke="#a9bfb0" stroke-width="1.1" />
      <path d="M15 22 C 7 19, 5 11, 7 3 C 13 9, 16 15, 15 22Z" fill="#b9cbbf" />
      <path d="M12.5 31 C 20 29, 25 24, 27 18 C 21 19, 16 24, 12.5 31Z" fill="#c6d6cb" />
      <path d="M22 8 C 21 4, 23 1, 26 0 C 27 4, 25 7, 22 8Z" fill="#a9bfb0" />
    </svg>
    <i class="gold-dot dot-one"></i><i class="gold-dot dot-two"></i><i class="gold-dot dot-three"></i>
  </div>`

/**
 * The header shared by the landing page and the legal pages. Only the
 * right-hand side differs, so the logo and leaves stay put between pages.
 */
export const siteHeader = ({ brandHref, brandLabel, right = '', below = '' }) => `
  <header class="site-header">
    <div class="nav-wrap">
      ${decor}
      <a class="brand" href="${brandHref}" aria-label="${brandLabel}">
        <img class="logo-mark" src="${logoMark}" alt="" />
        <span>${siteConfig.name}</span>
      </a>
      ${right}
    </div>
    ${below}
  </header>`
