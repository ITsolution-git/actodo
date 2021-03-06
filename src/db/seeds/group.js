exports.seed = (knex, Promise) => {
  return knex('group').del()
  .then(() => {
    return Promise.join(
      knex('group').insert({
        group_id: 1,
        created_by_user_id: 1,
        name: 'ACTodo',
        description: 'This group will introduce you to the functioning of the ACTodo App.',
        welcome: 'Welcome to ACTodo! Get to know the app by completing these actions.',
        latitude: '51.5032520',
        longitude: '-0.1278990',
        private: 0,
        banner_image_file: 'https://theinquisitiveloon.files.wordpress.com/2013/04/avatar-the-last-airbender-the-gang-in-earth-colors.jpg',
        group_code: 'ABCD12'
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('group').insert({
        group_id: 2,
        created_by_user_id: 2,
        name: 'ACTodo Action',
        description: 'This is the group where action happens. Join the group to receive actions that we tailor for you.',
        welcome: 'Welcome to the action group! Get started by completing our current actions',
        latitude: '51.5032520',
        longitude: '-0.1278990',
        private: 1,
        banner_image_file: 'https://content-oars.netdna-ssl.com/wp-content/uploads/2015/12/Yosemite.Fran_.jpg',
        group_code: 'ZYXW09'
      })
    );
  })
  .then(() => {
    return Promise.join(
      knex('group').insert({
        created_by_user_id: 2,
        name: 'Test Group 3',
        description: 'Test Group 3',
        welcome: 'Welcome to Test Group 3',
        latitude: '51.5032520',
        longitude: '-0.1278990',
        private: 1,
        banner_image_file: 'https://content-oars.netdna-ssl.com/wp-content/uploads/2015/12/Yosemite.Fran_.jpg',
        group_code: '2345GH',
      })
    );
  })
  // .then(() => {
  //   return Promise.join(
  //     knex('group').insert({
  //       created_by_user_id: 2,
  //       name: 'Test Group 4 Public',
  //       description: 'Test Group 4 is public!',
  //       welcome: 'Welcome to Test Group 4 Public',
  //       latitude: '51.5032520',
  //       longitude: '-0.1278990',
  //       private: 0,
  //       banner_image_file: 'https://content-oars.netdna-ssl.com/wp-content/uploads/2015/12/Yosemite.Fran_.jpg',
  //       group_code: '98765ASDF'
  //     })
  //   );
  // });
};
