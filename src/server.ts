import { Model, Response, Registry, Server, createServer } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import articlesJSON from "./assets/articles.json" assert { type: "json" };
import { Article, ArticleType } from "./components/Article";

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
    },
  });

  return server;
}
