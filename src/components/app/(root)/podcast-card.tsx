'use client';

import { ImageWithPlaceholder } from '@/components/image-with-placeholder';
import { type PODCAST_DEMO_DATA_ITEM } from '@/config/constants';

type Props = PODCAST_DEMO_DATA_ITEM & {};

export function PodcastCard({ imgURL, title, description }: Props) {
  return (
    <div className="cursor-pointer">
      <figure className="group flex flex-col gap-y-2">
        <div className="overflow-hidden rounded-md">
          <ImageWithPlaceholder
            className="aspect-square h-fit w-full transition-transform duration-300 group-hover:scale-110"
            src={imgURL}
            width={174}
            height={174}
            alt={title}
          ></ImageWithPlaceholder>
        </div>

        <figcaption>
          <h1 className="truncate text-lg font-bold">{title}</h1>
          <h2 className="truncate text-sm font-normal text-secondary-foreground/65">{description}</h2>
        </figcaption>
      </figure>
    </div>
  );
}
