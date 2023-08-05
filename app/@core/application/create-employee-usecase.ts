import { createEmployeeEntity } from "../domain/entities/employee";
import { type EmployeeRepository } from "../domain/entities/employee.repository";

export function createEmployeeUseCase(employeeRepository: EmployeeRepository) {
  function execute(input: CreateEmployeeInput) {
    const employee = createEmployeeEntity(input);
    return employeeRepository.insert(employee);
  }

  return { execute };
}

export type CreateEmployeeInput = {
  name: string;
  email: string;
};
