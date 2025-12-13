export const getNumberinRange = (
  n: number,
  data: { max: number; min: number; isNan: number },
) => {
  let newN = n;
  if (isNaN(newN)) newN = data.isNan;
  else if (newN < data.min) newN = data.min;
  else if (newN > 2) newN = 2;

  return newN;
};
