import { PickType } from "@nestjs/swagger";
import { Comments } from "../comments.entity";

export class CommentsCreateDto extends PickType(Comments, [
    'author',
    'contents'
] as const) {}