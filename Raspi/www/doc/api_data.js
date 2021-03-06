define({ "api": [
  {
    "type": "get",
    "url": "/keepalive",
    "title": "Keepalive",
    "version": "0.0.1",
    "name": "Keepalive",
    "group": "1-UserLogin",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will keep the API session alive ,a new available token will response.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/keepalive",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>the value used to validate user's access right</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expire",
            "description": "<p>timestamp of the expiration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\":\"token_xxxx\",\n    \"expire\":\"1589276531\",\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "1-UserLogin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "version": "0.0.7",
    "name": "Login",
    "group": "1-UserLogin",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>User should login before using other APIs.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "server",
            "description": "<p>the login server. <code>SimHome</code> or <code>星AI</code>, <code>SimHome</code>by default.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl http://127.0.0.1:8000/simcam/login  -d 'name=userName&pwd=userPassword'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>the value used to validate user's access right</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expire",
            "description": "<p>timestamp of the expiration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\":\"token_xxxx\",\n    \"expire\":\"1589276531\",\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "1-UserLogin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Logout",
    "version": "0.0.7",
    "name": "Logout",
    "group": "1-UserLogin",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>Logout SDK Runtime Environment.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/logout",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "1-UserLogin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/connect",
    "title": "ConnectDevice",
    "version": "0.0.7",
    "name": "ConnectDevice",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will try to establish a P2P channel between SimCam and SDK Runtime Environment.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/connect -d 'hardwareid=hardwareidPlaceHolder'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/sdcard/format/:hardwareid",
    "title": "FormatSDCard",
    "version": "0.0.7",
    "name": "FormatSDCard",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will format SDCard.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p><code>&quot;do&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/sdcard/format/:hardwareid -d \"action=do\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/devicemgmt",
    "title": "GetDeviceList",
    "version": "0.0.7",
    "name": "GetDeviceList",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation gets user devices list from the SimCam Server.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of devices information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.name",
            "description": "<p>The name of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.type",
            "description": "<p>The type of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"devices\":[\n      {\"hardwareid\":\"hardwareid1PlaceHolder\",\"name\":\"namePlaceHolder\",\"type\":\"SimCam1s\"},\n      {\"hardwareid\":\"hardwareid2PlaceHolder\",\"name\":\"namePlaceHolder\",\"type\":\"SimCam1s\"}\n    ],\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/devicemgmt/state/:hardwareid",
    "title": "GetDeviceState",
    "version": "0.0.7",
    "name": "GetDeviceState",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will request the state of SimCam.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/state/:hardwareid",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>The state of device:<code>online</code>,<code>private</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "luminance",
            "description": "<p>The value of luminance:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contrast",
            "description": "<p>The value of contrast:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "saturation",
            "description": "<p>The value of saturation:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flip_v",
            "description": "<p>Flip vertically:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flip_h",
            "description": "<p>Flip horizontal:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resolution",
            "description": "<p>Resolution of live stream,&quot;1080&quot; stand for 1080p FHD:<code>&quot;1080&quot;</code>,<code>&quot;720&quot;</code> by default,<code>&quot;360&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nightvision",
            "description": "<p>Enable night vision mode:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tracking",
            "description": "<p>Pedestrian tracking which only available for SimCam with Pan:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdcard",
            "description": "<p>State of SDcard:<code>&quot;normal&quot;</code>,<code>&quot;none&quot;</code>,<code>&quot;bad&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nas",
            "description": "<p>The url of user's Nas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "led",
            "description": "<p>The led state:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rtsp",
            "description": "<p>The RTSP url for the SimCam</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person_det",
            "description": "<p>Detect person:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "car_det",
            "description": "<p>Detect state of Vehicle entering or exiting:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pets_det",
            "description": "<p>Detect dogs and cats:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "face_det",
            "description": "<p>Detect and recognition face :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zone_show",
            "description": "<p>If show the zone area for detection:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monitor_show",
            "description": "<p>If show the object monitoring area:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "h265",
            "description": "<p>Enable H265 encoder for live stream:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lan_mode",
            "description": "<p>Enable Lan Mode which can only see the live stream under the same Lan :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wifi",
            "description": "<p>The ssid to which SimCam is connected</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firmware",
            "description": "<p>The firmware virsion of SimCam</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Name of timezone area</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wifi_signal",
            "description": "<p>Wifi signal strength</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": " HTTP/1.1 200 OK\n{\n     \"state\":\"online\",\n     \"luminance\":\"50\",\n     \"contrast\":\"50\",\n     \"saturation\":\"50\",\n     \"flip_v\":\"off\",\n     \"flip_h\":\"off\",\n     \"resolution\":\"1080\", \"nightvision\":\"on\", \"tracking\":\"off\", \"sdcard\":\"normal\",\n     \"nas\":\"//192.168.1.2/path\",\n     \"led\":\"on\",\n     \"rtsp\":\"rtsp://192.168.1.11/live\",\n     \"person_det\":\"on\",\n     \"car_det\":\"on\",\n     \"pets_det\":\"on\",\n     \"face_det\":\"on\",\n     \"zone_show\":\"off\",\n     \"monitor_show\":\"off\",\n     \"h265\":\"on\",\n     \"lan_mode\":\"off\",\n     \"wifi\":\"name_of_ssid\",\n     \"firmware\":\"20200501\",\n     \"timezone\":\"America/Los_Angeles\",\n     \"wifi_signal\":\"80%\",\n     \"return\":\"success\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/reboot/:hardwareid",
    "title": "Reboot",
    "version": "0.0.7",
    "name": "Reboot",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will clear wifi configuration. SimCam will go to scanning QR Code process.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p><code>&quot;do&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/reboot/:hardwareid -d \"action=do\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/wifi/reset/:hardwareid",
    "title": "ResetWifi",
    "version": "0.0.7",
    "name": "ResetWifi",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will clear wifi configuration. SimCam will go to scanning QR Code process.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p><code>&quot;do&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/wifi/reset/:hardwareid -d \"action=do\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/pan/rotate/:hardwareid",
    "title": "RotatePan",
    "version": "0.0.7",
    "name": "RotatePan",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will rotate one step to left or right. This function only available for SimCam with Pan.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p><code>&quot;left&quot;</code>,<code>&quot;right&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/pan/rotate/:hardwareid -d \"direction=left\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/state/:hardwareid",
    "title": "SetDeviceState",
    "version": "0.0.7",
    "name": "SetDeviceState",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will set the state of SimCam. Only one state can be changed per request.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "luminance",
            "description": "<p>The value of luminance:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contrast",
            "description": "<p>The value of contrast:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "saturation",
            "description": "<p>The value of saturation:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flip_v",
            "description": "<p>Flip vertically:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flip_h",
            "description": "<p>Flip horizontal:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "resolution",
            "description": "<p>Resolution of live video,&quot;1080&quot; stand for 1080p FHD:<code>&quot;1080&quot;</code>,<code>&quot;720&quot;</code> by default,<code>&quot;360&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nightvision",
            "description": "<p>Enable night vision mode:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking",
            "description": "<p>Pedestrian tracking which only available for SimCam with Pan:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nas",
            "description": "<p>The url of user's Nas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "led",
            "description": "<p>The led state:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "person_det",
            "description": "<p>Detect person:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_det",
            "description": "<p>Detect state of Vehicle entering or exiting:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pets_det",
            "description": "<p>Detect dogs and cats:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "face_det",
            "description": "<p>Detect and recognition face :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zone_show",
            "description": "<p>If show the zone area for detection:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "monitor_show",
            "description": "<p>If show the object monitoring area:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "h265",
            "description": "<p>Enable H265 encoder for live stream:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lan_mode",
            "description": "<p>Enable Lan Mode which can only see the live stream under the same Lan :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timezone",
            "description": "<p>Name of timezone area</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/state/:hardwareid -d 'luminance=51'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>The state of device:<code>online</code>,<code>private</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "luminance",
            "description": "<p>The value of luminance:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contrast",
            "description": "<p>The value of contrast:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "saturation",
            "description": "<p>The value of saturation:<code>&quot;0&quot;~&quot;100&quot;</code>,<code>&quot;50&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flip_v",
            "description": "<p>Flip vertically:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flip_h",
            "description": "<p>Flip horizontal:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resolution",
            "description": "<p>Resolution of live video,&quot;1080&quot; stand for 1080p FHD:<code>&quot;1080&quot;</code>,<code>&quot;720&quot;</code> by default,<code>&quot;360&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nightvision",
            "description": "<p>Enable night vision mode:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tracking",
            "description": "<p>Pedestrian tracking which only available for SimCam with Pan:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdcard",
            "description": "<p>State of SDcard:<code>&quot;normal&quot;</code>,<code>&quot;none&quot;</code>,<code>&quot;bad&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nas",
            "description": "<p>The url of user's Nas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "led",
            "description": "<p>The led state:<code>&quot;on&quot;</code> by default,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rtsp",
            "description": "<p>The RTSP url for the SimCam</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person_det",
            "description": "<p>Detect person:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "car_det",
            "description": "<p>Detect state of Vehicle entering or exiting:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pets_det",
            "description": "<p>Detect dogs and cats:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "face_det",
            "description": "<p>Detect and recognition face :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zone_show",
            "description": "<p>If show the zone area for detection:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monitor_show",
            "description": "<p>If show the object monitoring area:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "h265",
            "description": "<p>Enable H265 encoder for live stream:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lan_mode",
            "description": "<p>Enable Lan Mode which can only see the live stream under the same Lan :<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wifi",
            "description": "<p>The ssid to which SimCam is connected</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firmware",
            "description": "<p>The firmware virsion of SimCam</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Name of timezone area</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": " HTTP/1.1 200 OK\n{\n     \"state\":\"online\",\n     \"luminance\":\"50\",\n     \"contrast\":\"50\",\n     \"saturation\":\"50\",\n     \"flip_v\":\"off\",\n     \"flip_h\":\"off\",\n     \"resolution\":\"1080\",\n     \"nightvision\":\"on\",\n     \"tracking\":\"off\",\n     \"sdcard\":\"normal\",\n     \"nas\":\"//192.168.1.2/path\",\n     \"led\":\"on\",\n     \"rtsp\":\"rtsp://192.168.1.11/live\",\n     \"person_det\":\"on\",\n     \"car_det\":\"on\",\n     \"pets_det\":\"on\",\n     \"face_det\":\"on\",\n     \"zone_show\":\"off\",\n     \"monitor_show\":\"off\",\n     \"h265\":\"on\",\n     \"lan_mode\":\"off\",\n     \"wifi\":\"name_of_ssid\",\n     \"firmware\":\"20200501\",\n     \"timezone\":\"America/Los_Angeles\",\n     \"return\":\"success\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/devicemgmt/firmware/update/:hardwareid",
    "title": "UpdateFirmware",
    "version": "0.0.7",
    "name": "UpdateFirmware",
    "group": "2-DeviceMgmt",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will notify SimCam to update new firmware.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p><code>&quot;do&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/devicemgmt/firmware/update/:hardwareid -d \"action=do\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "2-DeviceMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/stream/close/:hardwareid",
    "title": "CloseStream",
    "version": "0.0.7",
    "name": "CloseStream",
    "group": "3-Stream",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will close the stream channel according to the hardwareid.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p><code>&quot;do&quot;</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/stream/close/:hardwareid -d \"action=do\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "3-Stream",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stream/:hardwareid",
    "title": "GetStreamInfo",
    "version": "0.0.7",
    "name": "GetStreamInfo",
    "group": "3-Stream",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will request the information of stream with this hardwareid.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/stream/:hardwareid",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of stream:<code>&quot;rtsp&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The url of stream</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"hardwareid\":\"hardwareidPlaceHolder\",\n    \"type\":\"rtsp\",\n    \"url\":\"rtsp://127.0.0.1/live\",\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "3-Stream",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stream",
    "title": "GetStreamList",
    "version": "0.0.7",
    "name": "GetStreamList",
    "group": "3-Stream",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will request available streams running in the SDK Runtime Environment.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/stream",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chan",
            "description": "<p>The channel of streams</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chan.hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chan.type",
            "description": "<p>The type of stream:<code>&quot;rtsp&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chan.url",
            "description": "<p>The url of stream</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"chan\":[\n       {\n         \"hardwareid\":\"hardwareid1PlaceHolder\",\n         \"type\":\"rtsp\",\n         \"url\":\"rtsp://127.0.0.1/live\"\n       },\n       {\n         \"hardwareid\":\"hardwareid2PlaceHolder\",\n         \"type\":\"rtsp\",\n         \"url\":\"rtsp://127.0.0.1/live\"\n       },\n    ]\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "3-Stream",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/stream/open/:hardwareid",
    "title": "OpenStream",
    "version": "0.0.7",
    "name": "OpenStream",
    "group": "3-Stream",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will create a stream channel according to the hardwareid.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>The type of stream:<code>&quot;rtsp&quot;</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>The port of rtsp server, <code>554</code> by default</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username for the stream</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password for the stream</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "metadata",
            "description": "<p>Enable metadata embeded in live stream:<code>&quot;on&quot;</code>,<code>&quot;off&quot;</code> by default</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/stream/open/:hardwareid -d \"port=554\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hardwareid",
            "description": "<p>The hardware ID of the device</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of stream:<code>&quot;rtsp&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The url of stream</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"hardwareid\":\"hardwareidPlaceHolder\",\n    \"type\":\"rtsp\",\n    \"url\":\"rtsp://127.0.0.1/live\",\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "3-Stream",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/event/:hardwareid",
    "title": "GetEventInfo",
    "version": "0.0.7",
    "name": "GetEventInfo",
    "group": "4-Event",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will request available event type information.</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/event/:hardwareid",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>The list of available event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of available event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The URL of the bound event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n     \"event\":[\n         {\"name\":\"person\",\"url\":\"NULL\"},\n         {\"name\":\"faceid\",\"url\":\"NULL\"},\n         {\"name\":\"pets\",\"url\":\"NULL\"},\n         {\"name\":\"vehicle_enter\",\"url\":\"NULL\"},\n         {\"name\":\"vehicle_exit\",\"url\":\"NULL\"}\n     ]\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "4-Event",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/event/redirect/:hardwareid",
    "title": "RedirectEvent",
    "version": "0.0.7",
    "name": "RedirectEvent",
    "group": "4-Event",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will redirect default http/https event message to user's URL.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of event to redirect:<code>&quot;all&quot;</code> if want to redirect all</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The redirect URL of event</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/event/redirect/:hardwareid -d \"name=all&url=192.168.1.2:8080/event\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "4-Event",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/event/unbind/:hardwareid",
    "title": "UnbindEvent",
    "version": "0.0.7",
    "name": "UnbindEvent",
    "group": "4-Event",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>validate users's token.</p>"
      }
    ],
    "description": "<p>This operation will unbind event message to user's URL.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of event to unbind:<code>&quot;all&quot;</code> if want to unbind all</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -H \"Authorization: token_xxxx\" http://127.0.0.1:8000/simcam/event/unbind/:hardwareid -d \"name=all\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"return\":\"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p><code>&quot;success&quot;</code> if everything went fine</p>"
          }
        ]
      }
    },
    "filename": "../SimCamSDK/main_api.js",
    "groupTitle": "4-Event",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from <code>/login</code> or <code>/keepalive</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: token_xxxx\"",
          "type": "Header"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "return",
            "description": "<p><code>error</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p><code>p2p disconnected</code><br/> <code>p2p timeout</code><br/> <code>invalid param</code><br/> <code>device not found</code><br/></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Bad Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"return\":\"error\",\n  \"result\":\"p2p timeout\"\n}",
          "type": "json"
        },
        {
          "title": "Response No Auth:",
          "content": "HTTP/1.1 401 No Auth\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        },
        {
          "title": "Response Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"return\":\"error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
