import { nanoid } from "nanoid";
import { Resource } from "./models/resource";

const resources = [
  {
    name: "The `wasm-bindgen` Guide",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html",
    tags: ["wasm", "rust", "cargo"]
  },
  {
    name: "Hello wasm-pack!",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://rustwasm.github.io/wasm-pack/book/tutorials/npm-browser-packages/using-your-library.html",
    tags: ["wasm", "rust", "cargo", "language"]
  },
  {
    name: "NPM Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/",
    tags: ["node", "npm", "nvm", "cheat sheet"]
  },
  {
    name: "Flexbox - CSS Tricks",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    tags: ["css", "design", "language", "flexbox", "style"]
  },
  {
    name: "Git - Branching & Merging",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
    tags: ["git", "source control", "devops", "repository"]
  },
  {
    name: "Learn You a Haskell for Great Good!",
    img: "",
    href: "http://learnyouahaskell.com/chapters",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    tags: ["haskell", "language", "functional"]
  },
  {
    name: "Bash Cheat Sheet",
    img: "",
    href: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    tags: ["bash", "cheat sheet", "linux", "cli"]
  },
  {
    name: "Emmet Cheat Sheet",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    img: "",
    href: "https://docs.emmet.io/cheat-sheet/",
    tags: ["vscode", "ide", "cheat sheet", "shortcuts", "keyboard"]
  },
  {
    name: "Markdown Guide",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://www.markdownguide.org/basic-syntax/",
    tags: ["markdown", "documentation", "readme", "language"]
  },
  {
    name: "RegExr - RegEx Playground",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://regexr.com/",
    tags: ["regex", "tools"]
  },
  {
    name: "Coolors - Color Templating",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://coolors.co/",
    tags: ["design", "css", "color", "style"]
  },
  {
    name: "Duckie - A Tool for one-person pairing",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "http://duckie.me/",
    tags: ["troubleshooting", "debugging"]
  },
  {
    name: "Big-O Complexity Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://www.bigocheatsheet.com/",
    tags: ["algorithm", "cheat sheet"]
  },
  {
    name: "AWS Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://intellipaat.com/blog/tutorial/amazon-web-services-aws-tutorial/aws-cheat-sheet/",
    tags: ["aws", "cloud", "cheat sheet"]
  },
  {
    name: "HTML Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://htmlcheatsheet.com/",
    tags: ["html", "cheat sheet", "language"]
  },
  {
    name: "CSS Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://htmlcheatsheet.com/css/",
    tags: ["css", "style", "design", "language"]
  },
  {
    name: "The Rust Programming Language",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "http://https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/README.html.me/",
    tags: ["rust", "language"]
  },
  {
    name: "The Rust Cookbook",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://rust-lang-nursery.github.io/rust-cookbook/intro.html",
    tags: ["rust", "language", "algorithms"]
  },
  {
    name: "TailwindCSS Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://nerdcave.com/tailwind-cheat-sheet",
    tags: ["rust", "language", "algorithms"]
  },
  {
    name: "Bootstrap Cheat Sheet",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://getbootstrap.com/docs/5.0/examples/cheatsheet/",
    tags: ["bootstrap", "css", "framework", "style", "cheat sheet"]
  },
  {
    name: "The Modern JavaScript Tutorial",
    img: "",
    details:
      "Bleghbleghvomit my furball really tie the room together play time, but decide to want nothing to do with my owner today, so plan your travel demand to be let outside at once, and expect owner to wait for me as i think about it. ",
    href: "https://javascript.info/",
    tags: ["javascript", "language", "tutorial"]
  }
];

export const Tags: string[] = Array(
  ...new Set(resources.map(({ tags }) => tags).flat())
);

export const Resources = resources.map(({ name, details, img, href, tags }) =>
  Resource({ id: nanoid(), name, img, href, tags, details })
);
