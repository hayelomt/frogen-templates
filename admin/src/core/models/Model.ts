export class Model {
  id: string;
  created_at?: string;
  updated_at?: string;

  constructor({
    id,
    created_at,
    updated_at,
  }: {
    id: string;
    created_at?: string;
    updated_at?: string;
  }) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
