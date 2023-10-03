import { useEffect, useState } from "react";
import getGitHubRepos from "../utils/github";
import RepoBox from "@/components/RepoBox";

const Project = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getGitHubRepos()
            .then((data) => setRepos(data))
            .catch((error) => console.error(error));
    }, []);
    // console.log(repos.name);

    function handleBack() {
        window.history.back();
        // console.log(window.history.back());
    }
    return (
        <div>
            <h1>My Github Repositories</h1>
            <ul className="flex flex-row gap-5 flex-wrap">
                {repos.map((repo) => (
                    <RepoBox key={repo.id} repo={repo} />
                ))}
            </ul>
            <button onClick={handleBack}> Back </button>
        </div>
    );
};

export default Project;
