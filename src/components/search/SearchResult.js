import React from "react";
import { Link } from "gatsby";

const SearchResult = ({ result, isLast }) => {
  return (
    <Link to="/artist/">
      <div className="flex items-center cursor-pointer p-4 transition duration-300 hover:bg-black-50 hover:bg-opacity-30">
        <div className="h-10 w-10">
          <img src={result.image} className="object-cover" />
        </div>
        <div className="flex items-center ml-4 text-xs text-black-500">
          <span className="font-bold">{result.name}</span>
          <span className="h-3 bg-black-500 w-px mx-2"></span>
          <span>{result.handle}</span>
        </div>
      </div>
      {!isLast && (
        <span className="w-9/12 bg-black-50 opacity-30 h-px mx-auto block"></span>
      )}
    </Link>
  );
};

export default SearchResult;
