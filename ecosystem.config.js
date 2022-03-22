module.exports = {
    apps: [
        {
            name: 'app',
            script: './build/index.js',
            watch: false,
            force: true,
            env: {
                NODE_ENV: 'production',

                ACCESS_KEY: '74b4babe-791c-4348-b4ff-10e5cf62c6a8',

                DB_HOST: '',
                DB_PORT: 3306,
                DB_USER: 'admin',
                DB_PASSWORD: '',
                DB_DATABASE: 'storageapi',

                AWS_REGION: 'sa-east-1',
                AWS_BUCKET_NAME: '',
                AWS_ACCESS_KEY_ID: '',
                AWS_SECRET_ACCESS_KEY: ''
            },
        },
    ],
};