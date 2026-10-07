/**
 * Tackly website configuration
 *
 * Update links and company details here when they are ready. The rest of the
 * website reads from this file, so you do not need to search through the UI.
 */
export const siteConfig = {
  name: 'Tackly',
  tagline: 'Rideudstyr fortjener flere ture',
  description:
    'Den danske markedsplads for ryttere. Køb og sælg rideudstyr nemt og med god samvittighed.',

  links: {
    appStore: '#download', // Replace with the final App Store URL
    googlePlay: 'https://play.google.com/store/apps/details?id=dk.equilo.app',
    instagram: 'https://www.instagram.com/tackly.dk/',
    facebook: '#', // Replace with the Tackly Facebook URL
    privacy: '/privacy/',
    terms: '/terms/',
    deleteAccount: '/delete-account/',
  },

  contact: {
    email: 'hej@tackly.dk',
    supportEmail: 'support@tackly.dk',
    privacyEmail: 'support@tackly.dk',
    dsaEmail: 'support@tackly.dk',
    companyName: 'Fortera Studio I/S',
    companyWebsite: 'https://fortera-studio-website.pages.dev/',
    address: '', // Left out on purpose; the registered address is public in CVR
    cvr: '46817338',
    phone: '', // Add if this is the normal direct contact channel
  },

  colors: {
    background: '#F7F3EC',
    surface: '#FFFFFF',
    primary: '#315C4C',
    primaryDark: '#24382F',
    primaryLight: '#DDE8E2',
    text: '#1D2A24',
    mutedText: '#69736E',
    border: '#E5DFD5',
    danger: '#B84A4A',
    gold: '#D9A441',
    placeholder: '#E8E3DA',
  },
}
