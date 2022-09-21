import * as R from "ramda";

const camelize = value =>
  value
    .toLowerCase()
    .split(" ")
    .reduce(
      (word, character) =>
        word + (character.charAt(0).toUpperCase() + character.slice(1))
    );

export const buildSelectOptions = value => ({
  label: value,
  value: camelize(value),
});
export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
