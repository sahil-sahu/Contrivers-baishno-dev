import React from "react";
import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://baishnodevibuilder.com";

//   const staticPaths = fs
//     .readdirSync("pages")
//     .filter((staticPage) => {
//       return ![
//         "api",
//         "product",
//         "_app.js",
//         "_document.js",
//         "404.js",
//         "sitemap.xml.js",
//       ].includes(staticPage);
//     })
//     .map((staticPagePath) => {
//       return `${BASE_URL}/${staticPagePath}`;
//     });

//   const dynamicPaths = [`${BASE_URL}/product/1`, `${BASE_URL}/product/2`];

//   const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        
              <url>
                <loc>https://baishnodevibuilder.com/about.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/auth.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/contacts.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/index.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/myprojects.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/projects</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/sitemap.xml.jsx</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/terms-and-conditions.js</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/product/1</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
              <url>
                <loc>https://baishnodevibuilder.com/product/2</loc>
                <lastmod>2022-07-17T16:33:40.705Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            
      </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;