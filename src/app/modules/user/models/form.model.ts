import { Input } from "./input.model";

export interface Form {
  key: string,
  name: string,
  state: boolean,
  inputs: Array<Input>
}
