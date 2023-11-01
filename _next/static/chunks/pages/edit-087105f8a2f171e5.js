(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{52234:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit",function(){return n(94258)}])},25542:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(82010)),a=n(69954);t.Z=function(e){var t=e.children,n=e.type,i=e.onClick,l=e.classes,c=(0,r.F)().theme;return"primary"===n?(0,s.jsx)("button",{onClick:i,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===c?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(a.showCursor&&"cursor-none","  ").concat(l),children:t}):(0,s.jsx)("button",{onClick:i,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===c?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(a.showCursor&&"cursor-none"," ").concat(l," link"),children:t})}},29617:function(e,t,n){"use strict";var s=n(85893),r=n(67294),a=n(93462),i=(n(40358),n(82010));t.Z=function(){var e=(0,i.F)(),t=(0,r.useState)(),n=t[0],l=t[1];return(0,r.useEffect)((function(){l(!0)}),[]),(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsx)(a.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},42665:function(e,t,n){"use strict";var s=n(85893),r=n(158),a=n(82010),i=n(11163),l=n(67294),c=n(25542),o=n(69954);t.Z=function(e){var t=e.handleWorkScroll,n=e.handleAboutScroll,u=e.isBlog,d=(0,i.useRouter)(),m=(0,a.F)(),h=m.theme,x=m.setTheme,p=(0,l.useState)(!1),g=p[0],f=p[1],j=o.name,v=o.showBlog,y=o.showResume;return(0,l.useEffect)((function(){f(!0)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.J,{className:"block tablet:hidden mt-5",children:function(e){var a=e.open;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,s.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium p-2 laptop:p-0 link",children:[j,"."]}),(0,s.jsxs)("div",{className:"flex items-center",children:[o.darkMode&&(0,s.jsx)(c.Z,{onClick:function(){return x("dark"===h?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,s.jsx)(r.J.Button,{children:(0,s.jsx)("img",{className:"h-5",src:"/images/".concat(a?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,s.jsx)(r.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:u?(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[(0,s.jsx)(c.Z,{onClick:function(){return d.push("/")},classes:"first:ml-1",children:"Home"}),v&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),y&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,s.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"})]}):(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[(0,s.jsx)(c.Z,{onClick:t,children:"Work"}),(0,s.jsx)(c.Z,{onClick:n,children:"About"}),v&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),y&&(0,s.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Resume"}),(0,s.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"})]})})]})}}),(0,s.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,s.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[j,"."]}),u?(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(c.Z,{onClick:function(){return d.push("/")},children:"Home"}),v&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),y&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,s.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"}),g&&h&&o.darkMode&&(0,s.jsx)(c.Z,{onClick:function(){return x("dark"===h?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(c.Z,{onClick:t,children:"Work"}),(0,s.jsx)(c.Z,{onClick:n,children:"About"}),v&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),y&&(0,s.jsx)(c.Z,{onClick:function(){return d.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,s.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"}),g&&h&&o.darkMode&&(0,s.jsx)(c.Z,{onClick:function(){return x("dark"===h?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},94258:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s,r=n(85893),a=n(67294),i=n(25542),l=n(42665),c=new Uint8Array(16);function o(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(c)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"===typeof e&&u.test(e)},m=[],h=0;h<256;++h)m.push((h+256).toString(16).substr(1));var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};var p=function(e,t,n){var s=(e=e||{}).random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=s[r];return t}return x(s)},g=n(82010),f=n(69954),j=n(29617);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){y(e,t,n[t])}))}return e}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(){var e=(0,a.useState)(f),t=e[0],n=e[1],s=(0,a.useState)("HEADER"),c=s[0],o=s[1],u=(0,g.F)().theme,d=function(e,s){var r=t.projects;r[e]=w({},s),n(w({},t,{projects:r}))},m=function(e,s){var r=t.socials;r[e]=w({},s),n(w({},t,{socials:r}))},h=function(e,s){var r=t.resume.experiences;r[e]=w({},s),n(w({},t,{resume:w({},t.resume,{experiences:r})}))};return(0,r.jsxs)("div",{className:"container mx-auto ".concat(t.showCursor&&"cursor-none"),children:[(0,r.jsx)(l.Z,{isBlog:!0}),t.showCursor&&(0,r.jsx)(j.Z,{}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"".concat("dark"===u?"bg-transparent":"bg-white"),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-4xl",children:"Dashboard"}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(i.Z,{onClick:function(){alert("This thing only works in development mode.")},type:"primary",children:"Save"})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(i.Z,{onClick:function(){return o("HEADER")},type:"HEADER"===c&&"primary",children:"Header"}),(0,r.jsx)(i.Z,{onClick:function(){return o("PROJECTS")},type:"PROJECTS"===c&&"primary",children:"Projects"}),(0,r.jsx)(i.Z,{onClick:function(){return o("ABOUT")},type:"ABOUT"===c&&"primary",children:"About"}),(0,r.jsx)(i.Z,{onClick:function(){return o("SOCIAL")},type:"SOCIAL"===c&&"primary",children:"Social"}),(0,r.jsx)(i.Z,{onClick:function(){return o("RESUME")},type:"RESUME"===c&&"primary",children:"Resume"})]})]}),"HEADER"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Name"}),(0,r.jsx)("input",{value:t.name,onChange:function(e){return n(w({},t,{name:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-sx opacity-50",children:"Header Tagline One"}),(0,r.jsx)("input",{value:t.headerTaglineOne,onChange:function(e){return n(w({},t,{headerTaglineOne:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Two"}),(0,r.jsx)("input",{value:t.headerTaglineTwo,onChange:function(e){return n(w({},t,{headerTaglineTwo:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Three"}),(0,r.jsx)("input",{value:t.headerTaglineThree,onChange:function(e){return n(w({},t,{headerTaglineThree:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Four"}),(0,r.jsx)("input",{value:t.headerTaglineFour,onChange:function(e){return n(w({},t,{headerTaglineFour:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Blog"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showBlog:!0}))},type:t.showBlog&&"primary",children:"Yes"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showBlog:!1}))},classes:!t.showBlog&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dark Mode"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{darkMode:!0}))},type:t.darkMode&&"primary",children:"Yes"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{darkMode:!1}))},classes:!t.darkMode&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Show Resume"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showResume:!0}))},type:t.showResume&&"primary",children:"Yes"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showResume:!1}))},classes:!t.showResume&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Custom Cursor"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showCursor:!0}))},type:t.showCursor&&"primary",children:"Yes"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{showCursor:!1}))},classes:!t.showCursor&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]})]}),"PROJECTS"===c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-10",children:t.projects.map((function(e,s){return(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.title}),(0,r.jsx)(i.Z,{onClick:function(){return function(e){var s=t.projects;s=s.filter((function(t){return t.id!==e})),n(w({},t,{projects:s}))}(e.id)},type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,r.jsx)("input",{value:e.title,onChange:function(t){return d(s,w({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,r.jsx)("input",{value:e.description,onChange:function(t){return d(s,w({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Image Source"}),(0,r.jsx)("input",{value:e.imageSrc,onChange:function(t){return d(s,w({},e,{imageSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"url"}),(0,r.jsx)("input",{value:e.url,onChange:function(t){return d(s,w({},e,{url:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(i.Z,{onClick:function(){n(w({},t,{projects:b(t.projects).concat([{id:p(),title:"New Project",description:"Web Design & Development",imageSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",url:"http://chetanverma.com/"}])}))},type:"primary",children:"Add Project +"})})]}),"ABOUT"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{className:"text-2xl",children:"About"}),(0,r.jsx)("textarea",{className:"w-full h-96 mt-10 p-2 rounded-md shadow-md border",value:t.aboutpara,onChange:function(e){return n(w({},t,{aboutpara:e.target.value}))}})]}),"SOCIAL"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[t.socials.map((function(e,s){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.title}),(0,r.jsx)(i.Z,{onClick:function(){return function(e){var s=t.socials;s=s.filter((function(t){return t.id!==e})),n(w({},t,{socials:s}))}(e.id)},type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,r.jsx)("input",{value:e.title,onChange:function(t){return m(s,w({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Link"}),(0,r.jsx)("input",{value:e.link,onChange:function(t){return m(s,w({},e,{link:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsx)("hr",{className:"my-10"})]},e.id)})})),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(i.Z,{onClick:function(){n(w({},t,{socials:b(t.socials).concat([{id:p(),title:"New Link",link:"www.chetanverma.com"}])}))},type:"primary",children:"Add Social +"})})]}),"RESUME"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{children:"Main"}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-sx opacity-50",children:"Tagline"}),(0,r.jsx)("input",{value:t.resume.tagline,onChange:function(e){return n(w({},t,{resume:w({},t.resume,{tagline:e.target.value})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,r.jsx)("textarea",{value:t.resume.description,onChange:function(e){return n(w({},t,{resume:w({},t.resume,{description:e.target.value})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"})]}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsx)("h1",{children:"Experiences"}),(0,r.jsx)("div",{className:"mt-10",children:t.resume.experiences.map((function(e,t){return(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.position}),(0,r.jsx)(i.Z,{type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dates"}),(0,r.jsx)("input",{value:e.dates,onChange:function(n){return h(t,w({},e,{dates:n.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Type"}),(0,r.jsx)("input",{value:e.type,onChange:function(n){return h(t,w({},e,{type:n.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Position"}),(0,r.jsx)("input",{value:e.position,onChange:function(n){return h(t,w({},e,{position:n.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-2 flex",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Bullets"}),(0,r.jsx)("div",{className:"w-4/5 ml-10 flex flex-col",children:(0,r.jsx)("input",{value:e.bullets,onChange:function(n){return h(t,w({},e,{bullets:n.target.value}))},placeholder:"Bullet One, Bullet Two, Bullet Three",className:"p-2 rounded-md shadow-lg border-2",type:"text"})})]})]},e.id)}))}),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(i.Z,{onClick:function(){n(w({},t,{resume:w({},t.resume,{experiences:b(t.resume.experiences).concat([{id:p(),dates:"Enter Dates",type:"Full Time",position:"Frontend Engineer at X",bullets:["Worked on the frontend of a React application"]}])})}))},type:"primary",children:"Add Experience +"})}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{children:"Education"}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Name"}),(0,r.jsx)("input",{value:t.resume.education.universityName,onChange:function(e){return n(w({},t,{resume:w({},t.resume,{education:w({},t.resume.education,{universityName:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Dates"}),(0,r.jsx)("input",{value:t.resume.education.universityDate,onChange:function(e){return n(w({},t,{resume:w({},t.resume,{education:w({},t.resume.education,{universityDate:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Detail"}),(0,r.jsx)("input",{value:t.resume.education.universityPara,onChange:function(e){return n(w({},t,{resume:w({},t.resume,{education:w({},t.resume.education,{universityPara:e.target.value})})}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]})]}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Languages"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.languages.map((function(e,s){return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{value:e,onChange:function(e){n(w({},t,{resume:w({},t.resume,{languages:b(t.resume.languages.slice(0,s)).concat([e.target.value],b(t.resume.languages.slice(s+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{resume:w({},t.resume,{languages:t.resume.languages.filter((function(e,t){return s!==t}))})}))},children:"Remove"})]},s)})),(0,r.jsx)(i.Z,{type:"primary",classes:"hover:scale-100",onClick:function(){return n(w({},t,{resume:w({},t.resume,{languages:b(t.resume.languages).concat(["Added"])})}))},children:"Add +"})]})]}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Frameworks"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.frameworks.map((function(e,s){return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{value:e,onChange:function(e){n(w({},t,{resume:w({},t.resume,{frameworks:b(t.resume.frameworks.slice(0,s)).concat([e.target.value],b(t.resume.frameworks.slice(s+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{resume:w({},t.resume,{frameworks:t.resume.frameworks.filter((function(e,t){return s!==t}))})}))},children:"Remove"})]},s)})),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{resume:w({},t.resume,{frameworks:b(t.resume.frameworks).concat(["Added"])})}))},type:"primary",classes:"hover:scale-100",children:"Add +"})]})]}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Others"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex flex-col",children:[t.resume.others.map((function(e,s){return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{value:e,onChange:function(e){n(w({},t,{resume:w({},t.resume,{others:b(t.resume.others.slice(0,s)).concat([e.target.value],b(t.resume.others.slice(s+1)))})}))},className:"w-full p-2 rounded-md shadow-lg border-2",type:"text"}),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{resume:w({},t.resume,{others:t.resume.others.filter((function(e,t){return s!==t}))})}))},children:"Remove"})]},s)})),(0,r.jsx)(i.Z,{onClick:function(){return n(w({},t,{resume:w({},t.resume,{others:b(t.resume.others).concat(["Added"])})}))},type:"primary",classes:"hover:scale-100",children:"Add +"})]})]})]})]})]})]})}},69954:function(e){"use strict";e.exports=JSON.parse('{"name":"Mirac Can Y\u0131lmaz","headerTaglineOne":"Hello \ud83d\udc4b","headerTaglineTwo":"I\'m Mirac Can Y\u0131lmaz - curious","headerTaglineThree":"DevOps Engineer","headerTaglineFour":" based from Turkey","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/miraccan00"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/mirac-can-yilmaz/"},{"id":"3","title":"Twitter","link":"https://twitter.com/miraccan00"},{"id":"4","title":"Blog","link":"miraccanyilmaz.me/blog"},{"id":"5","title":"Email","link":"mailto:miraccanyilmazme@gmail.com"}],"projects":[],"aboutpara":"Hello! I am a DevOps Engineer with 1.5 years of experience, currently working at Softtech. In my role, I take an active role in implementing in-depth Kubernetes resources, including the meticulous configuration of health checks, Horizontal Pod Autoscaling (HPA), and other advanced strategies to ensure optimal server performance. I am passionate about staying on top of emerging technology to promote efficiency and am driven by a curiosity for all things programming.","resume":{"tagline":"\ud83d\udc4b  I\'m a DevOps engineer.","description":"Certainly! A DevOps engineer with a proven track record in streamlining software development and IT operations. Skilled in implementing robust automation processes, optimizing deployment pipelines, and ensuring seamless collaboration between development and IT teams. Proficient in a variety of tools and technologies related to infrastructure as code, continuous integration, and continuous deployment. Experienced in managing scalable and reliable cloud-based architectures. Dedicated to enhancing efficiency, reliability, and security in software delivery.","experiences":[{"id":"1","dates":"March 2022 - Present","type":"Full Time","position":"DevOps Engineer at Softtech","bullets":"OpenShift - Kubernetes - Docker - Containerization - Microservices - Jenkins - Nexus - Python - Bash"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"Jun 2022 - Nov 2022","type":"Full Time","position":"DevOps Engineer at Payten","bullets":"OpenShift - Kubernetes - Docker - Containerization - Microservices - Jenkins - Nexus - Python - Bash"},{"id":"b8b12c82-84f5-4576-8522-0102c25e27da","dates":"Feb 2022 - Jun 2022","type":"Internship","position":"Software Engineer Intern at Duzce University","bullets":"Worked on the Backend of a .NET application"}],"education":{"universityName":"Duzce University","universityDate":"2018-2022","universityPara":"During my time at university, I was passionate about software and technology, which led me to pursue a degree in Computer Science. I actively engaged in various coding projects, hackathons, and technology-related extracurricular activities, honing my skills in areas such as algorithms, data structures, and software development methodologies. This deep passion motivated me to excel in my coursework and explore innovative solutions to real-world problems. Through my academic journey, I cultivated a strong foundation in programming languages, software engineering principles, and problem-solving techniques, which continue to drive my enthusiasm for the tech industry."},"languages":["Python","Go"],"frameworks":["Django","SpringBoot"],"others":["Azure DevOps","Github Actions","Jenkins","ArgoCD","HelmCharts","Nexus","Harbor","Prometheus","Grafana"]}}')}},function(e){e.O(0,[802,358,774,888,179],(function(){return t=52234,e(e.s=t);var t}));var t=e.O();_N_E=t}]);