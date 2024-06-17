import {
  AccountCircle,
  Dashboard,
  EditNote,
  People,
  PeopleAltOutlined,
} from "@mui/icons-material";

export const teacherDashboardDes = {
  beforeDiv: [
    { text: "Dashboard", icon: <Dashboard />, navigate: "/dashboard" },
    {
      text: "Create Exam",
      icon: <EditNote />,
      navigate: "/create-exam",
    },
    {
      text: "All Students Data",
      icon: <People />,
      navigate: "/all-students",
    },
    {
      text: "Active Students Data",
      icon: <PeopleAltOutlined />,
      navigate: "/active-students",
    },
  ],
  afterDiv: [
    { text: "Profile", icon: <AccountCircle />, navigate: "/teacher/profile" },
  ],
};

export const studentDashboardDes = {
  beforeDiv: [
    { text: "Dashboard", icon: <Dashboard />, navigate: "/dashboard" },
  ],
  afterDiv: [
    { text: "Profile", icon: <AccountCircle />, navigate: "/student/profile" },
  ],
};
