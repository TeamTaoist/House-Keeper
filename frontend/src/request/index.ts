import Strapi, { StrapiOptions } from "strapi-sdk-js";

const options: StrapiOptions = {
  url: "https://hk-strapi.taoist.dev",
};

const strapi = new Strapi(options);


export default strapi;