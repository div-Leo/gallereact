# Contributing guideline

First of all, thanks for contributing!!! 🚀

## How Can I Contribute?

### Reporting Bugs 🤕

Before creating bug reports, please be sure to check if a related issue already exist, the create one trying to be the most possible descriptive.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your bug is related to, create an issue on that repository and provide information on how to reproduce the bug.

Explain the problem and include additional details to help maintainers reproduce the problem. 🤓

### Code Contribution 

In order to contribute to this project, fork the repository on your GitHub account, clone it and create a new branch to fix a bug or implement a new feature.

To start the project:

```bash
npm start # to watch the files with webpack
```

`./src` folder contains Galleract component. 

Use `npm link` comand in the main folder to use locally the package. Create your `create-react-app` or use the one inside the `/example` folder, inside the folder run `npm link galleract` in order to provide the component to the app.

Once you are done and you think your code works well, submit a Pull Request.

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Create a descriptive pull request and, if exist, reference the related issue. 
2. Follow the convention of the existing code you are working on.

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### JavaScript Styleguide

Write clean code base on this [guides](https://github.com/ryanmcdermott/clean-code-javascript) and follow the `.eslintrc` rules! 🤓

### Comment Your code

A commented code is always the most clear code. Follow the  [JS doc conventions](https://devdocs.io/jsdoc/about-getting-started) to the comment the part of code you add.

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

