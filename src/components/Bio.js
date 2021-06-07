import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Brad`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Thoughts, code, and tacos of <strong>Brad</strong>, who now wears short shorts or short short shorts.{' '}
          <a href="https://twitter.com/thomsxn">
            Follow my journey on Twitter!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
