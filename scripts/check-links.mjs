import { publications } from '../src/utils/constants.js';

const links = publications.verified.flatMap((publication) =>
  publication.links.map((link) => ({
    publication: publication.title,
    label: link.label,
    url: link.url,
  })),
);

async function requestUrl(url) {
  const options = {
    method: 'HEAD',
    redirect: 'manual',
    headers: {
      'user-agent': 'prof-ogbu-portfolio-link-check/1.0',
    },
  };

  let response = await fetch(url, options);

  if (response.status === 405 || response.status === 403) {
    response = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: {
        'user-agent': 'prof-ogbu-portfolio-link-check/1.0',
        range: 'bytes=0-0',
      },
    });
  }

  return response;
}

if (links.length === 0) {
  console.log('No publication links found.');
  process.exit(0);
}

for (const link of links) {
  try {
    const response = await requestUrl(link.url);
    const status = response.status >= 300 && response.status < 400
      ? `redirect ${response.status}`
      : response.status === 200
        ? '200'
        : `error ${response.status}`;

    console.log(`${status} | ${link.publication} | ${link.label} | ${link.url}`);
  } catch (error) {
    console.log(`error | ${link.publication} | ${link.label} | ${link.url} | ${error.message}`);
  }
}
