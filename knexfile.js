// module.exports = {
//
//     development: {
//         client: 'postgresql',
//         connection: {
//             database: 'sampleDB'
//         }
//     }
// };
//

// Update with your config settings.

module.exports = {


    test: {
        client: 'postgresql',
        connection: {
            database: 'sample',

        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations'
        },
        seeds:{
            director: './seeds'
        }

    },

    development: {
        client: 'postgresql',
        connection: {
            database: 'sample',

        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations'
        },
        seeds:{
            director: './seeds'
        }

    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'production_sample',
        //     user:     'username',
        //     password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations'
        },
        seeds:{
            director: './seeds'
        }
    }

};
