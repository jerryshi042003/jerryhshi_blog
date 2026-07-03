import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Platform-independent following. The canonical copy of every piece lives
// here on jerryhshi.com; Substack ("Jerry the Goat") is a syndication
// mirror, not the archive.
export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Jerry Shi',
    description: 'Writing — a cumulative body of work.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `/blog/${post.slug}/`,
    })),
  });
}
