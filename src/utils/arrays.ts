export const hasValidContent = <T>(content: T[] | undefined): content is T[] =>
  Array.isArray(content) && content.length > 0;
