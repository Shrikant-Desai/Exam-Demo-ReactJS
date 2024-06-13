import {
  AccountCircle,
  Article,
  EditNote,
  People,
  PeopleAltOutlined,
} from "@mui/icons-material";

export const teacherDashboardDes = {
  beforeDiv: [
    {
      text: "Create Exam",
      icon: <EditNote />,
      navigate: "teacher/create-exam",
    },
    { text: "Your Exams", icon: <Article />, navigate: "teacher" },
    {
      text: "All Students Data",
      icon: <People />,
      navigate: "teacher/all-students",
    },
    {
      text: "Active Students Data",
      icon: <PeopleAltOutlined />,
      navigate: "teacher/active-students",
    },
  ],
  afterDiv: [
    { text: "Profile", icon: <AccountCircle />, navigate: "teacher/profile" },
  ],
};

export const studentDashboardDes = {
  beforeDiv: [{ text: "All Exams", icon: <EditNote />, navigate: "student" }],
  afterDiv: [
    { text: "Profile", icon: <AccountCircle />, navigate: "student/profile" },
  ],
};
