/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicantCreateNestedManyWithoutPositionsInput } from "./ApplicantCreateNestedManyWithoutPositionsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Max,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PositionCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicantCreateNestedManyWithoutPositionsInput,
  })
  @ValidateNested()
  @Type(() => ApplicantCreateNestedManyWithoutPositionsInput)
  @IsOptional()
  @Field(() => ApplicantCreateNestedManyWithoutPositionsInput, {
    nullable: true,
  })
  applicants?: ApplicantCreateNestedManyWithoutPositionsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  priority!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  recruiter!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  vacancies!: number;
}

export { PositionCreateInput as PositionCreateInput };
