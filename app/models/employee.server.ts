import {
  type CreateEmployeeInput,
  createEmployeeUseCase,
} from "~/@core/application/create-employee-usecase";
import { listAllEmployeeUseCase } from "~/@core/application/listall-employee-usecase";
import { employeeRepositoryArray } from "~/@core/infra/db/EmployeeRepositoryArray";

const repoEmployee = employeeRepositoryArray();

export async function getEmployees() {
  const listAllEmployee = listAllEmployeeUseCase(repoEmployee);

  return await listAllEmployee.execute();
}

export async function getEmployeeByEmail() {}

export async function createEmployee({ name, email }: CreateEmployeeInput) {
  const createEmployee = createEmployeeUseCase(repoEmployee);

  const employee = await createEmployee.execute({
    name,
    email,
  });

  return employee;
}
