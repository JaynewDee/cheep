import React from "react";
import Tag from "./Tag";

interface ResourceProps {
  id: string;
  name: string;
  img: string;
  href: string;
  tags: string[];
}
const Resource: React.FC<ResourceProps> = ({ id, name, img, href, tags }) => {
  return (
    <div className="resource-container">
      <a className="resource-link" href={href} target="_blank">
        {name}
      </a>
      <hr className="hr-sm" />

      <div className="tags">
        {tags.map((t) => (
          <Tag data={t} key={t} />
        ))}
      </div>
      <div className="">{img}</div>
    </div>
  );
};

export default Resource;
