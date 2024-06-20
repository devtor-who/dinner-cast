'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { GeneratePodcastVoice } from './generate-podcast-voice';
import { GeneratePodcastThumbnail } from './generate-podcast-thumbnail';
import { Button } from '@/components/ui/button';
import { wait } from '@/lib/utils';

const CreatePodcastFormSchema = z.object({
  podcastTitle: z.string(),
  podcastDescription: z.string(),
  aiVoice: z.string(),
});

const AI_VOICES = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

export function CreatePodcastForm() {
  const form = useForm<z.infer<typeof CreatePodcastFormSchema>>({
    resolver: zodResolver(CreatePodcastFormSchema),
    defaultValues: { podcastTitle: '', podcastDescription: '', aiVoice: '' },
  });

  const onAction = form.handleSubmit(async () => {
    await wait(3000);
  });

  return (
    <Form {...form}>
      <form action={() => onAction()} className="mt-8 flex flex-col gap-y-6">
        <fieldset className="flex flex-col gap-y-4" disabled={form.formState.isSubmitting}>
          <FormField
            control={form.control}
            name="podcastTitle"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="font-normal">팟캐스트 제목</FormLabel>
                <FormControl>
                  <Input placeholder="ex) 다시, 책으로..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="aiVoice"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="font-normal">AI 목소리 선택하기</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="원하는 AI 목소리를 선택하세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {AI_VOICES.map((voice) => (
                      <SelectItem className="hover:bg-primary" key={voice} value={voice}>
                        {voice}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <audio className="hidden" autoPlay src={`/voice-samples/${form.getValues().aiVoice}.mp3`}></audio>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="podcastDescription"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="font-normal">설명</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="만들려고하는 팟캐스트를 간단하게 설명해주세요."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className=""></Separator>

          <GeneratePodcastVoice></GeneratePodcastVoice>

          <GeneratePodcastThumbnail></GeneratePodcastThumbnail>

          <Separator className=""></Separator>
        </fieldset>

        <div>
          <Button type="submit" className="w-full text-base" size={'lg'} disabled={form.formState.isSubmitting}>
            생성하기
          </Button>
        </div>
      </form>
    </Form>
  );
}
