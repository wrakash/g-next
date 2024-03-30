/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'guarented-tech.azureedge.net'
            },
            {
                protocol:'https',
                hostname:'www.guarented.com'
            }
        ]
      },
};

export default nextConfig;
