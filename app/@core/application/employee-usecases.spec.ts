import { employeeRepositoryArray } from "../infra/db/EmployeeRepositoryArray";
import { createEmployeeUseCase } from "./create-employee-usecase";
import { listAllEmployeeUseCase } from "./listall-employee-usecase";

describe("Repository", () => {
  it("should be able to create and save a new employee", async () => {
    const repoEmployee = employeeRepositoryArray();
    const createEmployee = createEmployeeUseCase(repoEmployee);

    const employee = await createEmployee.execute({
      name: "John Doe",
      email: "jonh@mail.com",
    });

    expect(employee).toStrictEqual({
      ...employee,
    });
  });

  it("should be able to list all employee", async () => {
    const repoEmployee = employeeRepositoryArray();
    const listAllEmployee = listAllEmployeeUseCase(repoEmployee);

    const employee = await listAllEmployee.execute();
    expect(employee).toHaveLength(1);
  });
});
