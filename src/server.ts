import { Model, Response, Registry, Server, createServer } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import articlesJSON from "./assets/articles.json" assert { type: "json" };
import { Article, ArticleType } from "./scripts/Article";

const ArticleModel: ModelDefinition<Article> = Model.extend({});
type AppRegistry = Registry<{ article: typeof ArticleModel }, {}>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    models: {
      article: ArticleModel,
    },

    seeds(server) {
      server.db.loadData(articlesJSON);
    },

    routes() {
      this.namespace = "api";

      this.get("/", (schema: AppSchema, request) => {
        return schema.where(
          "article",
          (article) =>
            article.type === ArticleType.Article && article.preview != ""
        );
      });

      this.get("/category/:tag", (schema: AppSchema, request) => {
        const tag = request.params.tag;
        return schema.where(
          "article",
          (article) =>
            article.type === ArticleType.Article && article.tags.includes(tag)
        );
      });

      this.get("/side/articles", (schema: AppSchema, request) => {
        return schema.where("article", {
          preview: "",
          type: ArticleType.Article,
        });
      });

      this.get("/side/quizzes", (schema: AppSchema, request) => {
        return schema.where("article", { type: ArticleType.Quiz });
      });

      this.get("/articles/:articleid", (schema: AppSchema, request) => {
        const articleid = request.params.articleid;
        console.log(`params.id: ${articleid}`);
        return schema.where("article", { id: articleid });
      });

      this.get("/articles/random", (schema: AppSchema, request) => {
        let allArticles = schema.where(
          "article",
          (article) => article.preview != ""
        );
        let index = Math.floor(Math.random() * allArticles.length);
        if (index == 0) {
          index++;
        }
        return allArticles.slice(index - 1, index);
      });
    },
  });

  return server;
}
