import { STATES } from "../../store/rootReducer";

export const selectAllBlogs = state => state[STATES.BLOG].list;
export const selectBlogById = state => state[STATES.BLOG].read;
export const selectCreateBlogState = state => state[STATES.BLOG].create;
