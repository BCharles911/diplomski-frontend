import { Skill } from "./skill";
import { User } from "./user";

export class JobPost {


  jobTitle?: string;
  jobDescription?: string;
  startDate?: Date;
  priceOfHour?: number;
  numberOfHours?: number;
  addressOfJob?: string;
  fixedPrice?: boolean;
  fixedPriceValue?: number;
  numberOfPeople?: number;
  jobPostSkills?: Skill[];
  startTime?: string;
  user?: User;

}
