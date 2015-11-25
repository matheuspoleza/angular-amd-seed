# beginner-angular-amd  ![travis](https://travis-ci.org/matheuspoleza/beginner-angular-amd.svg?branch=master)

Its a sample angularAMD app. Its provide all structure necessary, include:
- [x] [Unit Testing](#unit)
- [x] [Build System](#build)
- [x] [Editor Config](#editor)
- [ ] [Interface Testing - dalekjs](#interface)

## What is angularAMD?
AngularAMD is an utility that facilitates the use of RequireJS in AngularJS applications supporting on-demand loading of 3rd party modules such as angular-ui.
Check it out: [AngularAMD repository](https://github.com/marcoslin/angularAMD)

## Why write modular angular app?
- Provides a clear proposal for how to approach defining flexible modules.
- Significantly cleaner than the present global namespace and script tag solutions many of us rely on. There's a clean way to declare stand-alone modules and dependencies they may have.
- Module definitions are encapsulated, helping us to avoid pollution of the global namespace.
- It's possible to lazy load scripts if this is needed.

## Install

### Install dependencies

```sh
$ npm install
```
### Install grunt (if necessary)

```sh
$ npm install -g grunt-cli
```

### Building project

```sh
$ grunt build
```

## Getting started

```sh
$ grunt start
```

### Thats all! See server running :smile:
![server running](assets/localhost.png)

### Running Unit tests

```sh
$ grunt test
```

## Contribution

Read the Guidelines:
[Contribution](https://github.com/matheuspoleza/begginer-amd/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) © Matheus Poleza.
