<h1 align="center">
  <p align="center">admindojo.org</p>
  <a href="https://admindojo.org"><img height="300" src="https://admindojo.org/img/dojo_round.png" alt="admindojo"></a>
</h1>

<p align="center">
  <a href="https://circleci.com/gh/admindojo/admindojo-website"><img src="https://circleci.com/gh/admindojo/admindojo-website/tree/master.svg?style=shield" alt="CircleCI Status"></a>
</p>

# Readme
This is the admindojo.org source repo to build the website via github-pages.

# General usage
1. clone
2. change
3. push to master
4. circleci builds html and pushes to branch gh-pages


## update/add training page
Each training contains a `README.md` in `admindojo/admindojo-training/$Trainingname/training/$Trainingname`.
This `README.md` should be used as training page at admindojo.org.
1. copy README.md in /docs
2. rename README.md in $Trainingname.md
3. make sure the header is correct. If not change according to the `inspec.yaml` located in the training directory

````markdown

---
id: $Inspec-name
title: $Inspec-title
---

$Inspec-summary

Training ID: *$Inspec-name*

## Objective

````

4. add page to `website/sidebars.json`


## preview
````bash
cd website
yarn start

````

build with [Docusaurus](https://github.com/facebook/Docusaurus)  