/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : le site se déploie sur n'importe quel hébergeur
  // (Vercel, Netlify, Cloudflare Pages, OVH, cPanel...) sans serveur Node.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
