# Node Version Manager 
<!--[![Build Status](https://travis-ci.org/creationix/nvm.svg?branch=master)][3]
 [![nvm version](https://img.shields.io/badge/version-v0.34.0-yellow.svg)]
 [4] [![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/684/badge)](https://bestpractices.coreinfrastructure.org/projects/684)
-->
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/2545/badge)](https://bestpractices.coreinfrastructure.org/projects/2545)
# MEAN Stack Angular Nodejs Mongodb[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

This is the MEAN stack development project with angular6, nodejs, expressjs, mongodb using TypeScript,  developed by [Angular CLI](https://github.com/angular/angular-cli) and [visual studio code](https://code.visualstudio.com/) tools.

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 6](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [**T**ypeScript](https://www.typescriptlang.org): is a language for application-scale JavaScript.



Other tools and technologies used:
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/): layout and styles
* [Angular Material](https://material.angular.io): frontend framework
* [Font Awesome](http://fontawesome.io): icons
* [ng2-toastr](https://github.com/PointInside/ng2-toastr): toastr
* [JSON Web Token](https://jwt.io): user authentication
* [Angular JWT](https://github.com/auth0/angular2-jwt/tree/v1.0): JWT helper for Angular
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
and `npm install -g typescript`
3. From project root folder install all the dependencies: `npm i`

### Installation 
``` 
git clone https://github.com/DetaElectPro/MEAN
cd MEAN
cp .env.example .env
npm install
npm run dev #(for development)
```

## RUN
1. Run `mongod` and `mongo` serices (If you get any error like connection faild, just create the folder C:\data\db).
   or `systemtlc start mongodb` or ` service mongod start`on Linux 
2. `npm run dev`: concurrently execute MongoDB, Angular build, TypeScript compiler and Express server.
3. `npm run prod`: run the project with a production bundle and AOT compilation

## Preview
![Preview](https://i.ibb.co/BytDHNQ/Screenshot-from-2019-02-15-17-35-01.png"Preview")

## Author
* [Deta Elect Teem](https://github.com/DetaElectPro)
