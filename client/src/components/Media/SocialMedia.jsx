import React from 'react'

export const SocialMedia = ({ links }) => (
  <ul className="flex space-x-4">
    {links.map(link => (
      <li key={link.name}>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <span className="sr-only">{link.name}</span>
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
)
