'use client';

import { DEFAULT_IMAGE_BLUR_DATA_URL } from '@/config/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { SyntheticEvent } from 'react';
import { useState, type ComponentProps } from 'react';

export function ImageWithPlaceholder({ className, onLoad, alt, ...props }: ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true);

  const onLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad && onLoad(event);
  };

  return (
    <Image
      alt={alt || 'Image'}
      className={cn(className, isLoading ? 'duration-[2s] animate-pulse' : '')}
      placeholder="blur"
      blurDataURL={DEFAULT_IMAGE_BLUR_DATA_URL}
      onLoad={onLoadImage}
      {...props}
    ></Image>
  );
}
