# Using the API

In this repository, you will find a minimal API that you can customize to fit your own needs. 

## Getting started

### Prerequisites

  - Have Anaconda with Python 3.6 installed ( https://www.anaconda.com/download/ )

### Starting the api

#### On Windows

Steps to follow to start the api:
  1. Open a command line
  2. In the command line, navigate to this repository
  3. In the command line, run the following commands:

  ```sh
	set FLASK_APP=%cd%\\__init__.py
	set FLASK_DEBUG=1
	set PYTHONPATH=%cd%
	flask run
  ```
  
#### On Linux

Steps to follow to start the api:
  1. Open a command line
  2. In the command line, navigate to this repository
  3. In the command line, run the following commands:

  ```sh
	DIR="$( cd "$( dirname "$0" )" && pwd )"
	FLASK_APP=DIR/__init__.py
	FLASK_DEBUG=1
	PYTHONPATH=DIR
	flask run
  ```

### Testing the api

The api should now be up and running, and you should see the following lines in your console:

```sh
 * Serving Flask app "api"
 * Forcing debug mode on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger pin code: 267-479-419
```

To test the api, open your favorite browser and go to the url: 

  http://127.0.0.1:5000

This should open a web page where the following sentence is displayed: 

  Example of request: http://127.0.0.1:5000/predict?gebiet_name=Knonau&year=2016
  
Finally, to send a request to the api, go to the url:

 http://127.0.0.1:5000/predict?gebiet_name=Knonau&year=2016
 
The indicator 6.6 should now be visible on the webapp, it is the indicator computed by the api for the input:

  gebiet name: Knonau
  year: 2016
 