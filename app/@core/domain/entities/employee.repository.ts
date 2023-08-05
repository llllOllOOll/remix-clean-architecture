import { type Employee } from "./employee";

export interface EmployeeRepository {
  findById(id: string): Promise<Employee | undefined>;
  findAll(): Promise<Employee[]>;
  insert(employee: Employee): Promise<Employee>;
}
