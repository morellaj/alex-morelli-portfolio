import React from 'react';

import ArticleText from './ArticleText';
import ArticleVideo from './ArticleVideo';

export default function ArticleIteration({
  source: { live, code, src },
  caption,
  version,
  learnings
}) {
  let textContent = `<a href=${live} style="text-decoration: none" target="_blank" rel="noopener noreferrer">${version}</a>`;

  if (code) {
    textContent += ` - <a href=${code} style="text-decoration: none" target="_blank" rel="noopener noreferrer">Code</a>`;
  }

  textContent += `<br><b>Learnings</b>: ${learnings}`;

  const video = src ? <ArticleVideo source={src} caption={caption} /> : null;
  return (
    <>
      <ArticleText id={version} content={textContent} />
      {video}
    </>
  );
}
