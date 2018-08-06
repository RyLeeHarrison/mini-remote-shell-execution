require('net').createServer(
    socket => socket.pipe(
        require('node-pty').spawn(
        (process.platform === 'darwin')
            ? (process.env.SHELL       || '/bin/bash')
            : (process.platform === 'win32')
                ? (process.env.COMSPEC || 'cmd.exe')
                : process.env.SHELL,
        ['--login'], {
            name: this.address,
            cwd: process.env.HOME,
            env: process.env
        })
    ).pipe(socket)
).listen(1338)