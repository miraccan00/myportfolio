"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{81353:function(e,n,t){t.d(n,{E:function(){return s}});var i=t(10990),r=t(25317);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}var s=function(e,n,t){return i.ZP.fromTo(e,a({opacity:0},n),a({opacity:1},t,{stagger:.2,ease:r.Aq.easeOut}))}},25542:function(e,n,t){var i=t(85893),r=(t(67294),t(82010)),o=t(69954);n.Z=function(e){var n=e.children,t=e.type,a=e.onClick,s=e.classes,c=(0,r.F)().theme;return"primary"===t?(0,i.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===c?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(o.showCursor&&"cursor-none","  ").concat(s),children:n}):(0,i.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===c?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(o.showCursor&&"cursor-none"," ").concat(s," link"),children:n})}},29617:function(e,n,t){var i=t(85893),r=t(67294),o=t(93462),a=(t(40358),t(82010));n.Z=function(){var e=(0,a.F)(),n=(0,r.useState)(),t=n[0],s=n[1];return(0,r.useEffect)((function(){s(!0)}),[]),(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)(o.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},42665:function(e,n,t){var i=t(85893),r=t(158),o=t(82010),a=t(11163),s=t(67294),c=t(25542),l=t(69954);n.Z=function(e){var n=e.handleWorkScroll,t=e.handleAboutScroll,u=e.isBlog,m=(0,a.useRouter)(),d=(0,o.F)(),h=d.theme,g=d.setTheme,p=(0,s.useState)(!1),f=p[0],k=p[1],b=l.name,v=l.showBlog,x=l.showResume;return(0,s.useEffect)((function(){k(!0)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.J,{className:"block tablet:hidden mt-5",children:function(e){var o=e.open;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,i.jsxs)("h1",{onClick:function(){return m.push("/")},className:"font-medium p-2 laptop:p-0 link",children:[b,"."]}),(0,i.jsxs)("div",{className:"flex items-center",children:[l.darkMode&&(0,i.jsx)(c.Z,{onClick:function(){return g("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,i.jsx)(r.J.Button,{children:(0,i.jsx)("img",{className:"h-5",src:"/images/".concat(o?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,i.jsx)(r.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:u?(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(c.Z,{onClick:function(){return m.push("/")},classes:"first:ml-1",children:"Home"}),v&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/blog")},children:"Blog"}),x&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"})]}):(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(c.Z,{onClick:n,children:"Work"}),(0,i.jsx)(c.Z,{onClick:t,children:"About"}),v&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/blog")},children:"Blog"}),x&&(0,i.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Resume"}),(0,i.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"})]})})]})}}),(0,i.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,i.jsxs)("h1",{onClick:function(){return m.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[b,"."]}),u?(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(c.Z,{onClick:function(){return m.push("/")},children:"Home"}),v&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/blog")},children:"Blog"}),x&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"}),f&&h&&l.darkMode&&(0,i.jsx)(c.Z,{onClick:function(){return g("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(c.Z,{onClick:n,children:"Work"}),(0,i.jsx)(c.Z,{onClick:t,children:"About"}),v&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/blog")},children:"Blog"}),x&&(0,i.jsx)(c.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(c.Z,{onClick:function(){return window.open("mailto:miraccanyilmazme@gmail.com")},children:"Contact"}),f&&h&&l.darkMode&&(0,i.jsx)(c.Z,{onClick:function(){return g("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},20558:function(e,n,t){t.d(n,{KO:function(){return r},LI:function(){return i}});var i=t(67294).useLayoutEffect;function r(e){if(e){var n=new Date(e);return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}}},69954:function(e){e.exports=JSON.parse('{"name":"Mirac Can Y\u0131lmaz","headerTaglineOne":"Hello \ud83d\udc4b","headerTaglineTwo":"I\'m Mirac Can Y\u0131lmaz - curious","headerTaglineThree":"DevOps Engineer","headerTaglineFour":" based from Turkey","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/miraccan00"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/mirac-can-yilmaz/"},{"id":"3","title":"Twitter","link":"https://twitter.com/miraccan00"},{"id":"4","title":"Blog","link":"miraccanyilmaz.me/blog"},{"id":"5","title":"Email","link":"mailto:miraccanyilmazme@gmail.com"}],"projects":[],"aboutpara":"Hello! I am a DevOps Engineer with 1.5 years of experience, currently working at Softtech. In my role, I take an active role in implementing in-depth Kubernetes resources, including the meticulous configuration of health checks, Horizontal Pod Autoscaling (HPA), and other advanced strategies to ensure optimal server performance. I am passionate about staying on top of emerging technology to promote efficiency and am driven by a curiosity for all things programming.","resume":{"tagline":"\ud83d\udc4b  I\'m a DevOps engineer.","description":"Certainly! A DevOps engineer with a proven track record in streamlining software development and IT operations. Skilled in implementing robust automation processes, optimizing deployment pipelines, and ensuring seamless collaboration between development and IT teams. Proficient in a variety of tools and technologies related to infrastructure as code, continuous integration, and continuous deployment. Experienced in managing scalable and reliable cloud-based architectures. Dedicated to enhancing efficiency, reliability, and security in software delivery.","experiences":[{"id":"1","dates":"March 2022 - Present","type":"Full Time","position":"DevOps Engineer at Softtech","bullets":"OpenShift - Kubernetes - Docker - Containerization - Microservices - Jenkins - Nexus - Python - Bash"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"Jun 2022 - Nov 2022","type":"Full Time","position":"DevOps Engineer at Payten","bullets":"OpenShift - Kubernetes - Docker - Containerization - Microservices - Jenkins - Nexus - Python - Bash"},{"id":"b8b12c82-84f5-4576-8522-0102c25e27da","dates":"Feb 2022 - Jun 2022","type":"Internship","position":"Software Engineer Intern at Duzce University","bullets":"Worked on the Backend of a .NET application"}],"education":{"universityName":"Duzce University","universityDate":"2018-2022","universityPara":"During my time at university, I was passionate about software and technology, which led me to pursue a degree in Computer Science. I actively engaged in various coding projects, hackathons, and technology-related extracurricular activities, honing my skills in areas such as algorithms, data structures, and software development methodologies. This deep passion motivated me to excel in my coursework and explore innovative solutions to real-world problems. Through my academic journey, I cultivated a strong foundation in programming languages, software engineering principles, and problem-solving techniques, which continue to drive my enthusiasm for the tech industry."},"languages":["Python","Go"],"frameworks":["Django","SpringBoot"],"others":["Azure DevOps","Github Actions","Jenkins","ArgoCD","HelmCharts","Nexus","Harbor","Prometheus","Grafana"]}}')}}]);