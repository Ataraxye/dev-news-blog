import { Button } from "react-bootstrap";
import "../App.css";

interface QuizArticleProps {
  title: string;
}

const QuizArticle = ({ title }: QuizArticleProps) => {
  return (
    <div className="quiz text-center col-12 mb-4 d-flex align-items-center">
      <div className="col">
        <h5 className="m-4 mt-0">{title}</h5>
        <button type="button" className="btn btn-outline-light">
          Faire le test !
        </button>
      </div>
    </div>
  );
};

export default QuizArticle;
