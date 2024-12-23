const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/plateau/:path*',
        destination: 'https://plateau.geospatial.jp/:path*',
      },
      // {
      //   source: '/pla',
      //   destination: 'https://plateau.geospatial.jp',
      // },
    ];
  },
  output: "export"
};

export default nextConfig;