export const mapCharacters = (values) => {
  const mappedCharacters = values.map((character) => ({
    name: character.name,
    description: character.description,
    id: character.id,
    avatar: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    series: character.series.items,
    comics: character.comics.items,
  }));

  return mappedCharacters;
};

export const mapCharacterInfo = (value) => {
  const mappedCharacterInfo = {
    name: value[0].name,
    avatar: `${value[0].thumbnail.path}.${value[0].thumbnail.extension}`,
    series: value[0].series.items,
    comics: value[0].comics.items,
  };

  return mappedCharacterInfo;
};

export const mapComics = (values) => {
  const mappedComics = values.map((comic) => ({
    name: comic.title,
    comicImage: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
  }));

  return mappedComics;
};
