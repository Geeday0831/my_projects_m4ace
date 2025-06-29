const mongoose = require('mongoose');

const url = 'mongodb://'

const client = new MongoClient(url);

async function mongoConnect() {
    try {
        await client.connect();
        console.log('connected to mongoDB');
    } catch (error) {
        console.error('error occured failed to connect')
    }finally{
        await client.close()
    }
}
mongoConnect();