export enum ArticleType {
  Article = "Article",
  Quiz = "Quiz",
}

export interface Article {
  id: string;
  title: string;
  type: ArticleType;
  tags: string[];
  preview: string;
  image: string;
  content: string;
}

export interface ArticlesContainer {
  articles: Article[];
}
