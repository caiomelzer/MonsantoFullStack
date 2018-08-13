import { Deserializable } from "./deserializable.model";

export class Address implements Deserializable{
	street: string;
	state: string;
	address: string;
	country: string;

	deserialize(input: any): this {
    	Object.assign(this, input);
    	return this;
  	}
}
