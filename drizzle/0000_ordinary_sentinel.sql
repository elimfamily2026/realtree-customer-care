CREATE TABLE `cases` (
	`id` text PRIMARY KEY NOT NULL,
	`order_id` text NOT NULL,
	`issue` text NOT NULL,
	`fulfillment` text NOT NULL,
	`notes` text NOT NULL,
	`status` text DEFAULT 'Open' NOT NULL,
	`next_action` text NOT NULL,
	`due_at` text NOT NULL,
	`created_by` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sops` (
	`id` text PRIMARY KEY NOT NULL,
	`code` text NOT NULL,
	`category` text NOT NULL,
	`title` text NOT NULL,
	`minutes` integer DEFAULT 5 NOT NULL,
	`summary` text NOT NULL,
	`steps` text NOT NULL,
	`evidence` text NOT NULL,
	`note` text NOT NULL,
	`archived` integer DEFAULT false NOT NULL,
	`updated_by` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sops_code_unique` ON `sops` (`code`);