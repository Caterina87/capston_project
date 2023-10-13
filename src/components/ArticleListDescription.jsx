const ArticleListDescription = (props) => {
  function createMarkup() {
    return { __html: props.article?.description };
  }

  return (
    <div className=" my-2 ms-3 p-2">
      <h3 className="mb-3" style={{ fontSize: "27px" }}>
        {props.article?.title}
      </h3>

      <div className="lh-base" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
export default ArticleListDescription;
