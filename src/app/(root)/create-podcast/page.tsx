import { CreatePodcastForm } from '@/components/app/(root)/create-podcast/create-podcast-form';

export const runtime = 'edge';

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-medium">팟캐스트 만들기</h1>

      <CreatePodcastForm></CreatePodcastForm>
    </section>
  );
}
