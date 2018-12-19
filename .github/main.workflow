workflow "New workflow" {
  on = "push"
  resolves = ["npm run lint"]
}

action "npm install" {
  uses = "actions/npm@c555744"
  runs = "npm install"
}

action "npm run lint" {
  uses = "actions/npm@c555744"
  needs = ["npm install"]
  runs = "npm run lint"
}

workflow "New workflow 1" {
  on = "push"
}
