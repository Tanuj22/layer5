(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"9BVm":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("vOnD"),i=n("WL7g"),o=n("DZth"),s=n("vrFN"),c=n("mvsK"),m=n("iJo/"),u=n("Bl7J"),g=n("Wbzz"),d=n("xFQ1"),h=n("YP3a"),p=l.d.section.withConfig({displayName:"NewcomersPageWrapperstyle__NewcomersGuideWrapper",componentId:"sc-1y9qnqz-0"})(["\n    margin-bottom: 4rem;\n    .newcomers-welcome{\n        text-align: center;\n        .newcomers-journey{\n            display: flex;\n            align-items: center;\n            margin: 2rem 0;\n            h2{\n              margin-bottom: 2rem;\n            }\n        }\n        .how-to-contribute{\n          h3{\n            margin: auto;\n            font-weight: 600;\n          }\n          p {\n            margin: 2rem 0;\n          }\n        }\n    }\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      h2{\n        margin-top: -6.5rem;\n      }\n    }\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -1.5rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n    .instructions{\n      .step{\n        display: flex;\n        align-items: center;\n        margin-bottom: 2rem;\n      }\n      h3{\n        display:inline;\n        padding-bottom: 0.3rem;\n        border-bottom: 2px solid ",";\n      }\n      li{\n        margin-bottom: 1rem;\n      }\n      p{\n        margin-top: 1rem;\n      }\n      img{\n        display: block;\n        margin: 0 auto;\n        max-width: 21.875rem\n      }\n    }\n    .table-wrapper{\n      text-align: center;\n      margin-bottom: 4rem;\n    }\n    @media only screen and (max-width: 991px) {\n      .heading-start, .heading-start__arrow{\n        display: none;\n      }\n      .heading{\n        h2{\n          margin-top: 0;\n        }\n      }\n  }\n"],(function(e){return e.theme.primaryLightColorTwo})),y=n("9gZC"),b=n.n(y),E=n("eT2D"),f=n.n(E),w=n("x8ib"),N=n.n(w),k=n("aZov"),j=n.n(k),M=n("VYKx"),L=[{date:"Oct. 1st, 2020",topic:"An Introduction to Contributing to Meshery",resources:{slides:"https://docs.google.com/presentation/d/1Wc5ALdn-G3fADJ8I6nJlyOGhV2XHVprYPqDvkZ1MEqY/edit#",recording:"https://youtu.be/67iy2JEp4Ss"},presenters:[{link:"/community/members/vijay-cherukuri",name:"Vijay Cherukuri"}]},{date:"Oct. 8th, 2020",topic:"An Introduction to mesheryctl",resources:{slides:"https://docs.google.com/presentation/d/1LxhzJhUs9-Hc9mwlKVUMlDAVdH-QWLvU1KWxVuRbSHg/edit?usp=sharing",recording:"https://youtu.be/wK7Q-zbJ3gQ?t=3"},presenters:[{link:"/community/members/nupur-thakur",name:"Nupur Thakur"}]},{date:"Oct. 15th, 2020",topic:"A tutorial on contributing to Layer5 and working with Git",resources:{slides:"https://docs.google.com/presentation/d/1UOlwFtZ-VJhW4RgQoSI_QOGUQ7OBG8NZDWrFUor7eyY/edit?usp=sharing",recording:"https://youtu.be/O9UZO5g9BvI"},presenters:[{link:"/community/members/ruth-ikegah",name:"Ruth Ikegah"}]},{date:"Oct. 22nd, 2020",topic:"An introduction to all Layer5 repositories",resources:{slides:"https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit",recording:"https://www.youtube.com/watch?v=Yu03slXrdS0&list=PL3A-A6hPO2INVEknQ4R-VwDMUT9yM_FSm&index=8"},presenters:[{link:"/community/members/lee-calcote",name:"Lee Calcote"}]},{date:"Oct. 29th, 2020",topic:"A tutorial on Gatsby",resources:{slides:"https://www.gatsbyjs.com/docs/quick-start/",recording:"https://www.youtube.com/watch?v=ug6yaYC-Kkw&list=PL3A-A6hPO2INVEknQ4R-VwDMUT9yM_FSm&index=9"},presenters:[{link:"/community/members/jash-patel",name:"Jash Patel"},{link:"/community/members/tanuj-agarwal",name:"Tanuj Agarwal"}]}],I=l.d.div.withConfig({displayName:"TutorialsTablestyle__TutorialsTableWrapper",componentId:"sc-1juf99y-0"})(["\n  table{\n    display: table;\n    width: 100%;\n    height: auto;\n    border-collapse: collapse;\n    margin: 3.75rem auto;\n    th,\n    tr {\n      height: 3.75rem;\n      vertical-align: middle;\n    }\n    tr:nth-child(odd) {\n      background-color: #F0F0F0;\n    }\n    th {\n      background-color: ",";\n    }\n    th,\n    td {\n      border-bottom: 1px solid #F0F0F0;\n      padding: 0 0.625rem;\n      p{\n        margin: 0.5rem 0;\n      }\n      span {\n        display: block;\n      }\n    }\n    }\n"],(function(e){return e.theme.secondaryColor})),v=function(){var e=r.a.useMemo((function(){return[{Header:"Topic",accessor:"topic"},{Header:"Resources",id:"resources",accessor:function(e){return r.a.createElement("p",null,e.resources.slides?r.a.createElement("span",null,r.a.createElement("a",{href:e.resources.slides,target:"_blank",rel:"noreferrer"},"Slides")):"",e.resources.recording?r.a.createElement("span",null,r.a.createElement("a",{href:e.resources.recording,target:"_blank",rel:"noreferrer"},"Recording")):"")}},{Header:"Presenters",id:"presenters",accessor:function(e){var t=[];return e.presenters.map((function(e){var n=e.link?r.a.createElement(g.Link,{to:e.link},e.name):e.name;t.push(r.a.createElement("span",null,n))})),t}}]}),[]),t=Object(M.useTable)({columns:e,data:L}),n=t.getTableProps,a=t.getTableBodyProps,l=t.headerGroups,i=t.rows,o=t.prepareRow;return r.a.createElement(I,null,r.a.createElement("table",n(),r.a.createElement("thead",null,l.map((function(e,t){return r.a.createElement("tr",Object.assign({key:t},e.getHeaderGroupProps()),e.headers.map((function(e,t){return r.a.createElement("th",Object.assign({key:t},e.getHeaderProps()),e.render("Header"))})))}))),r.a.createElement("tbody",a(),i.map((function(e,t){return o(e),r.a.createElement("tr",Object.assign({key:t},e.getRowProps()),e.cells.map((function(e,t){return r.a.createElement("td",Object.assign({key:t},e.getCellProps()),e.render("Cell"))})))})))))},D=n("E1tq"),C=n("NADc"),z=n("YJ/y"),x=n.n(z),T=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return r.a.createElement(p,null,r.a.createElement(h.a,{title:"Welcome Newcomers!"}),r.a.createElement(d.b,null,r.a.createElement("div",{className:"newcomers-welcome"},r.a.createElement("p",null,"Whether you are a first time contributor or an open source veteran,you are welcome to contribute to and actively engage in the development of projects at Layer5. Here are some instructions to get you started and if you haven’t joined yet, join the"," ",r.a.createElement("a",{href:"http://slack.layer5.io/",target:"_blank",rel:"noreferrer"},"Slack workspace")," ","to collaborate with the community. Also, you can check the quick-links below for jumping straight into things."),r.a.createElement(d.c,{className:"newcomers-journey"},r.a.createElement(d.a,{className:"heading",sm:12,lg:6,onMouseOver:function(){return n(!0)},onMouseOut:function(){return n(!1)}},r.a.createElement("h2",null,"Contributor's Journey"),r.a.createElement("div",{className:"heading-start"},r.a.createElement("h5",null,"Start Here"),r.a.createElement("img",{className:"heading-start__arrow",src:x.a}))),r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement(D.a,{handleMouseHover:t}))),r.a.createElement(d.c,{className:"how-to-contribute"},r.a.createElement("h3",null,"How to Contribute?"),r.a.createElement("p",null,"The following set of steps outlines the process by which you can openly engage, learn, and participate in the broad set of open source projects at Layer5. If at any time you get stuck, please seek help in the"," ",r.a.createElement("a",{href:"https://layer5io.slack.com/archives/C019426UBNY",target:"_blank",rel:"noreferrer"},"#newcomers")," ","channel in the Layer5 (joining instructions below). Our"," ",r.a.createElement(g.Link,{to:"/community/meshmates"},"MeshMates")," and community members are here to help!"))),r.a.createElement("div",{className:"instructions"},r.a.createElement(d.c,{className:"step"},r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("img",{src:b.a,alt:"Community Image"})),r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("h3",null,"Finding an Issue to Work On"),r.a.createElement("ol",{type:"i"},r.a.createElement("li",null,"Browse the list of"," ",r.a.createElement("a",{href:"https://github.com/layer5io",target:"_blank",rel:"noreferrer"},"Layer5 org")," ","issues bearing the “",r.a.createElement("a",{href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+",target:"_blank",rel:"noreferrer"},"good first issue"),"” label, “",r.a.createElement("a",{href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first-timers-only%22+"},"first timers only"),"” or the “",r.a.createElement("a",{href:"https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+",target:"_blank",rel:"noreferrer"},"help wanted"),"” label."),r.a.createElement("li",null,"Alternatively, find an area of interest by reviewing/browsing the"," ",r.a.createElement("a",{href:"https://drive.google.com/a/layer5.io/open?id=1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk",target:"_blank",rel:"noreferrer"},"Layer5 Repository Overview")," ","document."),r.a.createElement("li",null,"After identifying the issue you wish to work on, check whether it has been assigned or not by taking a look at the assignee section on the issue. If it hasn't been, signal your interest by commenting on the issue so that it can be assigned to you.")))),r.a.createElement(d.c,{className:"step"},r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("h3",null,"Working on Your Issue"),r.a.createElement("ol",{type:"i"},r.a.createElement("li",null,"Once an issue has been assigned to you, it’s time to get started! Make sure you take a look at the"," ",r.a.createElement("a",{href:"https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noreferrer"},"Contributing Guidelines"),"."),r.a.createElement("li",null,"Be sure to"," ",r.a.createElement("a",{href:"https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin",target:"_blank",rel:"noreferrer"},"sign-off on your commits"),"."),r.a.createElement("li",null,"Contributions of all sizes are welcome."),r.a.createElement("li",null,"If you need some additional help, please join Layer5 Slack workspace at"," ",r.a.createElement("a",{href:"http://slack.layer5.io/",target:"_blank",rel:"noreferrer"},"http://slack.layer5.io")," ","and find your way to the"," ",r.a.createElement("a",{href:"https://layer5io.slack.com/archives/C019426UBNY",target:"_blank",rel:"noreferrer"},"#newcomers")," ","channel. Feel free to ask questions."))),r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("img",{src:f.a,alt:"Community Image"}))),r.a.createElement(d.c,{className:"step"},r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("img",{src:N.a,alt:"Community Image"})),r.a.createElement(d.a,{sm:12,lg:6},r.a.createElement("h3",null,"While Your Issue is under Review"),r.a.createElement("p",null,"Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile, you are welcome to join our"," ",r.a.createElement("a",{href:"http://slack.layer5.io/",target:"_blank",rel:"noreferrer"},"Slack workspace")," ","and take a look at all our projects.")))),r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("h2",null,"Tutorials"),r.a.createElement("h5",null,"Checkout some of the resources to get going"),r.a.createElement(v,null)),r.a.createElement(C.a,{image:j.a})))};t.default=function(){return r.a.createElement(l.a,{theme:i.a},r.a.createElement(u.a,null,r.a.createElement(o.a,null),r.a.createElement(s.a,{title:"Newcomers",description:"Contributions from Newcomers are actively encouraged in Layer5. Find a Meshmate and start contributing!"}),r.a.createElement(c.a,null),r.a.createElement(T,null),r.a.createElement(m.a,null)))}},"9gZC":function(e,t,n){e.exports=n.p+"static/community-image1-d5561c84dd9d83ec90f65ef9bd1b9c06.png"},"YJ/y":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ5My4zNTZweCIgaGVpZ2h0PSI0OTMuMzU2cHgiIHZpZXdCb3g9IjAgMCA0OTMuMzU2IDQ5My4zNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5My4zNTYgNDkzLjM1NjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ5MC40OTgsMjM5LjI3OGwtMTA5LjYzMi05OS45MjljLTMuMDQ2LTIuNDc0LTYuMzc2LTIuOTUtOS45OTMtMS40MjdjLTMuNjEzLDEuNTI1LTUuNDI3LDQuMjgzLTUuNDI3LDguMjgydjYzLjk1NEg5LjEzNg0KCQljLTIuNjY2LDAtNC44NTYsMC44NTUtNi41NjcsMi41NjhDMC44NTksMjE0LjQzOCwwLDIxNi42MjgsMCwyMTkuMjkydjU0LjgxNmMwLDIuNjYzLDAuODU1LDQuODUzLDIuNTY4LDYuNTYzDQoJCWMxLjcxNSwxLjcxMiwzLjkwNSwyLjU2Nyw2LjU2NywyLjU2N2gzNTYuMzEzdjYzLjk1M2MwLDMuODEyLDEuODE3LDYuNTcsNS40MjgsOC4yNzhjMy42MiwxLjUyOSw2Ljk1LDAuOTUxLDkuOTk2LTEuNzA4DQoJCWwxMDkuNjMyLTEwMS4wNzdjMS45MDMtMS45MDIsMi44NTItNC4xODIsMi44NTItNi44NDlDNDkzLjM1NiwyNDMuMzY3LDQ5Mi40MDEsMjQxLjE4MSw0OTAuNDk4LDIzOS4yNzh6IiBmaWxsPSIjMDBkM2E5Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},YP3a:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),i=n("m7xX"),o=n.n(i),s=n("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 2rem auto 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=n("tBDR"),m=function(e,t){return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(l.Link,{to:"/community/members/"+o()(e.name)},r.a.createElement("span",null,e.name)):r.a.createElement("span",null,e.name))};t.a=function(e){var t=e.category,n=e.title,a=e.subtitle,i=e.author,o=e.thumbnail,u=!1;i&&(u=Object(l.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==i.name})));return r.a.createElement(s,null,r.a.createElement("div",{className:"page-header"},o&&r.a.createElement("div",{className:"feature-image"},r.a.createElement(c.a,Object.assign({},o,{imgStyle:{objectFit:"contain"},alt:n}))),r.a.createElement("h1",null,n),a&&r.a.createElement("h3",null,a),t&&r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement("span",null,r.a.createElement("h5",null,"Category:"),r.a.createElement("p",{key:t},t)),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("h5",null,"By:"),r.a.createElement("p",null,m(i,u))))),!t&&i&&r.a.createElement("div",{className:"breadcrumbs post"},r.a.createElement("h5",null,"By:"),r.a.createElement("span",null,m(i,u)))))}},aZov:function(e,t,n){e.exports=n.p+"static/community-image4-e791c86b9fb9d845990e82f3c61a14f3.png"},eT2D:function(e,t,n){e.exports=n.p+"static/community-image2-8e6e3a1a425f0c1bd304475c540e33c5.png"},m7xX:function(e,t){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},tBDR:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),l=n.n(r),i=n("9eSz"),o=n.n(i);t.a=function(e){var t=e.childImageSharp,n=e.extension,r=e.publicURL,i=e.alt,s=Object(a.a)(e,["childImageSharp","extension","publicURL","alt"]);return t||"svg"!==n?l.a.createElement(o.a,Object.assign({fluid:t.fluid},s,{alt:i})):l.a.createElement("div",{className:"gatsby-image-wrapper"},l.a.createElement("img",{src:r,alt:i}))}},x8ib:function(e,t,n){e.exports=n.p+"static/community-image3-c3613057fc10afed6d8f77710b421a81.png"}}]);
//# sourceMappingURL=component---src-pages-community-newcomers-js-35c5f6b38591d6c60e74.js.map