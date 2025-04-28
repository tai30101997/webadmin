# Next.js Application in NX Monorepo

This is a **Next.js** application within an **NX monorepo** setup. It is structured to work in a monorepo environment, utilizing Docker for containerization. This repository contains multiple apps and libraries that can be shared across projects.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Building the Application](#building-the-application)
- [Running with Docker](#running-with-docker)
- [Useful Commands](#useful-commands)
- [Folder Structure](#folder-structure)

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your local machine:
- [Node.js](https://nodejs.org/) (v18.x or later) 
- [npm](https://www.npmjs.com/) (package manager)
- [Docker](https://www.docker.com/products/docker-desktop) (for running the app in containers)
- [Docker Compose](https://docs.docker.com/compose/) (for orchestrating multi-container Docker applications)

### Install Dependencies

First, install all the dependencies for the monorepo. Run the following command in the root of the monorepo:

```bash
npm install


To run the dev server for your app, use:

```sh
npx nx dev admin
```

To create a production bundle:

```sh
npx nx build admin
