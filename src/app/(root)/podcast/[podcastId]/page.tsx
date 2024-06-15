export const runtime = 'edge';

export default function Page({ params }: { params: { podcastId: string } }) {
  return (
    <section>
      <h1 className="text-xl font-bold">{params.podcastId}</h1>
    </section>
  );
}
