### SimCam Software Development Kit v0.0.1
- A cross-platform runtime service library. Built-in P2P Interface Bridge to transform complex P2P communication process into more general interfaces
- A set of RESTful API interfaces for controlling SimCam. Get live and playback media stream through RTSP.
- Built-in interface documentation and dashboard for interface debugging. We will provide a series of source code to demonstrate how to use a few lines of python code to interact with SimCam and how to develop web applications for SimCam.

### Start Runtime support library
> run application with the default port 8000
> `./simcam_sdk_env`

> run application with other port
> `./simcam_sdk_env 80`

### Login the build-in Dashboard
> Open your web browser and visit the following URL:
> <pre>http://127.0.0.1:8000</pre>
> Enter the user account registered on the phone, log in and use Dashboard to test the RESTful interfaces.Every time you log in, the server will verify the account and return a token, which will be used to verify the user interface permissions
