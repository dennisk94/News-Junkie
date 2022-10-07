export const excerptGenerator = (title) => {
    // * If title length is greater than 50 characters, take a shallow copy of the first 15 words and then use the returned value as the excerpt
    if (title.length > 50)
      return title.split(" ").slice(0, 10).join(" ") + "...";
  };