import Markdown from "markdown-to-jsx";
import React from "react";

const MarkdownInput: React.FC<{ content?: string }> = ({
  content = "Type here",
}) => {
  return <Markdown>{content}</Markdown>;
};

export { MarkdownInput };
