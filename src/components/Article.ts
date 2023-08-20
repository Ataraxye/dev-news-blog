export enum ArticleType {
  Article = "Article",
  Quiz = "Quiz",
}

export interface Article {
  title: string;
  type: ArticleType;
  tags: string[];
  preview: string;
  image: string;
}

export interface ArticlesContainer {
  articles: Article[];
}
