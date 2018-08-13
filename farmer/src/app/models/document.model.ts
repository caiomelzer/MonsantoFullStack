import { Deserializable } from "./deserializable.model";

export class Document implements Deserializable{
	documentNumber: string;
	documentType: string

	deserialize(input: any): this {
    	Object.assign(this, input);
    	return this;
  	}
}