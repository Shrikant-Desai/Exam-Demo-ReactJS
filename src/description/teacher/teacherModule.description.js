export const ALL_STUDENT_TABLE_FIELDS = [
  { id: "_id", label: "ID", minWidth: 170 },
  { id: "status", label: " Status", minWidth: 100 },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
  },
  {
    id: "action",
    label: "Actions",
    minWidth: 170,
    align: "right",
  },
];
export const ACTIVE_STUDENT_TABLE_FIELDS = [
  { id: "_id", label: "ID", minWidth: 170 },
  // { id: "status", label: " Status", minWidth: 100 },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
  },
  {
    id: "action",
    label: "Actions",
    minWidth: 170,
    align: "right",
  },
];
export const SINGLE_STUDENT_TABLE_FIELDS = [
  // { id: "_id", label: "ID", minWidth: 170 },
  {
    id: "studentId",
    label: "StudentID",
    minWidth: 170,
  },

  {
    id: "subjectName",
    label: "Subject Name",
    minWidth: 170,
  },
  { id: "rank", label: "Rank", minWidth: 100 },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    align: "right",
  },

  {
    id: "resultStatus",
    label: "Result Status",
    minWidth: 170,
    align: "right",
  },
];
export const EXAM_TABLE_FIELDS = [
  { id: "_id", label: "ID", minWidth: 170 },
  { id: "subjectName", label: "Subject Name", minWidth: 100 },
  {
    id: "notes",
    label: "Notes",
    minWidth: 170,
    align: "right",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
  },
  // {
  //   id: "__v",
  //   label: "__V",
  //   minWidth: 170,
  //   align: "right",
  // },
  {
    id: "action",
    label: "Actions",
    minWidth: 170,
    align: "center",
  },
];

export const deleteAlert = "Are you sure you want to delete this exam?";
