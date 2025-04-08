import { Link, Outlet } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Rich Text Editor Playground" }];
}

export default function Main() {
  return (
    <div className="flex flex-col items-center h-screen py-8">
      <div className="text-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">Rich Text Editor Playground</h1>
        </Link>
        <p className="italic mt-4">Choose your player</p>
      </div>
      <div className="flex gap-4 mt-4">
        <Link
          to="/plate"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Plate
        </Link>
        <Link
          to="/lexical"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Lexical
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
