import { DELETE_ARTICLE_OK, GET_ARTICLES, SELECTED_ARTICLE } from "../action";

const initialState = {
  content: [],
  isloading: true,
  selectedArticle: "",
  deletedArticleId: "",
};

const getArticles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        content: action.payload,
      };
    case SELECTED_ARTICLE:
      return {
        ...state,
        selectedArticle: action.payload,
      };

    case DELETE_ARTICLE_OK:
      return {
        ...state,
        deletedArticleId: action.payload,
      };

    default:
      return state;
  }
};
export default getArticles;
