import Strapi from 'strapi-sdk-javascript';

const apiUrl = 'http://localhost:1337'; // Replace with your Strapi backend URL
const strapi = new Strapi(apiUrl);

export default strapi;