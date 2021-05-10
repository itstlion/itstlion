# It's T.Lion

![GitHub release (latest by date)][badge-latest-release]

## Description

[**It's T.Lion**][itstlion] is the frontend application of the website of [**T.Lion**][tlion-instagram].

### Linked projects

This project is coupled with [**It's T.Lion API**][itstlion-api-repository], which is the backend server's repository.

## Installation

### Requirements

Before installing this repository on your computer, you should have the following requirements to get started:

- [Node.js 14][nodejs]
- [NPM 6][npm].

### Clone

For cloning this repository, you can open a terminal in your target folder and execute the following command line:

```shell
git clone https://github.com/itstlion/itstlion.git
```

It will create a folder called `itstlion` and clone the repository in it.

### Installing dependencies

Now that you have cloned the repository, you have to install the necessary dependencies before running the application. For doing so, you can run the following commands in your terminal:

```shell
cd ./itstlion/app # Move to the application folder
npm clean-install # Install necessary dependencies with NPM
```

### Run

Once you have installed the dependencies, you are now able to run the application on your computer. For doing so, you can run the following command in your terminal in the `app` folder:

```shell
npm start
```

Now, you should be able to visit the website on [`http://localhost:4200`][localhost].

## Contributing

This repository is currently not open for external contributions. Only its maintainer is authorized to update the source code.

In order to contribute to the developer community, [**It's T.Lion**][itstlion] is public for giving examples on how to develop a website using [_Angular_][angular] framework.

## Versioning

This repository use _Git_ as the main versioning tool and follows [_Semantic Versioning_][sem-ver] principles.

## Authors and acknowledgement

Repository created and maintained by [LAMARQUE Loïc][lvmvrquxl].

[angular]: https://angular.io
[badge-latest-release]: https://img.shields.io/github/v/release/itstlion/itstlion?label=Latest%20release&style=for-the-badge
[itstlion]: http://www.itstlion.com
[itstlion-api-repository]: https://github.com/itstlion/itstlion-api.git
[localhost]: http://localhost:4200
[lvmvrquxl]: https://github.com/LVMVRQUXL
[nodejs]: https://nodejs.org
[npm]: https://www.npmjs.com
[sem-ver]: https://semver.org
[tlion-instagram]: https://www.instagram.com/itst.lion
