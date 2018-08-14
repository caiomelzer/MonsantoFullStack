# MonsantoFullStack

This project have two parts:
  - SERVER SIDE: Using Node.js and Express
  - APPLICATION: Using Angular 6 + Angular Material

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

To start this process, you need to have installed in your machine the following programs:
* [Node.JS] 
* [Angular/CLI] 
* [Express] 

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/caiomelzer/MonsantoFullStack.git
$ cd MonsantoFullStack
```

### Server Installation / Deploy

```sh
$ cd server
$ cd npm install
$ cd node index.js
```

The server will be running on: http://localhost:4211/farmer

PS: Don't close this session!

### Application Installation / Deploy

Open other terminal tab (If you are in Mac or Linux, if you are in using Windows, open other Prompt)

```sh
$ cd farmer
$ cd npm install
$ cd ng serve
```

The application will be running on: http://localhost:4200/

### NOTE:
If you need to install Angular/CLI, run this command:
```sh
npm install -g @angular/cli
```





