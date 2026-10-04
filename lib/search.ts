export type SearchResult = {
  title: string;
  content: string;
  source: string;
};

export async function searchTopic(
  topic: string
): Promise<SearchResult> {
  return {
    title: topic,
    content: `Search result for ${topic} will be available in Sprint-001.`,
    source: "Knowledge Engine",
  };
}