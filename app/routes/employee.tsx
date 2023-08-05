import { type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { createEmployee, getEmployees } from "~/models/employee.server";

export async function loader({ request }: LoaderArgs) {
  return await getEmployees();
}

export async function action({ request }: ActionArgs) {
  const data = await request;
  const employee = await data.json();

  return await createEmployee(employee);
}
