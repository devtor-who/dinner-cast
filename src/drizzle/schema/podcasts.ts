import { relations } from 'drizzle-orm';
import { text, integer, sqliteTable, blob, index } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const podcasts = sqliteTable(
  'podcasts',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description').notNull(),
    userId: text('userId')
      .notNull()
      .references(() => users.id),
    author: blob('author', { mode: 'json' }).$type<string[]>().notNull(),
    audioUrl: text('audioUrl'),
    audioDuration: integer('audioDuration', { mode: 'number' }),
    thumbnailUrl: text('thumbnailUrl'),
    voicePrompt: text('voicePrompt'),
    imagePrompt: text('imagePrompt'),
    voiceType: text('voiceType'),
    views: integer('views', { mode: 'number' }).notNull().default(0),
  },
  (table) => {
    return {
      titleIdx: index('podcast_title_idx').on(table.title),
      descriptionIdx: index('podcast_description_idx').on(table.description),
      authorIdx: index('podcast_author_idx').on(table.author),
    };
  },
);

export const podcastsRelations = relations(podcasts, ({ one }) => ({
  user: one(users, {
    fields: [podcasts.userId],
    references: [users.id],
  }),
}));
