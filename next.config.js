/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },
    eslint: {
        ignoreDuringBuilds: true,
    
    },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'res.cloudinary.com'
        ]
    }
    
}

module.exports = nextConfig 
