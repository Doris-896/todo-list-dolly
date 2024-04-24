- Technology used:

1. Material UI Libs: https://mui.com/material-ui/all-components/
2. Tailwind CSS: https://tailwindcss.com/docs/installation

Standard flow:

1. Checkout new branch from main: git checkout -b feat/{your-work}. For example: `git checkout -b feat/add-input`
2. Add file changes: `git add .` or `git add {file path}`
3. Commit: `git commit -m {commit message}`. For example: `git commit -m "Optimize code base"`
4. Push: `git push origin {branch name}`. For example: `git push origin feat/add-input`. Note: check current branch using `git branch` and find the highlight branch
5. Create pull request in Github GUI
6. Add `cthanh2310` as reviewer
7. `cthanh2310` review.

- In case you got approved and merged, when you implement new task: stand in `main` branch and pull newest code change from `main` branch (`git pull origin main --no-ff`, then the terminal will show the merge message, please type `:wq` and press `enter`) and checkout from main (back to step 1)
- There is conflict here

Note: Coppy in terminal using `ctrl + shift + c`
Switch branch: `git checkout {branch-name}`: For example -> `git checkout main`

branch flow: develop -> staging -> main

When you're in company:

1. `git fetch --all` -> fetching all the changes from remote git to local.
2. `git checkout feat/add-input` -> checkout to target branch.
3. Now you're standing in the branch `git checkout feat/add-input`. Follow the step 2 in the standard flow above to continue developing code base.

---

Resolve conflict:

1. Stand in your branch
2. Pull new code from remote (git pull origin {branch-name} --no-ff)
3. There are two cases

- Conflict: choose current/in-coming/both. Current is code in your local, incoming is code in remote, both -> choose both. Afterward, `git add .` -> `git merge --continue` -> `:wq` and press `enter`.
- No Conflict: then the terminal will show the merge message, please type `:wq` and press `enter`

4. Finish resolving conflict, can continue coding or re-push to remote.
