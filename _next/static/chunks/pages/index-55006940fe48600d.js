(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(5893),s=n(7294),o=n(9008),c=n.n(o),l=n(1664),r=n.n(l),i=n(5675),d=n.n(i),m=n(5247),h=n(5746),x=n.n(h),u=n(3454);function p(){let e=(0,s.useRef)(),t=(0,s.useRef)(),n=()=>{t.current.open=!0,setTimeout(o,2e3),setTimeout(l,6e3)},o=()=>{t.current.classList.add("".concat(x().fadeOut))},l=()=>{t.current.open=!1,t.current.classList.remove("".concat(x().fadeOut))},i=e=>{window.scrollTo({top:document.getElementById(e).offsetTop-20,behavior:"smooth"})},h=e=>{e.preventDefault();let t=e.target.getAttribute("goto");setTimeout(()=>{i(t)},0)},p=u.env.NEXT_PUBLIC_EMAILJS_GMAIL_KEY,g=u.env.NEXT_PUBLIC_EMAILJS_GMAIL_TEMPLATE_KEY,f=u.env.NEXT_PUBLIC_EMAILJS_KEY,b=async t=>{t.preventDefault(),await m.ZP.sendForm(p,g,e.current,f).then(e=>{n(),console.log(e.text)}),e=>{console.log(e.text)}};(0,s.useEffect)(()=>{let e=document.getElementById("navContainer"),t=e.offsetTop,n=document.getElementsByClassName("eyeExpandOnHover"),a=document.getElementById("eye"),s=document.getElementById("eyeBack");for(let o=0;o<n.length;o++)n[o].addEventListener("mouseenter",()=>{s.classList.add("".concat(x().scale)),a.classList.add("".concat(x().scaleEye))}),n[o].addEventListener("mouseleave",()=>{s.classList.remove("".concat(x().scale)),a.classList.remove("".concat(x().scaleEye))});let c=()=>{window.pageYOffset>=t?(e.classList.add("".concat(x().sticky)),document.getElementById("navChild1").classList.add("".concat(x().navChildSticky)),document.getElementById("navChild2").classList.add("".concat(x().navChildSticky)),document.getElementById("navChild3").classList.add("".concat(x().navChildSticky))):(e.classList.remove("".concat(x().sticky)),document.getElementById("navChild1").classList.remove("".concat(x().navChildSticky)),document.getElementById("navChild2").classList.remove("".concat(x().navChildSticky)),document.getElementById("navChild3").classList.remove("".concat(x().navChildSticky)))};window.onscroll=function(){c()},document.addEventListener("mousemove",e=>{let t=e.clientX,n=e.clientY,a=document.getElementById("container"),s=a.getBoundingClientRect(),o=s.left+s.width/2,c=s.top+s.height/2,l=document.getElementById("eye");l.style.transform="rotate(".concat(90+180*Math.atan2(c-n,o-t)/Math.PI,"deg)")})},[]);{let y=document.getElementById("eye");document.addEventListener("mouseleave",()=>{y.classList.add("".concat(x().eyeHibernate))}),document.addEventListener("mouseEnter",()=>{y.classList.remove("".concat(x().eyeHibernate))})}let j=()=>{{let e=document.getElementById("eyeBack"),t=document.getElementById("eye");e.classList.add("".concat(x().eyeBounce)),t.classList.add("".concat(x().eyeBounce)),setTimeout(_,3e3)}},_=()=>{{let e=document.getElementById("eyeBack"),t=document.getElementById("eye");e.classList.remove("".concat(x().eyeBounce)),t.classList.remove("".concat(x().eyeBounce))}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:"Bilal's Portofolio"}),(0,a.jsx)("html",{lang:"en"})]}),(0,a.jsx)("h1",{className:"text-center mt-7 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold",children:"Khawaja Muhammad Bilal"}),(0,a.jsxs)("header",{className:"",id:"navContainer",children:[(0,a.jsxs)("nav",{className:" ".concat(x().navbar," container text-lg xl:text-xl m-0 xl:mx-auto rounded xl:w-1/3 lg:w-2/3 md:w-3/4 w-100 flex justify-center px-4 pt-4 text-center mx-auto"),children:[(0,a.jsx)("p",{goto:"about",prefetch:"false",onClick:h,id:"navChild1",className:" ".concat(x().navbarLink," cursor-pointer eyeExpandOnHover hover:bg-white transition-all hover:transition-all hover:text-[#363636] font-semibold font- border-y-2 w-1/2 border-l-2 rounded-l xl:p-2 p-2"),children:"About"}),(0,a.jsx)("p",{goto:"projects",prefetch:"false",onClick:h,id:"navChild2",className:"".concat(x().navbarLink," cursor-pointer eyeExpandOnHover hover:bg-white transition-all hover:transition-all hover:text-[#363636] font-semibold border-y-2 w-1/2  xl:p-2 p-2"),children:"Projects"}),(0,a.jsx)("p",{goto:"contact",prefetch:"false",onClick:h,id:"navChild3",className:"".concat(x().navbarLink," cursor-pointer eyeExpandOnHover hover:bg-white transition-all hover:transition-all hover:text-[#363636] font-semibold border-y-2 w-1/2 border-r-2 rounded-r xl:p-2 p-2"),children:"Contact"})]}),(0,a.jsx)(d(),{className:"mx-auto w-1/1 xl:w-1/4 lg:w-1/2 md:w-2/3 ".concat(x().eyeBackground),id:"eyeBack",src:"/eyeBackground.svg",alt:"...",loading:"eager",priority:!0,width:500,height:500}),(0,a.jsx)("div",{className:"".concat(x().eyeTrackerContainer," "),id:"container",children:(0,a.jsx)("div",{className:"".concat(x().eyeContainer," mx-auto"),children:(0,a.jsx)(d(),{src:"/eyeHole.svg",width:80,loading:"eager",height:80,alt:"...",className:"".concat(x().eyeSVG),id:"eye"})})})]}),(0,a.jsx)("section",{className:"",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("section",{onClick:j,className:"container xl:w-1/3 w-5/6  mt-5 text-xl flex flex-col justify-center items-center mx-auto",id:"about",children:[(0,a.jsx)("p",{className:"font-thin text-center ".concat(x().heroText),children:"Yo! My name's Bilal, and I'm a full-stack developer, teacher, and blogger. "}),(0,a.jsxs)("div",{className:"flex text-center mt-8",children:[(0,a.jsxs)("p",{className:"border-r pr-10 pt-2 pb-3 font- text-lg ",children:[(0,a.jsx)("span",{className:"",children:"I'm experienced in:"}),(0,a.jsxs)("span",{className:"text-md font-thin",children:[" ",(0,a.jsx)("br",{})," Next.js ",(0,a.jsx)("br",{}),"TailwindCSS ",(0,a.jsx)("br",{}),"MongoDB ",(0,a.jsx)("br",{})," and more..."]})]}),(0,a.jsxs)("p",{className:"pl-10 pt-2 font-light text-lg",children:[(0,a.jsx)("span",{className:"font-medium",children:"My hobbies include:"})," ",(0,a.jsxs)("span",{className:"text-lg font-thin",children:[(0,a.jsx)("br",{}),"Reading ",(0,a.jsx)("br",{}),"Sketching",(0,a.jsx)("br",{}),"Blogging "]})]})]}),(0,a.jsxs)("p",{className:"font-thin mt-8 text-center",children:["I'm current freelancing and ",(0,a.jsx)("span",{className:"font-semibold",children:"open for work"}),"."]})]}),(0,a.jsx)("p",{className:"mt-20 text-3xl text-center font-semibold ".concat(x().projectsHeading),id:"projects",children:"Projects"}),(0,a.jsxs)("section",{className:"mx-auto mt-10 container flex flex-col xl:flex-row gap-10 xl:w-3/4 w-4/5 ",onClick:j,children:[(0,a.jsxs)("div",{className:"mx-auto xl:w-1/2",children:[(0,a.jsx)(r(),{href:"https://github.com/beelal-k/the-outnet-clone",children:(0,a.jsx)(d(),{src:"/outnetWebsite.jpg",width:700,height:500,alt:"...",className:"mx-auto rounded eyeExpandOnHover",id:"projectImage"})}),(0,a.jsxs)("p",{className:"font-thin xl:text-lg mt-5 ",children:["A clone of the e-commerce website 'The Outnet', link to github repo is ",(0,a.jsx)(r(),{href:"https://github.com/beelal-k/the-outnet-clone",className:"underline font-medium eyeExpandOnHover",children:"here"})]}),(0,a.jsxs)("p",{className:"font-semibold mt-1",children:["Built with: ",(0,a.jsx)("span",{className:"font-thin",children:"React.js, Bootstrap,  MongoDB, Express.js"})]})]}),(0,a.jsxs)("div",{className:"mx-auto xl:w-1/2 ",children:[(0,a.jsx)(d(),{src:"/zchromeWebsite.jpg",width:700,height:500,alt:"...",className:"mx-auto eyeExpandOnHover rounded"}),(0,a.jsxs)("p",{className:"font-thin xl:text-lg mt-5 ",children:["A surface pattern design market, currently a ",(0,a.jsx)("span",{className:"font-semibold",children:"work in progress"}),"."]}),(0,a.jsxs)("p",{className:"font-semibold mt-1 ",children:["Built with: ",(0,a.jsx)("span",{className:"font-thin",children:"React.js, Bootstrap, Firebase"})]})]})]})]})}),(0,a.jsxs)("section",{className:"mt-20",id:"contact",children:[(0,a.jsx)("p",{className:"mt-10 text-3xl text-center font-semibold input ".concat(x().projectsHeading),onClick:j,id:"projects",children:"Contact me"}),(0,a.jsxs)("form",{className:"mx-auto container flex flex-col xl:w-1/3 gap-5 mt-10 w-4/5 ",ref:e,onSubmit:b,children:[(0,a.jsx)("input",{type:"text",title:"Enter your name",required:!0,placeholder:"Name",name:"user_name",id:"user_name",className:"appearance-none outline-0 shadow bg-transparent border-2 rounded p-3 ".concat(x().contactInput)}),(0,a.jsx)("input",{type:"email",title:"Enter your email",required:!0,placeholder:"Email",name:"user_email",id:"user_email",className:"appearance-none shadow outline-0 bg-transparent border-2 rounded p-3 ".concat(x().contactInput)}),(0,a.jsx)("textarea",{type:"",title:"What do you need help with?",required:!0,minLength:10,placeholder:"What's up",name:"user_message",id:"user_message",rows:7,className:"resize-none appearance-none shadow outline-0 bg-transparent border-2 rounded p-3 ".concat(x().contactInput)}),(0,a.jsx)("input",{type:"submit",className:"btn border-2 xl:w-1/3 w-1/2 hover:bg-[#b8b8b8] cursor-pointer hover:border-[#b8b8b8]  hover:transition-all transition-all rounded bg-[#f3f3f3] text-[#363636] font-semibold text-xl mx-auto p-2 mt-3 eyeExpandOnHover"})]})]}),(0,a.jsxs)("footer",{className:"mt-20 xl:justify-start justify-center items-center mx-auto xl:w-1/3 flex flex-col gap-5 pb-20",children:[(0,a.jsxs)(r(),{href:"https://github.com/beelal-k",prefetch:!1,target:"_blank",className:"flex items-center eyeExpandOnHover",children:[(0,a.jsx)(d(),{src:"/githubIcon.svg",width:30,height:40,alt:"...",className:"inline mr-4 "}),(0,a.jsx)("span",{className:"border-b",children:"github.com/beelal-k"})]}),(0,a.jsxs)(r(),{href:"https://www.linkedin.com/in/bilalk902/",prefetch:!1,target:"_blank",className:"flex items-center eyeExpandOnHover ",children:[(0,a.jsx)(d(),{src:"/linkedinIcon.svg",width:23,height:40,alt:"...",className:"ml-1 inline mr-5"}),(0,a.jsx)("span",{className:"border-b",children:"linkedin.com/in/bilalk902/"})]}),(0,a.jsxs)(r(),{href:"https://medium.com/@bilal_k",prefetch:!1,target:"_blank",className:"flex items-center eyeExpandOnHover ",children:[(0,a.jsx)(d(),{src:"/mediumIcon.svg",width:25,height:40,alt:"...",className:"ml-1 inline mr-5"}),(0,a.jsx)("span",{className:"border-b",children:"medium.com/@bilal_k"})]})]}),(0,a.jsx)("dialog",{className:"bg-transparent p-3 container ".concat(x().emailDialog),ref:t,children:(0,a.jsxs)("div",{className:"border-2 border-[#1a1a1a] bg-[#f3f3f3] flex justify-between rounded p-4 xl:w-1/4 w-2/3 float-right",children:[(0,a.jsx)("p",{className:"text-[#363636] text-xl font-semibold ",onClick:j,children:"Email sent!"}),(0,a.jsx)(d(),{src:"/closeIcon.svg",width:20,height:20,alt:"...",className:"cursor-pointer",onClick:l})]})})]})}},5746:function(e){e.exports={heroText:"Home_heroText__zWFjN",heroLeft:"Home_heroLeft__UzNma",navbarLink:"Home_navbarLink__EFwiu",navChildSticky:"Home_navChildSticky__zr9IY",eyeBackground:"Home_eyeBackground__F61jj",eyeTrackerContainer:"Home_eyeTrackerContainer__rx_TI",eyeContainer:"Home_eyeContainer__dEBqi",eyeSVG:"Home_eyeSVG__dGyH5",lookAround:"Home_lookAround__9hOll",eyeHibernate:"Home_eyeHibernate__X7Y3i",hibernateEye:"Home_hibernateEye__A50ob",sticky:"Home_sticky__1PwKJ",scale:"Home_scale__0f4bA",scaleEye:"Home_scaleEye__776Ns",contactInput:"Home_contactInput__Hj0U6",emailDialog:"Home_emailDialog__Z8BYC",fadeIn:"Home_fadeIn__rYUMu",fadeOut:"Home_fadeOut__uiPKz",eyeBounce:"Home_eyeBounce__nC3Lz"}}},function(e){e.O(0,[24,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);