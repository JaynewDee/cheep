import React from "react";
import Tag from "./Tag";

interface ResourceProps {
  id: string;
  name: string;
  img: string;
  details: string;
  href: string;
  tags: string[];
}
const Resource: React.FC<ResourceProps> = ({
  id,
  name,
  details,
  img,
  href,
  tags
}) => {
  return (
    <div className="resource-container">
      <a className="resource-link" href={href} target="_blank">
        {name}
      </a>
      <hr className="hr-sm" />
      <p style={{ fontSize: ".66rem", lineHeight: "1.3" }}>{details}</p>
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
