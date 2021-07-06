# create-openapi-repo

A tool for generating multi-file OpenAPI definitions.

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

<p align="center">
<img src="./logo.png" width="500px"/>
</p>

Need to write or contribute to an OpenAPI definition? `create-openapi-repo` can help with that!

## Features

 - OpenAPI 3.0 support
 - Split an existing OpenAPI definition into multiple files
 - Bundle a multi-file definition into a single file
 - Validate your OpenAPI definition using our free [openapi-cli tool](https://github.com/redocly/openapi-cli)
 - Automate deployment of your API reference docs using CI/CD workflows
 - Maintain code samples as separate files
 - Live editing in your editor of choice :heart_eyes:

## Examples
- [Rebilly](https://github.com/Rebilly/RebillyAPI)
- [Thingful](https://github.com/thingful/openapi-spec)
- [Fitbit Plus](https://github.com/TwineHealth/TwineDeveloperDocs)

## Prerequisites

Before you begin, make sure you’ve installed the following prerequisites:

 - [Node.js](https://nodejs.org/)
 - [Github repository](https://help.github.com/articles/create-a-repo/#create-a-new-repository-on-github) (new OpenAPI definitions only)

## Installation

1. Navigate to the location where you want to create the repository.
2. Run one of the following commands:
   - Install `create-openapi-repo` globally:

        ```bash
        npm install -g create-openapi-repo
        ```

   - Install `create-openapi-repo` using [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

        ```bash
        npx create-openapi-repo
        ```

3. Follow the [interactive prompts](https://github.com/Redocly/create-openapi-repo#usage) to complete the installation.

### Upgrading from a prior version

To upgrade from a prior version of `create-openapi-repo`, run the following command in the root folder of your repository:

```bash
npx create-openapi-repo --migrate-2-3
```

**Note:** Plugins aren't included in the migration. You'll need to manually add them to the `transformers` folder.

## Usage

`create-openapi-repo` provides interactive prompts to help guide you through the installation process. Two basic workflows are supported:

### Split an existing OpenAPI definition

The interactive prompts allow you to specify the path to the file on your local machine, as well as rename the API (optional). After you choose to proceed, `create-openapi-repo` initializes the repository and splits your OpenAPI definition into multiple files.

### Create a new OpenAPI definition

The interactive prompts allow you to specify a name for the API and choose whether to create a sub-folder for code sample files. After you choose to proceed, `create-openapi-repo` initializes the repository and populates it with placeholder files and folders. 

## Directory structure

The directory structure will look similar to this:

**Note:** You can modify the directory structure to meet your specific requirements.

```
    ├── .redocly.yaml
    ├── LICENSE
    ├── README.md
    ├── docs
    │   ├── favicon.png
    │   └── index.html
    ├── openapi
    │   ├── README.md
    │   ├── code_samples
    │   │   ├── C#
    │   │   │   └── echo
    │   │   │       └── post.cs
    │   │   ├── PHP
    │   │   │   └── echo
    │   │   │       └── post.php
    │   │   └── README.md
    │   ├── components
    │   │   └── README.md
    │   └── paths
    │       └── README.md
    └── package.json
```

 - `.redocly.yaml`: Configuration file for defining settings for various Redocly tools, including the lint tool and reference docs engine.
 - `openapi`: Top-level folder that contains your OpenAPI definition, `openapi.yaml` entrypoint file, and sub-folders for `paths`, `components`, and `code_samples`.
 - `code_samples`: Folder for organizing code samples into sub-folders, such as C# and PHP.
 - `components`: Folder for organizing reusable components into sub-folders, such as `schema` and `response` objects.
 - `paths`: Folder for organizing path definitions. Each path should be referenced from the `openapi.yaml` entrypoint file.

## Commands

The generated repository installs a dependency for our `openapi-cli` tool which supports the following commands:

 - `npm start`: Starts the preview server
 - `npm run build`: Bundles a multi-file OpenAPI definition into a single file
 - `npm test`: Validates the OpenAPI definition

**Note:** Additional scripted shortcuts are defined in the repository's `package.json` file.

## Contribute

Interested in contributing to this project? Here are some ways you can support us:

 - Submit a pull request.
 - Star us on Github.
 - Tell a friend or colleague about us (or Tweet about us).
 - Write an article or blog post. Let us know by opening an issue with a link to the article.
 - Looking to build a modern documentation workflow? Our [commercial products](https://redoc.ly) can help you maintain and deploy API reference docs and developer portals.

[npm-image]: https://badge.fury.io/js/generator-openapi-repo.svg
[npm-url]: https://npmjs.org/package/generator-openapi-repo
[daviddm-image]: https://david-dm.org/Rebilly/generator-openapi-repo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Rebilly/generator-openapi-repo
