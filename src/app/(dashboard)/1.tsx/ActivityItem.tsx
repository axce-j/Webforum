import React from "react";

const ActivityItem = ({ activity }) => (
    <div className="bg-white shadow-md p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="text-left">
        <p className="text-gray-600 text-sm mb-2">{new Date(activity.timestamp).toLocaleString()}</p>
        <p className="text-lg font-semibold text-gray-900">{activity.user}</p>
        <p className="text-gray-700">{activity.content}</p>
      </div>
      <span className={`mt-2 md:mt-0 text-xs font-medium px-2 py-1 rounded ${
        activity.type === 'post' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
      }`}>
        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
      </span>
    </div>
  );
  
  export default ActivityItem;
  