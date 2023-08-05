import { createEntityFactory, type Entity } from "~/@core/core/domain/Entity";

type EmployeeProps = {
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Employee = Entity<EmployeeProps>;

export function createEmployeeEntity(
  props: EmployeeProps,
  id?: string
): Employee {
  return createEntityFactory(props, id);
}
