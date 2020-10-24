import {ValidationRule} from "../../modules/validator/types";
import {Props} from "../../modules/block/types";

export type PropsInput = Props & { required?: ValidationRule }
