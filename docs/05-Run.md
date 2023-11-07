# Run App
In almost similary way but with included environment variable toline:

1. Developement mode
```bash
$ ORIGIN="admin_server.port" npm run dev
```
2. In production as node app (after transiple sveltekit to node.js handler by use @sveltejs/adapter-node):
```bash
$ ORIGIN="admin_server.port" node .
```
> Always will be correct for bash CLI (beyond powershell and cmd -> in cases run bash emulator)

* Be aware:
    * **ORIGIN="admin_server.port"** - where is determined ***"admin_server.port"*** gives location where your **admin_server** exists. E.g: 
        * Default value should always be **10502** -> in space when you didn't configured <u>**Fine grainded configuration**</u> *admin_server.port* number,
        * When you change <u>**Fine grainded configuration**</u> *admin_server.port* number you should put that value here
        > This isn't my idea but determined via how transpiled to node.js sveltekit app works. Please don't be angry on me 😍!
>> That wasn't my idea but determined via how transpiled to node.js sveltekit app works. Please don't be angry on me 😍!