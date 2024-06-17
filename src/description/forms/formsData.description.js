import SendIcon from "@mui/icons-material/Send";
import {
  EMAIL_REGEX,
  NAME_ADVANCE_REGEX,
  PASSWORD_REGEX,
} from "../../utils/regEx";
import { Email, Lock, Person } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
export const ERRORS_MSG_USERFORM = {
  NAME: {
    LAST_NAME_EMPTY: "Please enter last name.",
    NOT_VALID:
      "Name is not valid.(Use only characters or May be entered name is too long)",
    SPACE_ERROR: "Use only letters and avoid extra spaces.",
  },
  PASSWORD: {
    NOT_VALID: "Password must be between 6 and 30 characters long.",
  },
  EMAIL: {
    NOT_VALID: "Invalid email address. Please use the format: abc@xyz.com.",
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
      value: "Role",
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
    value: "Sign Up",
    rulesData: [],
    // endIcon: <SendIcon />,
  },
  // {
  //   identifier: "button",
  //   type: "reset",
  //   value: "Reset",
  //   variant: "secondary",
  //   rulesData: [],
  // },
];
export const loginFormArray = [
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
    rulesData: [
      {
        regEx: PASSWORD_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.PASSWORD.NOT_VALID,
      },
    ],
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
    value: "Log in",
    rulesData: [],
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

export const forgotPasswordFormArray = [
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
    // endIcon: <SendIcon />,
  },
];
export const editProfileFormArray = [
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
    value: "Submit",
    rulesData: [],
    // endIcon: <SendIcon />,
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
    // endIcon: <SendIcon />,
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
    value: "Reset Password",
    rulesData: [],
    // endIcon: <SendIcon />,
  },
];

export const createExamFormArray = [
  {
    type: "labeledInput",
    fieldName: "subjectName",
    labelProps: {
      value: "Subject Name",
      className: "form-group",
    },
    inputProps: {
      id: "subjectName",
      name: "subjectName",
      autoComplete: "on",
      size: "small",
      type: "text",
      placeholder: "Enter subject name.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },
  {
    type: "labeledInput",
    fieldName: "notes",
    labelProps: {
      value: "notes",
      className: "form-group",
    },
    inputProps: {
      id: "notes",
      name: "notes",
      autoComplete: "on",
      size: "small",
      type: "text",
      placeholder: "Enter Notes.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
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
    value: "Create Exam",
    rulesData: [],
    // endIcon: <SendIcon />,
  },
];

export const questionFormArray = [
  {
    type: "labeledInput",
    fieldName: "question",
    labelProps: {
      value: "Question ",
      className: "form-group",
    },
    inputProps: {
      id: "question",
      name: "question",
      autoComplete: "on",
      type: "text",
      size: "small",
      placeholder: "Enter Question.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },

  {
    type: "labeledInput",
    fieldName: "option1",
    labelProps: {
      value: "Option-1",
      className: "form-group",
    },
    inputProps: {
      id: "option1",
      name: "option1",
      autoComplete: "on",
      type: "text",
      size: "small",
      placeholder: "Enter option - 1.",
      className: "form-control",
    },

    gridValues: {
      xs: 12,
      sm: 12,
      md: 5,
      lg: 5,
      xl: 5,
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
    fieldName: "option2",
    labelProps: {
      value: "Option-2",
      className: "form-group",
    },
    inputProps: {
      id: "option2",
      name: "option2",
      autoComplete: "on",
      type: "text",
      size: "small",
      placeholder: "Enter option - 2.",
      className: "form-control",
    },

    gridValues: {
      xs: 12,
      sm: 12,
      md: 5,
      lg: 5,
      xl: 5,
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
    fieldName: "option3",
    labelProps: {
      value: "Option-3",
      className: "form-group",
    },
    inputProps: {
      id: "option3",
      name: "option3",
      autoComplete: "on",
      type: "text",
      size: "small",
      placeholder: "Enter option - 3.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },
  {
    type: "labeledInput",
    fieldName: "option4",
    labelProps: {
      value: "Option-4",
      className: "form-group",
    },
    inputProps: {
      id: "option4",
      size: "small",
      name: "option4",
      autoComplete: "on",
      type: "text",
      placeholder: "Enter option - 4.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },
  {
    type: "labeledInput",
    fieldName: "answer",
    labelProps: {
      value: "Answer",
      className: "form-group",
    },
    inputProps: {
      id: "answer",
      name: "answer",
      size: "small",
      autoComplete: "on",
      type: "text",
      placeholder: "Enter answer.",
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
        regEx: NAME_ADVANCE_REGEX,
        errorMessage: ERRORS_MSG_USERFORM.NAME.SPACE_ERROR,
      },
    ],
  },
  {
    identifier: "button",
    type: "button",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },
    variant: "contained",
    value: "Previous",
    rulesData: [],
    // endIcon: <SendIcon />,
  },
  {
    identifier: "button",
    type: "button",
    gridValues: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 12,
      xl: 12,
    },

    variant: "contained",
    value: "Next",
    rulesData: [],
    // endIcon: <SendIcon />,
  },
];
export const formSXObject = {
  sxMainForm: {
    width: { xs: "70vw", sm: "50vw", md: "35vw", lg: "30vw" },
    height: "100%",
    padding: "10px",
    borderRadius: "10px",
    // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  sxFormname: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: "20px",
  },
};
export const FORM_ERROR_MESSAGE = "There was an error. Please try again";
export const FORM_SUBMIT_MESSAGE = "Form Submitted.";

export const DNF_TABLE_PROPS = {
  columnsArr: [
    {
      id: "data_not_found",
      label: "Data not found",
      minWidth: 170,
      align: "center",
    },
  ],
  rowsArr: [],
  tableHeight: 400,
  tableWidth: 1000,
  isEmpty: true,
};
