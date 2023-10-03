const getGitHubRepos = async () => {
    const token = process.env.GITHUB_TOKEN;

    const apiURL = "https://api.github.com/users/alok-karn/repos";

    try {
        const response = await fetch(apiURL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(
                `GitHub API request failed with status: ${response.status}`
            );
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.error("Error fetching GitHub repos: ", err);
        return [];
    }
};

export default getGitHubRepos;
