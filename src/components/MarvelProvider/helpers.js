export const mapCharacters = (values) => {
  const mappedCharacters = values.map((character) => ({
    name: character.name,
    description: character.description,
    id: character.id,
    avatar: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));

  return mappedCharacters;
};