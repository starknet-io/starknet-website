const roadmapPosts = [
  {
    slug: "roadmap-1",
    title: "Roadmap 1",
    description: "Roadmap 1 description",
  },
  {
    slug: "roadmap-2",
    title: "Roadmap 2",
    description: "Roadmap 2 description",
  },
  {
    slug: "roadmap-3",
    title: "Roadmap 3",
    description: "Roadmap 3 description",
  },
];

export function getRoadmapPosts() {
  return roadmapPosts;
}

export function getRoadmaPostBySlug(slug: string) {
  return roadmapPosts.find((post) => post.slug === slug);
}
