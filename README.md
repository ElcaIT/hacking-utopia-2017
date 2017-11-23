# Crack The Building Kickstarter

This kickstarter application demonstrates:

 * how to setup a data analysis playground using anaconda
 * expose API from data analyis using flask
 * how to build a simple frontend using **React**, that accesses the exposed data analysis API
 * the kickstart application is far from beening production ready but shows the usage and patterns of the above mentioned points.

## Prerequisites

### Development Environment Setup Data Analysis

 * Follow the instructions here

### Setup NodeJS

You need to have *NodeJS* installed on your machine. A good way to install *NodeJS* on your machine is:

- Unix: [NVM](https://github.com/creationix/nvm)
- Windows: [NVM for Windows](https://github.com/coreybutler/nvm-windows)

Follow the instructions on these pages. *NVM* allows you to also manage different version of *NodeJS* on you machine. Install NodeJS 8.2.1 with `NVM`

### Development tools
Any development tool - *IntelliJ*, *Eclipse*, *Visual Studio Code*... - can be used with the project. For *IntelliJ* the frontend development is strongly recommended. The following plugins should be installed to support the development:

* NodeJS


## Directory / Project layout

In this repository, you will find two folders.

### Data Analysis

For this part you can find more information [here]()

### Flat Size Percentage Application

In the folder `flat-size-percentage` you will find a small demo application that is using the API exposed by the data analysis.

    
## Execution
### General
The application is not production ready. The described setup here fits well for development. For that the following web servers need to be started:

1. Data Analyis Backend
1. Flat Size Percentage Application (React Front End)

### Starting the Data Analysis Backend

Follow the instructions here

### Flat Size Percentage Application

For executing the *React* application the environment provides an (*webpack*) development server which is reachable under [http://localhost:3000/](http://localhost:3000/). The *React* application is based on the [Create React App Starter](https://github.com/facebookincubator/create-react-app). The server will watch the files under `code/frontend/src` and automatically recompile if something changes.

For development the connection to the backend server the development server contains a proxy, which is configured to redirect calls to `/predict/*` to the *Data Analysis Backend*. Note that this is configured in `package.json` which is automatically used when using `npm start`. More information can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development).

#### Command Line
The development server can be started using npm by executing the following command in the `flat-size-percentage` directory:

    npm start


## Using this kickstarter
If you'd like you can clone and reuse this project and adapt it to your needs (throw away non-needed domain classes / modify the frontend / etc). Of course you can also only use this project as a reference or not at all.

## Additional resources
Please check the [LINKS.md](LINKS.md) file for additional resources.