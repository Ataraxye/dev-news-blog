import Article from "../components/Article";

export const parseTextFile = (text: string): Article[] => {
    const lines = text.split('\n');
    const articles: Article[] = [];
    let currentArticle: Partial<Article> = {};
  
    for (const line of lines) {
      if (line.startsWith('- ')) {
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
        currentArticle = { title: line, preview: '', image: '' };
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
  };
  