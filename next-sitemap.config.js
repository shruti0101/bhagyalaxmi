import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import { products } from "@/Data";

export async function GET() {
  const baseUrl = "https://barbendingmachinesupplier.com";

  // Products
  const productUrls = products?.map((product) => ({
    loc: `${baseUrl}/products/${product.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.8,
  })) || [];

  // Blogs
  await connect();
  const blogs = await Blog.find().select("permalink updatedAt");
  const blogUrls = blogs.map((blog) => ({
    loc: `${baseUrl}/blogs/${blog.permalink}`,
    lastmod: blog.updatedAt ? blog.updatedAt.toISOString() : new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.7,
  }));

  // Static
  const staticUrls = [
    { loc: `${baseUrl}/`, priority: 1.0 },
    { loc: `${baseUrl}/about-us`, priority: 0.7 },
    { loc: `${baseUrl}/contact-us`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
  }));

  const all = [...staticUrls, ...productUrls, ...blogUrls];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  all.forEach((item) => {
    xml += `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>\n`;
  });
  xml += `</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}