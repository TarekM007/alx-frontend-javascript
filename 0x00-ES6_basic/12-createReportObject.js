export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread the employeesList into allEmployees
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Return the number of departments
    },
  };
}
