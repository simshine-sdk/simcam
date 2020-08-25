### SimCam Software Development Kit v0.0.7
- A cross-platform runtime service library. Built-in P2P Interface Bridge to transform complex P2P communication process into more general interfaces
- A set of RESTful API interfaces for controlling SimCam. Get live and playback media stream through RTSP.
- Built-in interface documentation and dashboard for interface debugging. We will provide a series of source code to demonstrate how to use a few lines of python code to interact with SimCam and how to develop web applications for SimCam.

### Start Runtime support library
> run application with the default port 8000 and loopback mode
> `./simcam_sdk_env`

> run application with other port and loopback mode
> `./simcam_sdk_env 80`

> run application with other port and LAN mode
> `./simcam_sdk_env 80 -L`
> Note: In LAN mode, the RTSP IP returned through the Restfull interface is still 127.0.0.1, when you need to access RTSP, you need to replace it with the server ip.


### Login the build-in Dashboard
> Open your web browser and visit the following URL:
> <pre>http://127.0.0.1:8000</pre>
> Enter the user account registered on the phone, log in and use Dashboard to test the RESTful interfaces.Every time you log in, the server will verify the account and return a token, which will be used to verify the user interface permissions


### Ongoing development work
- Cross compile the version that runs on the Raspberry Pi

### Release Note
> 2020.08.25 v0.0.7
> - Remove the dependency of ffmpeg library 
> - Added wifi signal strength return
> - Added restart camera  Restful API

> 2020.08.11 v0.0.6
> - Deprecated "ConnectDevice" API. P2P creation process will be completed automatically 

> 2020.08.09 v0.0.5
> - Automatically establish p2p connection after login
> - Establish a p2p connection pool

> 2020.08.01 v0.0.3:
> - Fix the bugs of segment fault in RTSP Server
> - Add HLS live stream support but no audio
> - Deprecated "KeepAlive" API 
> - Refine error response content
> - Add start command to set log path

> 2020.07.08 v0.0.2:
> - Add LAN mode. In this mode, the client can access the service interface through the host IP running the simcam_sdk_env service.

> 2020.07.09 v0.0.2:
> - Add URL Decoder to fix the issuses about Event Redirect Function
> - Add parameter exceeds length error return
