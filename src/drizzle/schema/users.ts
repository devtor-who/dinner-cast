import { relations } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { podcasts } from './podcasts';

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  profileImageUrl: text('profileImageUrl'),
});

export const usersRelations = relations(users, ({ many }) => ({
  podcasts: many(podcasts),
}));
