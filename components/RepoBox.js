import React from "react";

const RepoBox = ({ key, repo }) => {
    return (
        <li
            key={key}
            className="border-2 border-gray-200 w-52 h-52 rounded-lg shadow-md p-4 bg-slate-100">
            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-center break-all ">
                {repo.name}
            </a>
        </li>
    );
};

export default RepoBox;
