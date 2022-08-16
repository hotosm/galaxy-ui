import React from "react";

// Icon produced by FontAwesome project: https://github.com/FortAwesome/Font-Awesome/
// License: CC-By 4.0

export class InfoIcon extends React.PureComponent {
  render() {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 512 512"
        {...this.props}
      >
        <path
          fill="currentColor"
          d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
        ></path>
      </svg>
    );
  }
}
