import type { User } from "./User";

export type Comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo?: string;
    replies?: Array<Comment>;
}