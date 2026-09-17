import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const sops = sqliteTable("sops", {
  id: text("id").primaryKey(),
  code: text("code").notNull().unique(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  minutes: integer("minutes").notNull().default(5),
  summary: text("summary").notNull(),
  steps: text("steps").notNull(),
  evidence: text("evidence").notNull(),
  note: text("note").notNull(),
  archived: integer("archived", { mode: "boolean" }).notNull().default(false),
  updatedBy: text("updated_by").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const cases = sqliteTable("cases", {
  id: text("id").primaryKey(),
  orderId: text("order_id").notNull(),
  issue: text("issue").notNull(),
  fulfillment: text("fulfillment").notNull(),
  notes: text("notes").notNull(),
  status: text("status").notNull().default("Open"),
  nextAction: text("next_action").notNull(),
  dueAt: text("due_at").notNull(),
  createdBy: text("created_by").notNull(),
  createdAt: text("created_at").notNull(),
});
