export interface Input {
  key: string,
  label: string,
  value?: any,
  required: boolean,
  type: string,
  options?: { key:string, value: string }[];
}
