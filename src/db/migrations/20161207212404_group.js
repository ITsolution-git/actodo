exports.up = (knex, Promise) => {
  return knex.schema.createTable('group', (table) => {
    table.increments('group_id');
    table.timestamp('created_at', true).defaultTo(knex.fn.now());
    table.dateTime('updated_at', true).defaultTo();
    table.integer('created_by_user_id').notNullable();
    table.string('name').notNullable();
    table.text('description').defaultTo('');
    table.text('welcome').defaultTo('');
    table.decimal('latitude',9,6).defaultTo(0);
    table.decimal('longitude',9,6).defaultTo(0);
    table.boolean('private').notNullable().defaultTo(0);
    table.string('banner_image_file').defaultTo('');
    table.string('group_code');
    table.dateTime('deleted_at');
    table.integer('deleted_by_user_id');
    table.unique('name');
    table.unique('group_code');
    //table.foreign('created_by_user_id').references('user.user_id');
    //table.foreign('deleted_by_user_id').references('user.user_id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('group');
};
