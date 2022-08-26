import type { Comment } from "./Comment";
import type { User } from "./User"

export type Chat = {
    currentUser: User;
    comments: Array<Comment>;
}