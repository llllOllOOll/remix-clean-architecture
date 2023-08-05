import { type Employee } from "~/@core/domain/entities/employee";
import { type EmployeeRepository } from "../../domain/entities/employee.repository";

export const items: Employee[] = [];

export const employeeRepositoryArray = (): EmployeeRepository => {
  return {
    findById: async (id: string) => {
      return items.find((items) => items.id === id);
    },
    insert: async (employee: Employee) => {
      items.push(employee);
      return items[items.length - 1];
    },
    findAll(): Promise<Employee[]> {
      return Promise.resolve(items);
    },
  };
};
