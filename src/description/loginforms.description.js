import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import {
  EMAIL_REGEX,
  NAME_ADVANCE_REGEX,
  PASSWORD_REGEX,
} from "../utils/regEx";
export const ERRORS_MSG_USERFORM = {
  NAME: {
    LAST_NAME_EMPTY: "Please enter last name.",
    NOT_VALID:
      "Name is not valid.(Use only characters or May be entered name is too long)",
    SPACE_ERROR: "Use only letters and Avoid extra spaces",
  },
  PASSWORD: {
    NOT_VALID:
      "Password should contain at least one number and one special character.",
  },
  EMAIL: {
    NOT_VALID: "Email is Not Valid. (Kindly follow this format abc@xyz.com)",
  },
  ADDRESS: {
    LENGTH_ERROR: "Enter your address in [5-100]characters range.",
  },

  SEARCH: {
    NOT_FOUND: "No result found",
  },
};
//   path: "PersonalDetails",
//       type: "subForm",
//       className: "card w-100 lg p-5 pb-1  user-basic-details",
//       xs: "12",
//       subFormArr:

export const signUpFormArray = [
  {
    type: "labeledInput",
    fieldName: "name",
    labelProps: {
      value: "Name",
      className: "form-group",
    },
    inputProps: {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Enter name",
    },
    xs: 12,
    isRequired: true,
    rulesData: [
      {
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },
  {
    type: "labeledInput",
    fieldName: "email",
    labelProps: {
      htmlFor: "email",
      value: "Email",
      className: "form-group",
    },
    inputProps: {
      id: "email",
      name: "email",
      type: "text",
      placeholder: "Enter email here",
      className: "form-control",
    },
    xs: 12,
    isRequired: true,
    rulesData: [
      {
        regEx: EMAIL_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.EMAIL.NOT_VALID,
      },
    ],
  },

  {
    type: "labeledInput",
    fieldName: "password",
    labelProps: {
      value: "Password",
      className: "form-group",
    },
    inputProps: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    xs: 12,
    isRequired: true,
    rulesData: [
      {
        regEx: PASSWORD_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.PASSWORD.NOT_VALID,
      },
    ],
  },
  {
    type: "select",
    fieldName: "userrole",
    labelProps: {
      value: "Role",
      className: "form-group",
    },
    inputProps: {
      id: "userrole",
      name: "userrole",
      className: "form-control",
    },
    options: [
      { value: "", name: "Select Role" },
      { value: "Student", id: "student", name: "Student" },
      { value: "Teacher", id: "teacher", name: "Teacher" },
    ],
    xs: 12,
    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    xs: 6,
    variant: "contained",
    color: "success",
    value: "Submit",
    rulesData: [],
    endIcon: <SendIcon />,
  },
  // {
  //   identifier: "button",
  //   type: "reset",
  //   value: "Reset",
  //   variant: "secondary",
  //   rulesData: [],
  // },
];
export const signInFormArray = [
  {
    type: "labeledInput",
    fieldName: "email",
    labelProps: {
      htmlFor: "email",
      value: "Email",
      className: "form-group",
    },
    inputProps: {
      id: "email",
      name: "email",
      type: "text",
      placeholder: "Enter email here",
      className: "form-control",
    },
    xs: 4,
    isRequired: true,
    rulesData: [
      {
        regEx: EMAIL_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.EMAIL.NOT_VALID,
      },
    ],
  },

  {
    type: "labeledInput",
    fieldName: "password",
    labelProps: {
      value: "Password",
      className: "form-group",
    },
    inputProps: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    xs: 4,
    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    xs: 6,
    variant: "contained",
    color: "success",
    value: "Submit",
    rulesData: [],
    endIcon: <SendIcon />,
  },
  // {
  //   identifier: "button",
  //   xs: 6,
  //   type: "reset",
  //   value: "Reset",
  //   variant: "outlined",
  //   startIcon: <ClearIcon />,
  //   rulesData: [],
  // },
];
