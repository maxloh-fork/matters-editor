import React from 'react'

export default ({ className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="16.5" cy="16.5" r="16" />
      <g transform="translate(8 10)">
        <rect width="17" height="13" rx="2" />
        <path d="M2.587 13l4.36-7.583 2.773 4.839 1.737-2.312L14.413 13" />
        <ellipse cx="13.489" cy="4.153" rx="1.293" ry="1.264" />
      </g>
    </g>
  </svg>
)
