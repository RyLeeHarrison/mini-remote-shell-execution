
# mini-remote-shell-execution
Mini JavaScript client/server remote shell execution


very minimal
![code](/code.png?raw=true)

## Start the server

Clone and run the server

```sh
git clone https://github.com/RyLeeHarrison/mini-remote-shell-execution
cd mini-remote-shell-execution-master
yarn install # or npm install
node server.js # exposes port 1338
```

## Connecting to the shell
you can connect with telnet as well as nc, your choice 
```sh
nc localhost 1338
```
or telnet
```sh
telnet localhost 1338
```

![code](/shell.png?raw=true)


## Windows ?
I used the package "node-pty" to so it could be used with something like [xterm.js](https://github.com/sourcelair/xterm.js)

"`node-pty` supports Linux, macOS and Windows. Windows support is possible by utilizing the [winpty](https://github.com/rprichard/winpty) library."

See the [node-pty](https://www.npmjs.com/package/node-pty) package for more information 