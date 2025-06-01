import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./const";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import QuizPage from "./pages/QuizPage";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.QUIZ} element={<QuizPage />} />
      <Route path={ROUTES.RESULT} element={<ResultPage />} />
    </Routes>
  );
}
export default App;
