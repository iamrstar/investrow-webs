/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mutual-fund-consultant',
        destination: '/mutual-fund-consultant-in-dhanbad',
        permanent: true,
      },
      {
        source: '/mutual-fund-consultant-dhanbad',
        destination: '/mutual-fund-consultant-in-dhanbad',
        permanent: true,
      },
      {
        source: '/nps-consultant',
        destination: '/nps-consultant-in-jharkhand',
        permanent: true,
      },
      {
        source: '/nps-consultant-jharkhand',
        destination: '/nps-consultant-in-jharkhand',
        permanent: true,
      },
      {
        source: '/nps',
        destination: '/nps-consultant-in-jharkhand',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/investor-services',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/investor-services',
        permanent: true,
      },
      {
        source: '/child-education-planning',
        destination: '/wealth-creation',
        permanent: true,
      },
      {
        source: '/child-wedding-planning',
        destination: '/wealth-creation',
        permanent: true,
      },
      {
        source: '/retirement-planning',
        destination: '/nps-consultant-in-jharkhand',
        permanent: true,
      },
      {
        source: '/life-insurance-consultant-in-ranchi',
        destination: '/investor-services',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
