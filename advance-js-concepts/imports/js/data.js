export const studentInfo = {
  name: "Aeliya",
  age: 100,
  class: 1,
  section: "A",
};

export const schoolInfo = {
  name: "DPS",
  address: "Lalitpur",
  totalStudent: 200,
};

export let person = {
  firstName: "Rajesh",
  middleName: "",
  lastName: "Hamal",
  age: 16,
  gender: "Male",
  nationality: "Nepalese",
  profession: "Actor",
  maritalStatus: "Married",
  contactNo: 7645363456,
  email: "rajesh@gmail.com",
};

export const fruits = [
  "Apple",
  "Mango",
  "Watermelon",
  "Banana",
  "Grapes",
  "kiwi",
  "Pear",
];

export default function changeName(newName) {
  studentInfo.name = newName;
}
