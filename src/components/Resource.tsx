import React from "react";

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
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="">{img}</div>
    </div>
  );
};

export default Resource;
