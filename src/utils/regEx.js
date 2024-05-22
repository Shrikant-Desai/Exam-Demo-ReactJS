export const NAME_REGEX = new RegExp(/^[a-zA-Z]*$/);
export const ADDRESS_REGEX = new RegExp(/^[a-zA-Z0-9,. ]{5,100}$/);
export const EMPTY_REGEX = new RegExp("^$");
export const MOBILENO_REGEX = new RegExp(/^[0-9]{10}$/);
export const PASSWORD_REGEX = new RegExp(
  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
);
export const EMAIL_REGEX = new RegExp(
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
);
export const NAME_ADVANCE_REGEX = new RegExp(/^[a-zA-Z]+( [a-zA-Z]+)*$/);
export const HOBBIES_REGEX = new RegExp(0);

