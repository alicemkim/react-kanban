const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

const CHARACTERS_QUERY = `
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

export const fetchCharacters = async () => {
  const result = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: CHARACTERS_QUERY,
      variables: { page: 1 }, // Just use the character's in first page for now
    }),
  });
  return result.json();
};
