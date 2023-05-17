const validation = (input) => {
  let error = {};

  const isImageURL = (url) => {
    const regex = /\.(jpe?g|png)$/i;
    return regex.test(url);
  };

  if (input.name === "") error.name = "the race needs a name";

  if (input.image === "" || !isImageURL(input.image))
    error.image = "the race needs a image";

  if (!input.temperament.length)
    error.temperament = "the race needs a 1 temperament";

  if (Number(input.heightmax) < Number(input.heightmin))
    error.height = "The maximum height cannot be less than the minimum.";

  if (Number(input.weightmax) < Number(input.weightmin))
    error.weight = "The maximum weight cannot be less than the minimum.";

  if (Number(input.lifemax) < Number(input.lifemin))
    error.life = "The maximum life cannot be less than the minimum.";
    
  const uniqueTemperaments = new Set(input.temperament);
  if (uniqueTemperaments.size !== input.temperament.length) {
    error.temperament = "temperaments must be unique";
  }

  return error;
};

export default validation;
