(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#!",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,e.specialization.length?l.a.createElement("span",null,"\u2022"):""," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},"CGPA: ",e.CGPA)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.role,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfJoining," ",e.YearOfJoining),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsOne)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsTwo)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsThree)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsFour)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsFive)),l.a.createElement("p",{className:"info"},l.a.createElement("b",null,e.AchievementsSix))))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=function(e){var a=e.target.closest("a");if(a){var t=a.href;console.log(t),window.location.href=t}};return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item",key:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,onClick:a},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),f=(n.Component,function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me."))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,l.a.createElement("span",{style:{color:"gray"}},"Linked in:\xa0\xa0"),e.linkedinId),l.a.createElement("h4",null,l.a.createElement("span",{style:{color:"gray"}},"Email:\xa0\xa0"),"saichandhan.yata44@gmail.com"),l.a.createElement("h4",null,l.a.createElement("span",{style:{color:"gray"}},"Phone:\xa0\xa0"),"8501044098")))))}}]),a}(n.Component)),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={name:"Sai Chandan Yata",role:"Full Stack Developer",linkedinId:"sai-chandan-yata-4a50b01a2",roleDescription:"I like dabbling in various parts of fullstack development, smart contract development and like to learn about new technologies, simply play games or sports in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sai-chandan-yata-4a50b01a2/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/chandan-30",className:"fa fa-github"}],aboutme:"Detail-oriented, organized and meticulous employee. Works at a fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success.",address:"India",education:[{UniversityName:"Kaktiya Institue Of Technology And Science, Warangal",specialization:"Information Technology",MonthOfPassing:"June",YearOfPassing:"2021",CGPA:"7.86"},{UniversityName:"ABV Junior College",specialization:"M.P.C",MonthOfPassing:"March",YearOfPassing:"2016",CGPA:"9.6"},{UniversityName:"St. Mary's High School",specialization:"",MonthOfPassing:"June",YearOfPassing:"2021",CGPA:"10"}],work:[{CompanyName:"Accenture",role:"Software Engineer",MonthOfJoining:"June",YearOfJoining:"2021",MonthOfLeaving:"October",YearOfLeaving:"2022",AchievementsOne:"Worked with development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.",AchievementsTwo:"Updated old code bases to modern development standards, improving functionality.",AchievementsThree:"Provided guidance and mentored less-experienced staff members.",AchievementsFour:"Collaborated in team-based and agile environment to accomplish objectives in measured and open manner.",AchievementsFive:"Received recognitions and ace award within 6 months of employment.",AchievementsSix:"Ace award & Promotion."},{CompanyName:"Brainstorm Force",role:"Software Engineer",MonthOfJoining:"January",YearOfJoining:"2023",MonthOfLeaving:"August",YearOfLeaving:"2023",AchievementsOne:"Developed and maintained wordpress plugins in collaboration with cross-functional teams.",AchievementsTwo:"Collaborated with designers, product managers, and QA engineers to ensure successful project outcomes.",AchievementsThree:"Engaged in close collaboration with fellow plugin developers, seamlessly integrating their solutions with our plugin\u2019s extensive user base. This synergy resulted in notable enhancements to both their user engagement and outreach.",AchievementsFour:"Used ReactJS, Wordpress Core and PHP for plugin and theme developments.",AchievementsFive:"Received recognition within 3 months of employment."}],skills:[{skillname:"JavaScript && HTML5"},{skillname:"CSS && SCSS"},{skillname:"Reactjs && Redux"},{skillname:"NextJS && Nodejs"},{skillname:"Python && PHP"},{skillname:"SQL"},{skillname:"Wordpress Core, Plugin and Theme development"},{skillname:"JQuery && REST API"},{skillname:"Bootstrap && Tailwind && Material UI"}],portfolio:[{name:"project1",description:"Form Builder",imgurl:"images/portfolio/form-builder.png",url:"https://chandan-30.github.io/Form-Builder/"},{name:"project2",description:"React Redux To-Do App",imgurl:"images/To-Do-redux-app.png",url:"https://storied-horse-05e6d6.netlify.app/"},{name:"project3",description:"Marvel Developers page clone",imgurl:"images/mdpc.png",url:"https://melodic-marshmallow-24fbcf.netlify.app/"},{name:"project4",description:"Task-Runner",imgurl:"images/portfolio/TT.png",url:"https://chandan-30.github.io/task-runner/"},{name:"project5",description:"Dapp",imgurl:"images/portfolio/Dapp.png",url:"https://github.com/chandan-30/MoodDiary-Dapp"},{name:"More Projects",description:"More...",imgurl:"images/more.png",url:"https://docs.google.com/document/d/18AKtgWANp8rjeaKe8y_739jv-45ApvblCUJVVH0fMmU/edit#heading=h.jhv78pp9wtzd"}]},b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(f,{resumeData:g}),l.a.createElement(v,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.5d218e82.chunk.js.map