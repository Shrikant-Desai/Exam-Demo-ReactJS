export const FORM_DATA = "Data";
export const FORM_ERRORS = "Errors";

export const API_STATUS_SUCCESS = 200;
export const API_STATUS_ERROR = 500;
export const API_STATUS_SESSION_END = 401;
export const API_STATUS_UNAUTHORIZED = 404;
export const API_STATUS_GENERATION_FAILED = 500;

export const LOCAL_LOGIN_DETAILS = "loginDetails";
export const LOCAL_AUTH_TOKEN = "authToken";

export const API_GET = "Get";
export const API_POST = "Post";
export const API_PUT = "Put";
export const API_DELETE = "Delete";

export const USER_FORMS = {
  FORGOT_PASSWORD_PATH: "ForgotPassword",
  RESET_PASSWORD_PATH: "ResetPassword",
  NEW_PASSWORD_PATH: "NewPassword",
  LOGIN_PATH: "SignInForm",
  SIGNUP_PATH: "Signup",
  EDIT_PROFILE_PATH: "EditProfile",
};

export const ROLES = {
  TEACHER: "teacher",
  STUDENT: "student",
  USER: "user",
};

export const EXAM_FORM_ERRORS = {
  ANSWER_ERROR: "Please enter answer",
  OPTION_ERROR: "Please enter option",
  QUESTION_ERROR: "Please enter question",
  SUBJECT_NAME_ERROR: "Please enter subject name",
  DESCRIPTION_ERROR: "Please enter description",
  ALL_QUESTIONS_ERROR: "Please enter details for all questions",
};

export const API_ERRORS = {
  ABORT_ERROR: "AbortError",
  REQUEST_CANCELED: "Request canceled",
  REQUEST_FAILDED: "Request failed",
  GENERATION_FAILDED: "Generation failed",
  GENERATION_SUCCESS: "Generation success",
};
