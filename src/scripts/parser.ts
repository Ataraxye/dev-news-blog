import { Article, ArticleType } from "./Article";

/*export const parseTextFile = (text: string): Article[] => {
    const lines = text.split('\n');
    const articles: Article[] = [];
    let currentArticle: Partial<Article> = {};
  
    for (const line of lines) {
      if (line.startsWith('- ')) {
        if (!currentArticle.tags) {
            currentArticle.tags = line.split(', ').map(tag => tag.substring(2));
        }
        if (!currentArticle.preview) {
          currentArticle.preview = line.substring(2);
        } else {
          currentArticle.image = line.substring(2);
        }
      } else if (line.trim() !== '') {
        if (currentArticle.title) {
          // Set default values for preview and image if not specified
          if (!currentArticle.preview) {
            currentArticle.preview = '';
          }
          if (!currentArticle.image) {
            currentArticle.image = '';
          }
          articles.push(currentArticle as Article);
        }
        currentArticle = { title: line, tags: [], preview: '', image: '' };
      }
    }
  
    if (currentArticle.title) {
      // Set default values for preview and image if not specified
      if (!currentArticle.preview) {
        currentArticle.preview = '';
      }
      if (!currentArticle.image) {
        currentArticle.image = '';
      }
      articles.push(currentArticle as Article);
    }
  
    return articles;
  };*/
/*
  export const parseTextFile = (text: string): Article[] => {
    const lines = text.split('\n');
    const articles: Article[] = [];
    let currentArticle: Partial<Article> = {};
  
    for (const line of lines) {
      if (line.startsWith('- ')) {
        if (currentArticle.title) {
          if (!currentArticle.tags) {
            currentArticle.tags = [];
          }
  
          if (!currentArticle.preview) {
            currentArticle.preview = line.substring(2);
          } else if (!currentArticle.image) {
            currentArticle.image = line.substring(2);
          } else {
            currentArticle.tags.push(line.substring(2));
          }
        }
      } else if (line.trim() !== '') {
        if (currentArticle.title) {
          if (!currentArticle.tags) {
            currentArticle.tags = [];
          }
  
          if (!currentArticle.preview) {
            currentArticle.preview = '';
          }
          if (!currentArticle.image) {
            currentArticle.image = '';
          }
          articles.push(currentArticle as Article);
        }
  
        const articleTitle = line;
        currentArticle = { title: articleTitle, preview: '', image: '', tags: [] };
      }
    }
  
    if (currentArticle.title) {
      if (!currentArticle.tags) {
        currentArticle.tags = [];
      }
  
      if (!currentArticle.preview) {
        currentArticle.preview = '';
      }
      if (!currentArticle.image) {
        currentArticle.image = '';
      }
      articles.push(currentArticle as Article);
    }
  
    return articles;
  };*/
