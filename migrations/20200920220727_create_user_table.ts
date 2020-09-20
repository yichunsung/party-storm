import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', function (table) {
	  table.increments();
	  table.string('name');
	  table.string('email');
	  table.string('password');
	  table.date('birthday');
	  table.integer('gender');
	  table.string('phone');
	  table.string('address');
	  table.timestamps();
	  console.log('table created!');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTable("users");
}

