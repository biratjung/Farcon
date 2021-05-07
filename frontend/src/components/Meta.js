import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To FarCon',
  description:
    'We help you deliver fresh vegetables from the farm at your doostep',
  keywords: 'fresh vegetables, farm',
};

export default Meta;
