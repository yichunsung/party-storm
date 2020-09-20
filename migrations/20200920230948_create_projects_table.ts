import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('projects', function (table) {
		table.increments();
		table.string('title');
		table.integer('description');
		table.string('address');
		table.date('start_date');
		table.date('end_date');
		table.string('is_published');
		table.float('latitude');
		table.float('longitude');
		table.string('tel');
		table.timestamps();
		console.log('table created!');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTable("projects");
}

