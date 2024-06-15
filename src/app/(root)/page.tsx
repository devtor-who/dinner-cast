import { PodcastCard } from '@/components/app/(root)/podcast-card';
import { PODCAST_DEMO_DATA } from '@/config/constants';

export const runtime = 'edge';

export default async function Page() {
  return (
    <section>
      <h1 className="text-xl font-bold">홈화면</h1>

      <section className="grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-xs:grid-cols-1">
        {PODCAST_DEMO_DATA.map((podcast) => (
          <PodcastCard key={podcast.id} {...podcast}></PodcastCard>
        ))}
      </section>
    </section>
  );
}
