import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const siteName = 'K-Links';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
