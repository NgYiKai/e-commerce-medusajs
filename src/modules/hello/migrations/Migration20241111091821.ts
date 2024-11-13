import { Migration } from '@mikro-orm/migrations';

export class Migration20241111091821 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "my_custom" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "my_custom_pkey" primary key ("id"));');

    this.addSql('create table if not exists "product_surcharge" ("id" text not null, "type" text not null, "value" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "product_surcharge_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "my_custom" cascade;');

    this.addSql('drop table if exists "product_surcharge" cascade;');
  }

}
