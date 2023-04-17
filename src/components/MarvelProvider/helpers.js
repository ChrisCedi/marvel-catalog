export const mapCharacters = (values) => {
  const mappedCharacters = {
    count: values.count,
    total: values.total,
    characters: values.results.map((character) => ({
      name: character.name,
      description: character.description,
      id: character.id,
      avatar: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      series: character.series.items,
      comics: character.comics.items,
    })),
  };

  return mappedCharacters;
};

export const mapCharacterInfo = (value) => {
  const mappedCharacterInfo = {
    name: value[0].name,
    description:
      value[0].description.length > 0
        ? value[0].description
        : `We don´t have information about ${value[0].name}`,
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
    url: comic.urls[0].url,
  }));

  return mappedComics;
};
