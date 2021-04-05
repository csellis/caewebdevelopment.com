import React from 'react'
import CookieConsent from 'react-cookie-consent'

const CookiesComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="allowCookies"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '16px' }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
}

export default CookiesComponent
