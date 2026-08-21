import { IsInt, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePlanDto {
  @IsInt()
  @IsPositive()
  id: number = 0;

  @IsString()
  @Length(2, 120)
  name: string = "";

  @IsNumber()
  @IsPositive()
  price: number = 0;
}
