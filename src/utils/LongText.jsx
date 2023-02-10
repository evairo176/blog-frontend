import React from "react";
import { useState } from "react";

function LongText({ content, limit }) {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <button onClick={showLess}>Read less</button>
      </div>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = (
    <div
      dangerouslySetInnerHTML={{ __html: content.substring(0, limit) + "..." }}
    ></div>
  );

  return (
    <div>
      {toShow}
      <button className="btn btn-more-kdawd" onClick={showMore}>
        Read more
      </button>
    </div>
  );
}

export default LongText;
