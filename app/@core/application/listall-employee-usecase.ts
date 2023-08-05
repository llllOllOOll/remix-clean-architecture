import { type EmployeeRepository } from "../domain/entities/employee.repository";

export function listAllEmployeeUseCase(employeeRepository: EmployeeRepository) {
  function execute() {
    return employeeRepository.findAll();
  }

  return { execute };
}
