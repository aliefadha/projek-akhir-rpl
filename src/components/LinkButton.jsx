import { Link as LinkRoute } from "react-router-dom";

const LinkButton = (props) => {
  const { children, path } = props;
  return (
    <LinkRoute
      to={path}
      className="border-[2px] px-4 py-2 rounded-xl border-blue-600 mt-2 inline-block hover:bg-blue-600 hover:text-slate-200 transition-all duration-200"
    >
      {children}
    </LinkRoute>
  );
};

export default LinkButton;
