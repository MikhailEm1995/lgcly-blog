import uniq from 'lodash/uniq';

const disallowedSymbols = /[^a-zA-Z0-9]+/g;

export function highlight(text: string, query: string) {
  const words = uniq(query.split(' '));
  const sanitizedWords = words
    .map(word => word.replace(disallowedSymbols, ''))
    .filter(word => word);
  const re = new RegExp(sanitizedWords.join('|'), 'gi');
  return text.replace(
    re,
    wrapTextWithHighlight('$&'),
  );
}

function wrapTextWithHighlight(text: string) {
  return `<span class="highlight">${text}</span>`;
}
