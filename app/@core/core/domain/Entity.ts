type EntityProps<T> = {
  id: string;
} & T;

export type Entity<T> = EntityProps<T>;

export function createEntityFactory<T>(props: T, id?: string): EntityProps<T> {
  return {
    id: id ?? crypto.randomUUID(),
    ...props,
  };
}
