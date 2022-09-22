import * as R from "ramda";

const camelize = value =>
  value
    .toLowerCase()
    .split(/[-_,./:\s]/)
    .reduce(
      (word, character) =>
        word + (character.charAt(0).toUpperCase() + character.slice(1))
    );

export const buildSelectOptions = selectOptions =>
  selectOptions.map(selectOption => ({
    label: selectOption,
    value: camelize(selectOption),
  }));
export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
