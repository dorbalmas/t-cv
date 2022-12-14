import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @MinLength(3)
  @Transform(({ value }) => (value as string).toLowerCase())
  //   @Matches(/^[a-z0-9-]+$/, {
  //     message: 'slug must contain only lowercase characters, numbers and hyphens',
  //   })
  slug: string;

  @IsBoolean()
  public?: boolean;
}
