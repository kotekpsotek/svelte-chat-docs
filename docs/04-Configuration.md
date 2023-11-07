# Fine Grained Configuration
Configure where your application points occurs
> All passed throught configuration is joint for app

## Let's configure
Configuration is pass as JSON object to Desktop ENV **SVELTE_CHAT**.
- All values into are optional!

```JSON
{
    /* Admin app - Where serves app under whose you can manage clien cases */
    "admin_server": {
        "port": 10502
    },
    /* App communcation - so where your client-side will be call, to get and send informations */
    "server": {
        "port": 10501
    }
}
```
