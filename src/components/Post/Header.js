import React from 'react';

export default function Header({ username, profileSrc }) {
  return (
    <a href="#2">
      <img src={profileSrc} alt={username} /> <p>{username}</p>
    </a>
  );
}
