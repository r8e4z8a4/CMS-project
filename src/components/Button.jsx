import { Link } from "react-router";

export default function Button({text,to}) {
  return (
    <Link to={to}>
      <button className="primary-bg px-4 py-2 text-sm focus:ring-0">{text}</button>
    </Link>
  )
}
