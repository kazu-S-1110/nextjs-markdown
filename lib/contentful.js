import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const fetchEntries = async () => {
  const entries = await client.getEntries({
    content_type: 'skill',
    order: 'sys.createdAt',
  });
  if (entries.items) return entries.items;
};

export const fetchEntry = async (id) => {
  const entry = await client.getEntry(id);
  if (entry) return entry;
};

export const fetchOutputs = async () => {
  const outputs = await client.getEntries({
    content_type: 'output',
    order: 'sys.createdAt',
  });
  if (outputs.items) return outputs.items;
};
