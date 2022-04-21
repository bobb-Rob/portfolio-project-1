function lazygit() {
    git add .
    git commit -a -m "$1"
    git push origin toolbar-branch
}

alias gp=lazygit