import { Document } from './document.model';
import { Address } from './address.model';
import { Deserializable } from "./deserializable.model";


export class Farmer implements Deserializable {
	id: string;
	document: Document;
	name: string;
	address: Address;

	deserialize(input: any) {
	    Object.assign(this, input);
	    return this;
	}
}
