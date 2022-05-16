import Head from 'next/head';

function makeTitle(title: string, name: string) {
  return title === name ? title : `${title} - ${name}`;
}

export default function Meta({
  title = `chainUI`,
  name = `chainUI`,
  description = `a reflection of your onchain decision making presented in the form of a NFT gasboiii`,
  children,
}: any) {
  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <title key="title">{makeTitle(title, name)}</title>
      <meta
        key="og_title"
        property="og:title"
        content={makeTitle(title, name)}
      />
      <meta
        key="tw_title"
        name="twitter:title"
        content={makeTitle(title, name)}
      />
      {description && (
        <>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      <meta key="og_image" property="og:image" content="image/meta.png" />
      <meta key="tw_card" name="twitter:card" content="summary_large_image" />
      <meta key="tw_image" name="twitter:image" content="image/meta.png" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="theme-color" content="#fff" />
      {children}
    </Head>
  );
}
