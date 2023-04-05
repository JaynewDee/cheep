export type ResourceStruct = {
  id: string;
  name: string;
  img: string;
  details: string;
  href: string;
  tags: string[];
};

export const Resource = ({
  id,
  name,
  details,
  img,
  href,
  tags
}: ResourceStruct): ResourceStruct => ({
  id,
  name,
  details,
  img,
  href,
  tags
});
