import { connect } from "@/Database/Db";
import Blog from "@/models/blog";

export default async function sitemap() {
  await connect();

  // Fetch all blogs
  const blogs = await Blog.find().select("permalink updatedAt");

  // Base URL of your site
  const baseUrl = "https://barbendingmachinesupplier.com";

  // Static routes you always want in sitemap
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1.0, // Home is most important
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.6,
    },
  ];

  // Blog routes (dynamic)
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.permalink}`,
    lastModified: blog.updatedAt || new Date(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
