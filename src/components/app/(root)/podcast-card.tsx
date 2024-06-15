'use client';

import type { PODCAST_DEMO_DATA_ITEM } from '@/config/constants';
import Image from 'next/image';

type Props = PODCAST_DEMO_DATA_ITEM & {};

export function PodcastCard({ imgURL, title, description }: Props) {
  return (
    <div className="cursor-pointer">
      <figure className="group flex flex-col gap-y-2">
        <div className="overflow-hidden rounded-md">
          <Image
            className="aspect-square h-fit w-full transition-transform duration-300 group-hover:scale-110"
            src={imgURL}
            width={174}
            height={174}
            alt={title}
          ></Image>
        </div>

        <figcaption>
          <h3 className="truncate text-base font-bold">{title}</h3>
          <h5 className="truncate text-sm font-normal text-muted-foreground">{description}</h5>
        </figcaption>
      </figure>
    </div>
  );
}
