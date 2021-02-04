---
id: posts-per-page
title: Posts Per Page
---
The default posts per page is set to 10. To change this you will need to edit the `package.json` file found inside of `halsted-theme.zip`. 

:::warning
This is an advanced step and must be handled with care.
:::

Unzip the `halsted-theme.zip` file. Find the `package.json` file and open it in a text editor like TextEdit (Mac) or Notepad (Windows) that come default on your system or download a text editor like Visual Studio Code or Sublime Text.

At the bottom of the file, you will find the following:

```
"config": {
	"posts_per_page": 10
}
```

Change 10 to the desired number of posts per page. Save and close the `package.json` file. You will now need to zip the directory up, upload the newly zipped file.