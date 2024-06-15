**HikariLynx** is an updated version of [PenumbraLynx](https://gitgud.io/LynxChan/PenumbraLynx).

Install by cloning anywhere and then pointing it to the engine on the global settings. Make sure to check out the correct tag.

Personalizing this will require a bit of work since it was made with hikari3.ch in mind. When personalizing your chan, read LynxChan's documentation on templates.

The favicon in the static directory is served from mongo and will need to be uploaded into MongoDB manually. To do this you need to get the 
mongofiles tool and run

> mongofiles -h localhost -d {dbName} -l {/path/to/yourfavicon} put /favicon.ico

This front end currently requires you to set the URI of the overboard as "overboard".
