var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&o(e,r,t[r]);return e},l=(e,n)=>t(e,r(n));import{C as d,q as u,R as c,W as p,a as m}from"./vendor.b8a92f43.js";const f="Har du hørt om Rasmus Dybkjær?",h=(e,t)=>{const{getAutoQuestion:r}=(()=>{const[e,t]=d.exports.useState(),[r,n]=d.exports.useState();return d.exports.useEffect((()=>{e||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetAutoQuestions");if(e.ok){const r=await e.json();t(r)}})()}),[e,t]),d.exports.useEffect((()=>{r||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetSuggestedQuestions");if(e.ok){const t=await e.json();n(t)}})()}),[r,n]),{getAutoQuestion:()=>e?e[Math.floor(Math.random()*e.length)]:f,getSuggestedQuestions:()=>null!=r?r:[]}})(),[n,i]=d.exports.useState({isIdle:!1,lastActionTime:new Date,idleQuestionSubstringCounter:0,idleQuestion:"",hasAskedIdleQuestion:!1}),{isIdle:a,lastActionTime:o,idleQuestionSubstringCounter:u,hasAskedIdleQuestion:c,idleQuestion:p}=n;return d.exports.useEffect((()=>{if(!a||c)return;const r=setInterval((()=>{if(u>p.length)return i((e=>l(s({},e),{hasAskedIdleQuestion:!0}))),void t(p);i((e=>l(s({},e),{idleQuestionSubstringCounter:u+1}))),e(p.substring(0,u))}),150);return()=>clearInterval(r)}),[i,e,n]),d.exports.useEffect((()=>{const e=setInterval((()=>{if(a)return;(new Date).getTime()-o.getTime()>3e4&&i((e=>l(s({},e),{isIdle:!0,hasAskedIdleQuestion:!1,idleQuestionSubstringCounter:0,idleQuestion:r()})))}),1e3);return()=>clearInterval(e)}),[i,o,a]),[n,i]},g=e=>Array.isArray(e),x=()=>k[Math.floor(k.length*Math.random())],k=["Det ved jeg sgu ikke noget om.","Hvad er det for noget pis at fyre af?","Det ku du li at vide","Det er satme det dummeste jeg har hørt længe","Hold nu kæft","Spørg om noget andet","Hvorfor spørger du ikke om noget fornuftigt? Du spilder min tid."],b=/[.,/#!$%^&*;:{}=\-_`~()?]/g,w={xs:600,sm:800,md:1e3,lg:1200,xl:1600},y={dark:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#5F985D",dark:"#3F653E",light:"#A8C9A6"},third:{default:"#6E6362",dark:"#363030",light:"#BCB3B3"},white:"#F4F4F4",black:"#101218"},light:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#4E4A59",dark:"#312E38",light:"#A09AAC"},third:{default:"#6E6362",dark:"#363030",light:"#D9D4D4"},white:"#F4F4F4",black:"#101218"}},v=u.a`
    color: ${y.dark.white};
    text-decoration: none;
    position: relative;
    z-index: 0;

    :hover,
    :focus,
    :active {
        :after {
            transform: rotate(-2deg) scaleX(120%);
            border: none;
            background-color: ${y.dark.secondary.light};
            transition: 0.3s all;
        }
    }

    :after {
        content: '';
        width: 110%;
        height: 100%;
        position: absolute;
        top: -5%;
        left: -5%;
        border-bottom: 4px dotted ${y.dark.secondary.default};
        transition: 0.3s all;
        transform: rotate(2deg);
        z-index: -1;
    }
`,E=({messages:e})=>c.createElement(S,null,e.map((e=>c.createElement($,{key:e.time.toString(),messages:e})))),$=({messages:e})=>{const{time:t,response:r,question:n}=e;return c.createElement(c.Fragment,null,c.createElement(j,{time:t,question:n}),c.createElement(A,{time:t,response:r}))},j=({question:e,time:t})=>c.createElement(C,{justifyContent:"flex-start"},c.createElement(Q,{backgroundColor:y.dark.secondary.dark},c.createElement(D,null,O(t),".",z(t)),c.createElement(T,null,e))),A=({response:e,time:t})=>{let r;return r=g(e)?c.createElement(c.Fragment,null,e.map(((e,t)=>"Link"===e.type?c.createElement(v,{href:e.src,key:t,target:"_blank"},e.value):c.createElement(I,{key:t},e.value)))):c.createElement(I,null,e),c.createElement(C,{justifyContent:"flex-end"},c.createElement(Q,{backgroundColor:y.dark.third.dark},c.createElement(D,null,O(t),".",z(t)),c.createElement(T,null,r)))},S=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,C=u.div`
    display: flex;
    flex-direction: row;
    justify-content: ${e=>e.justifyContent};
`,Q=u.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 80%;
    background-color: ${e=>e.backgroundColor};
    color: ${y.dark.white};
    display: flex;
`,D=u.div`
    width: 50px;
    margin-right: 12px;
`,T=u.div``,I=u.span``;function O(e){const t=e.getHours();return t<10?`0${t}`:t.toString()}function z(e){const t=e.getMinutes();return t<10?`0${t}`:t.toString()}const F=({response:e})=>{let t;return t=e&&g(e)?c.createElement(c.Fragment,null,e.map(((e,t)=>"Link"===e.type?c.createElement(v,{href:e.src,key:t,target:"_blank"},e.value):c.createElement(R,{key:t},e.value)))):c.createElement(R,null,e),c.createElement(P,null,c.createElement(q,null,c.createElement(M,null,t),c.createElement(K,null)))},P=u.div`
    flex: 0 1 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`,q=u.div`
    background-color: ${y.dark.third.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: ${w.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${w.sm}px) {
        border-radius: 20px;
    }
`,K=u.div`
    width: 10%;
    padding-bottom: 7.09%; // = width / 1.41 (height of the resulting element)
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateX(99%);
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${y.dark.third.default};
        transform-origin: top left;
        transform: rotate(45deg);
    }
`,M=u.p`
    width: 90%;
    height: 90%;
    margin: 0;
    color: ${y.dark.white};
`,R=u.span``,B=()=>c.createElement(G,null,c.createElement(L,null,c.createElement(X,null,"det er satme et godt spørgsmål...")),c.createElement(N,{sizePct:8,verticalOffset:5,keyframes:H(15)}),c.createElement(N,{sizePct:7,verticalOffset:-30,keyframes:H(10)}),c.createElement(N,{sizePct:5,verticalOffset:0,keyframes:H(5)})),H=e=>p`
    0% {
        visibility: hidden;
    }
    ${e}% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
`,G=u.div`
    flex: 0 1 80%;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`,L=u.div`
    flex: 0 0 80%;
    height: 90%;
    border-radius: 80px;
    background-color: ${y.dark.third.default};

    animation: ${H(20)} 3s linear infinite;

    position: relative;

    :before,
    :after {
        content: '';
        background-color: ${y.dark.third.default};
        border-radius: 50%;
        position: absolute;
    }
    :before {
        width: 50px;
        height: 50px;
        top: -25px;
        left: 200px;
        box-shadow: -225px 50px 0 -12px ${y.dark.third.default}, 80px 5px 0 0px ${y.dark.third.default};
    }
    :after {
        bottom: -10px;
        right: 26px;
        width: 30px;
        height: 30px;
        box-shadow: 40px -34px 0 0 ${y.dark.third.default}, -100px 0 0 30px ${y.dark.third.default},
            -150px 10px 0 6px ${y.dark.third.default}, -200px -5px 0 10px ${y.dark.third.default};
    }
`,N=u.div`
    flex: 0 0 ${e=>e.sizePct}%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    animation: ${e=>e.keyframes} 3s linear infinite;

    :after {
        content: '';
        position: absolute;
        width: 80%;
        padding-bottom: 100%;
        border-radius: 50%;
        background-color: ${y.dark.third.default};

        top: ${e=>e.verticalOffset}px;
    }
`,X=u.p`
    color: ${y.dark.white};
`;const _=({isThinking:e,lastResponse:t,lastActionTime:r,isAsking:n})=>{const[i,a]=d.exports.useState(!1);return d.exports.useEffect((()=>{const e=new Date,t=n&&e.getTime()-r.getTime()<3e3;if(t!==i&&a(t),!t)return;const o=setTimeout((()=>a(!1)),3e3);return()=>clearTimeout(o)}),[r,i,a,n]),c.createElement(V,null,e?c.createElement(B,null):c.createElement(F,{response:t}),c.createElement(J,null,c.createElement(W,{shouldNod:i})))},V=u.div`
    display: flex;
    flex-direction: row;
    margin-left: 8px;
    width: calc(100%-8px); ;
`,W=u.div`
    background-image: url('${e=>e.shouldNod?"/ask-daniel/assets/daniel-thinking.8616aa71.gif":"/ask-daniel/assets/daniel-avatar.090ca183.png"}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 30%;
    border: 8px solid ${y.dark.third.default};
`,J=u.div`
    flex: 0 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`,U=({onValueChange:e,onSubmitQuestion:t,value:r,isThinking:n,lastQuestion:i})=>c.createElement(Y,null,c.createElement(Z,null,c.createElement(ee,null),c.createElement(te,{onChange:t=>{n||e(t.target.value)},autoFocus:!0,onKeyDown:e=>{"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),t(r))},value:r,placeholder:i,"aria-label":"Textarea for question input"}))),Y=u.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 8px;
    width: calc(100%-8px); ;
`,Z=u.div`
    background-color: ${y.dark.secondary.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    position: relative;

    @media (max-width: ${w.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${w.sm}px) {
        border-radius: 20px;
    }
`,ee=u.div`
    width: 10%;
    padding-bottom: 7.09%; // = width / 1.41 (height of the resulting element)
    position: relative;
    top: 40%;
    left: 0;
    transform: translateX(-100%);
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${y.dark.secondary.default};
        transform-origin: top right;
        transform: rotate(-45deg);
    }
`,te=u.textarea`
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    color: ${y.dark.white};
    ::placeholder {
        color: ${y.dark.third.light};
    }
`,re=()=>{const[e,t]=d.exports.useState(""),[r,n]=d.exports.useState(!1),[i,a]=d.exports.useState([]),{getResponse:o}=(()=>{const[e,t]=d.exports.useState();return d.exports.useEffect((()=>{e||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetResponses");if(e.ok){const r=await e.json();t(r)}})()}),[e,t]),{getResponse:function(t){if(!t)return"";const r=t.replace(b,"").split(" ").map((e=>e.toLowerCase()));if(!e)return x();const n=e.map((e=>l(s({},e),{matchedKeywordCount:e.keywords.filter((e=>r.includes(e))).length}))),i=Math.max(...n.map((e=>e.matchedKeywordCount))),a=n.find((e=>e.matchedKeywordCount===i&&e.matchedKeywordCount>0));return a?a.parts:x()}}})(),u=e=>{n(!0),(async e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e})},r=await fetch("https://ask-daniel.azurewebsites.net/api/AddQuestion",t);await r.json()})(e),setTimeout((()=>g(e)),2500)},[p,m]=h(t,u),{lastActionTime:f}=p,g=e=>{const r=o(e);a([{question:e,response:r,time:new Date},...i]),t(""),n(!1)};let k;const w=!!e,y=[...i];return w||r||(k=y.shift()),c.createElement(ne,null,c.createElement(U,{onValueChange:e=>{m((e=>l(s({},e),{isIdle:!1,lastActionTime:new Date}))),t(e)},value:null!=e?e:"",onSubmitQuestion:u,isThinking:r,lastQuestion:null==k?void 0:k.question}),c.createElement(_,{lastActionTime:f,isThinking:r,lastResponse:null==k?void 0:k.response,isAsking:w}),c.createElement(ie,null,c.createElement(E,{messages:y})))},ne=u.div`
    display: grid;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }

    background-color: ${y.dark.primary.default};

    // Default grid 2 x 2
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 60%;

    @media (max-width: ${w.md}px) {
        // Small grid 1 x 3
        grid-template-columns: 100%;
        grid-template-rows: 20% 20% 60%;

        div,
        p,
        textarea {
            font-size: 22px;
        }
    }

    @media (max-width: ${w.sm}px) {
        div,
        p,
        textarea {
            font-size: 18px;
        }
    }
`,ie=u.div`
    justify-self: center;
    width: 100%;
    max-width: 800px;

    @media (min-width: ${w.md}px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
    }
`;function ae(){return c.createElement(re,null)}m.render(c.createElement(c.StrictMode,null,c.createElement(ae,null)),document.getElementById("root"));
