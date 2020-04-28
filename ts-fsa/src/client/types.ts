export namespace Domain {
  export type Employee = {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    employee_image: string;
  };

  export type data = {
    data: Employee[];
  };
}

export namespace Response {
  export type GetEmployees = Domain.data;
}