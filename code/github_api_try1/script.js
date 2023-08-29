const getRepoBtn = document.getElementById('get-repos');
const repoList = document.getElementById('repo-list');

getRepoBtn.addEventListener('click', getRepos);

function getRepos () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/iamdebbanerjee/repos');
    xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const repos = JSON.parse(this.responseText);
                // console.log(repos);
                repos.forEach((repo) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
                    // console.log(li);
                    repoList.appendChild(li);
               });                
            }
    }
    xhr.send();
}