export function getSlug(blogTitle) {
    return blogTitle?.toLowerCase().split(" ").join("-");
}