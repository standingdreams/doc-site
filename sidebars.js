require('dotenv').config();

const local = {
  mainSidebar: {
    "Getting Started": [
      "intro",
      "theme-structure",
      "installation",
      "update-theme"
    ],
    Settings: [
      "routes",
      "content-api",
      "posts-per-page",
      "update-favicon"
    ],
    Usage: [
      "members",
      "responsive-tables",
      "search",
      "author",
      "newsletter",
      "syntax-highlighting",
      "tags"
    ],
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
};

const prod = {
  mainSidebar: {
    "Getting Started": [
      "intro",
      "theme-structure",
      "installation",
      "update-theme"
    ],
    Settings: [
      "routes",
      "content-api",
      "posts-per-page",
      "update-favicon"
    ],
    Usage: [
      "members",
      "responsive-tables",
      "search",
      "author",
      "newsletter",
      "syntax-highlighting",
      "tags"
    ]
  },
};

module.exports = process.env.LOCAL ? local : prod;
