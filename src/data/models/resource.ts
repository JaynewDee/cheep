export type ResourceStruct = {
  id: string;
  name: string;
  img: string;
  href: string;
  tags: string[];
};

export const Resource = ({
  id,
  name,
  img,
  href,
  tags
}: ResourceStruct): ResourceStruct => ({
  id,
  name,
  img,
  href,
  tags
});
