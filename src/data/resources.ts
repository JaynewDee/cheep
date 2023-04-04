import { nanoid } from "nanoid";
import { Resource } from "./models/resource";

const resources = [
  {
    name: "NPM Cheat Sheet",
    img: "",
    href: "https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/",
    tags: ["node", "npm", "nvm", "cheat sheet"]
  },
  {
    name: "Flexbox - CSS Tricks",
    img: "",
    href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    tags: ["css", "design", "language", "flexbox", "style"]
  },
  {
    name: "Git - Branching & Merging",
    img: "",
    href: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
    tags: ["git", "source control", "devops", "repository"]
  },
  {
    name: "Learn You a Haskell for Great Good!",
    img: "",
    href: "http://learnyouahaskell.com/chapters",
    tags: ["haskell", "language", "programming", "functional"]
  },
  {
    name: "Bash Cheat Sheet",
    img: "",
    href: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
    tags: ["bash", "cheat sheet", "linux", "cli"]
  },
  {
    name: "Emmet Cheat Sheet",
    img: "",
    href: "https://docs.emmet.io/cheat-sheet/",
    tags: ["vscode", "ide", "cheat sheet", "shortcuts", "keyboard"]
  },
  {
    name: "Markdown Guide",
    img: "",
    href: "https://www.markdownguide.org/basic-syntax/",
    tags: ["markdown", "documentation", "readme", "language"]
  },
  {
    name: "RegExr - RegEx Playground",
    img: "",
    href: "https://regexr.com/",
    tags: ["regex", "programming"]
  },
  {
    name: "Coolors - Color Templating",
    img: "",
    href: "https://coolors.co/",
    tags: ["design", "css", "color", "style"]
  },
  {
    name: "Duckie - A Tool for one-person pairing",
    img: "",
    href: "http://duckie.me/",
    tags: ["troubleshooting", "debugging"]
  },
  {
    name: "Big-O Complexity Cheat Sheet",
    img: "",
    href: "https://www.bigocheatsheet.com/",
    tags: ["algorithm", "cheat sheet"]
  },
  {
    name: "AWS Cheat Sheet",
    img: "",
    href: "https://intellipaat.com/blog/tutorial/amazon-web-services-aws-tutorial/aws-cheat-sheet/",
    tags: ["aws", "cloud", "cheat sheet"]
  },
  {
    name: "HTML Cheat Sheet",
    img: "",
    href: "https://htmlcheatsheet.com/",
    tags: ["html", "cheat sheet", "language"]
  },
  {
    name: "CSS Cheat Sheet",
    img: "",
    href: "https://htmlcheatsheet.com/css/",
    tags: ["css", "style", "design", "language"]
  },
  {
    name: "The Rust Programming Language",
    img: "",
    href: "http://https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/README.html.me/",
    tags: ["rust", "language", "programming"]
  },
  {
    name: "The Rust Cookbook",
    img: "",
    href: "https://rust-lang-nursery.github.io/rust-cookbook/intro.html",
    tags: ["rust", "language", "programming", "algorithms"]
  },
  {
    name: "TailwindCSS Cheat Sheet",
    img: "",
    href: "https://nerdcave.com/tailwind-cheat-sheet",
    tags: ["rust", "language", "programming", "algorithms"]
  },
  {
    name: "Bootstrap Cheat Sheet",
    img: "",
    href: "https://getbootstrap.com/docs/5.0/examples/cheatsheet/",
    tags: ["bootstrap", "css", "framework", "style", "cheat sheet"]
  },
  {
    name: "The Modern JavaScript Tutorial",
    img: "",
    href: "https://javascript.info/",
    tags: ["javascript", "programming", "langugage", "tutorial"]
  }
];

export const Tags: string[] = Array(
  ...new Set(resources.map(({ tags }) => tags).flat())
);

export const Resources = resources.map(({ name, img, href, tags }) =>
  Resource({ id: nanoid(), name, img, href, tags })
);
