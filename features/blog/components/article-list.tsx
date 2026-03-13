const ArticleList: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
};

const ArticleItem: React.FC = () => {
  return <article className="relative">This is article</article>;
};

export default ArticleList;
