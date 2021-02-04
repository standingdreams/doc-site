---
id: content-api
title: Content API
---

While logged into the admin of your Ghost instance, click on Integrations. Under `Custom Integrations`, click `+ Add custom integration`.

Give this new integration a name (example: "Search Function"), and click `Create`.

Your content API Key is created and you are taken to that key's configuration page. There are two different API keys: Content API Key and Admin API key. We want to get the Content API key. Hovering over the API keys displays two buttons: a refresh icon button and a copy button. Click on the `Copy` button to copy the Content API key. Paste it in the input box below. This site will generate the code necessary for the next steps.

:::warning
The only time you would want to refresh the API key is to generate a new API key. If that were the case, you would need to copy the new API key and follow the next set of instructions.
:::

Now we want to visit "Code injection" page of your admin. There will be two text blocks: Site Header and Site Footer. We will be utilizing the Site Header text block. Copy and paste the following text into the text block:

```
<script>
    var ghost_site_key = 'REPLACE_WITH_API_KEY';
</script>
```

The words `REPLACE_WITH_API_KEY` should be populated with the API Key you copy and pasted into the input box from the previous steps. If it is not populated for any reason, please replace `REPLACE_WITH_API_KEY` with the API key from the Custom integrations page.

Click save at the top right of the page.