# Contributing

We would love for you to contribute to EtherCSS and help us make this even better! Start reading this document to see it is not difficult as you might have imagined.


## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Building](#building)
- [Style Guide](#style-guide)
- [Code of Conduct](#code-of-conduct)
- [License](#license)


## Open an Issue

[Open an Issue](https://github.com/alexdevero/EtherCSS/issuesnew) to report any problems or improvements. When necessary, use [Codepen](http://codepen.io/) to show the problem. Be sure to include some description to explain the problem.


## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests and attach the link [Codepen](http://codepen.io/) along with the description.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

1. Fork the Github repo: `git clone https://github.com/alexdevero/EtherCSS.git`
1. Create a new branch: `git checkout -b issuenumber-feature-name`
1. Commit your changes: `git commit -m 'issuenumber-feature-name'`
1. Push to the branch: `git push origin my-feature-name`
1. Submit a pull request!

*Note: For issues relating to the site, please use the [ethercss.github.io](https://github.com/alexdevero/EtherCSS.git)*


## Building

First install [Node.js](https://nodejs.org/en/download/), then [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and [Sass](http://sass-lang.com/install) for the build process. Now install all the dependencies, run `npm install` from the project directory. Once you have the dependencies installed, run `gulp build`. This will run the default grunt task which compiles the Sass files into ethercss.css file.


## Style Guide

EtherCSS use [Sass](http://sass-lang.com/) to give super powers to CSS. Look at how the code is being maintained, we must always be consistent. We try to follow best practices as much as possible. In addition, here are some tips you should follow:

- Properties and selectors are sorted in order inspired by [code-guide](https://github.com/mdo/code-guide), oreder of properties is specified in .csscomb.json
- Always use 2 spaces to indentation, no tabs
- Always use single quote, i.e. `content: ''`
- Quote attribute values in selectors, i.e. `input[type='checkbox']`
- Avoid specifying units for zero-values, i.e. `margin: 0`
- Avoid use of `!important` and ids `#selector`
- Use `rem` unit instead of `px`
- Use lowercase and shorthand hex values, i.e. `#fff`
- Use one discrete selector per line in multi-selector rulesets
- Include a single space after colon and after each comma
- Separate each ruleset by a blank line
- Don't use prefixes, there is a task to generate this automatically

```
Sass (scss):
.selector-a,
.selector-b,
.selector-c,
.selector-d[type='text'] {
  box-sizing: border-box
  display: inline-block
  content: ''
  margin-bottom: 0
  margin-left: 5.0rem
  font-family: 'Helvetica-Neue', 'Helvetica', 'Arial', sans-serif
  color: #333
}

.other-selector-a {
  background: #fff
}

.other-selector-b {
  background: #fff
}
```

*Note: This style guide was inspired by [code-guide](https://github.com/mdo/code-guide). EtherCSS uses an `csslintrc.json` file that is used by CSSLint gulp plugin, to enforce these coding standards.*


## Code of conduct

Help us keep EtherCSS open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).


## License

By contributing your code, you agree to license your contribution under the [MIT license](https://github.com/alexdevero/EtherCSS/blob/master/LICENSE.md).
