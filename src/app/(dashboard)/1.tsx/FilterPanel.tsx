import React from "react";

const FilterPanel = ({ setFilter, setSort }) => (
    <div className="flex justify-between items-center mt-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded-md bg-white shadow-sm text-gray-600"
      >
        <option value="all">All Activities</option>
        <option value="post">Posts</option>
        <option value="reply">Replies</option>
      </select>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded-md bg-white shadow-sm text-gray-600"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
  
  export default FilterPanel;
  