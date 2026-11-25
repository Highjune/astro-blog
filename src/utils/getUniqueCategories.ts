import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";
import { getSortedPosts } from "./getSortedPosts";
import { slugifyStr } from "./slugify";

type Category = {
  category: string;
  categoryName: string;
  count: number;
};

/**
 * Builds a de-duplicated category list from posts.
 *
 * - Drafts and scheduled posts are excluded via `postFilter()`
 * - `category` is the slug used in URLs; `categoryName` is the original label
 * - Ordered by first appearance in the newest-first post list
 *   (same order as the old Gatsby blog's category tabs)
 */
export function getUniqueCategories(posts: CollectionEntry<"posts">[]) {
  const categories: Category[] = [];
  for (const post of getSortedPosts(posts.filter(postFilter))) {
    const categoryName = post.data.category;
    if (!categoryName) continue;
    const category = slugifyStr(categoryName);
    const found = categories.find(c => c.category === category);
    if (found) found.count += 1;
    else categories.push({ category, categoryName, count: 1 });
  }
  return categories;
}
