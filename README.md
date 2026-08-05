# GitHub Pages Version

This folder contains a public, no-build version of the job-board directory.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html` from this folder.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose the branch that contains `index.html`, usually `main`.
6. Choose `/root` if `index.html` is at the repository root, or `/docs` if you put it inside a `docs` folder.

GitHub will give you a public URL like:

`https://your-username.github.io/your-repo-name/`

## Notes

- This version does not use ChatGPT hosting.
- It does not need a server or build step.
- It is a static directory. It does not crawl job sites automatically.
- To add websites, edit the `jobBoards` list inside `index.html`.
