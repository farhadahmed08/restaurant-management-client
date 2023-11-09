const Blog = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is One way data binding?
        </div>
        <div className="collapse-content">
          <p>
            What is a one-way data binding? In one-way data binding information
            flows in only one direction, and is when the information is
            displayed, but not updated. In two-way data binding information
            flows in both directions, and is used in situations where the
            information needs to be updated. They each have their uses, but most
            applications use both.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is NPM in node.js?
        </div>
        <div className="collapse-content">
          <p>
            npm is the worlds largest Software Registry. The registry contains
            over 800,000 code packages. Open-source developers use npm to share
            software. Many organizations also use npm to manage private
            development.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Different between Mongodb database vs mySQL database.
        </div>
        <div className="collapse-content">
          <p>
            MySQL is a relational database system that stores data in a
            structured tabular format. In contrast, MongoDB stores data as JSON
            documents in a more flexible format. Both offer performance and
            scalability, but they give better performance for different use
            cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
