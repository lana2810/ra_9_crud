import React from "react";

function Button({ title, func }) {
  return (
    <button
      type="submit"
      className="block px-4 py-2 font-semibold rounded-md bg-gray-500 text-white ml-auto"
      onClick={func}
    >
      {title}
    </button>
  );
}

export default Button;
