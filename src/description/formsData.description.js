import SendIcon from "@mui/icons-material/Send";
import {
  EMAIL_REGEX,
  NAME_ADVANCE_REGEX,
  PASSWORD_REGEX,
} from "../utils/regEx";
import { Email, Lock, Person } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
export const ERRORS_MSG_USERFORM = {
  NAME: {
    LAST_NAME_EMPTY: "Please enter last name.",
    NOT_VALID:
      "Name is not valid.(Use only characters or May be entered name is too long)",
    SPACE_ERROR: "Use only letters and Avoid extra spaces",
  },
  PASSWORD: {
    NOT_VALID: "Password is valid between [6-30] characters.",
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
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Person />
          </InputAdornment>
        ),
      },
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Enter name",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

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
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        ),
      },
      name: "email",
      type: "text",
      placeholder: "Enter email here",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

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
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },
      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

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
      value: "Select Role",
      className: "form-group",
    },
    inputProps: {
      id: "userrole",

      name: "userrole",
      className: "form-control",
    },
    options: [
      { value: "", name: "---- Select Here ----" },
      { value: "Student", id: "student", name: "Student" },
      { value: "Teacher", id: "teacher", name: "Teacher" },
    ],
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },

    variant: "contained",
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
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        ),
      },
      type: "text",
      placeholder: "Enter email here",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

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
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },

    variant: "contained",
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

export const forgotPasswordForm = [
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
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        ),
      },
      type: "text",
      placeholder: "Enter email here",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [
      {
        regEx: EMAIL_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.EMAIL.NOT_VALID,
      },
    ],
  },

  {
    identifier: "button",
    type: "submit",
    gridValues: {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },

    variant: "contained",
    value: "Send Link to Email",
    rulesData: [],
    endIcon: <SendIcon />,
  },
];
export const newPasswordArray = [
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
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [
      {
        regEx: PASSWORD_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.PASSWORD.NOT_VALID,
      },
    ],
  },

  {
    type: "labeledInput",
    fieldName: "confirmpassword",
    labelProps: {
      value: "Confirm Password",
      className: "form-group",
    },
    inputProps: {
      id: "confirmPassword",
      name: "confirmpassword",
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter confirm password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },

    variant: "contained",
    value: "Submit",
    rulesData: [],
    endIcon: <SendIcon />,
  },
];

export const resetPasswordArray = [
  {
    type: "labeledInput",
    fieldName: "oldpassword",
    labelProps: {
      value: "Old Password",
      className: "form-group",
    },
    inputProps: {
      id: "oldpassword",
      name: "oldpassword",
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter Old password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [],
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
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [
      {
        regEx: PASSWORD_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.PASSWORD.NOT_VALID,
      },
    ],
  },

  {
    type: "labeledInput",
    fieldName: "confirmpassword",
    labelProps: {
      value: "Confirm Password",
      className: "form-group",
    },
    inputProps: {
      id: "confirmPassword",
      name: "confirmpassword",
      autoComplete: "on",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
      },

      type: "password",
      placeholder: "Enter confirm password",
      className: "form-control",
    },
    gridValues: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },

    isRequired: true,
    rulesData: [],
  },

  {
    identifier: "button",
    type: "submit",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },

    variant: "contained",
    value: "Submit",
    rulesData: [],
    endIcon: <SendIcon />,
  },
];
