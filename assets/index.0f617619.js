var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&o(e,r,t[r]);return e},l=(e,n)=>t(e,r(n));import{C as d,q as u,R as c,W as p,a as m}from"./vendor.b8a92f43.js";const g=(()=>{const e=window.localStorage,t=e.getItem("userId");if(t)return t;const r=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)));return e.setItem("userId",r),r})(),f="Har du hørt om Rasmus Dybkjær?",h=(e,t)=>{const r=(()=>{const[e,t]=d.exports.useState();return d.exports.useEffect((()=>{e||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetAutoQuestions");if(e.ok){const r=await e.json();t(r.map((e=>e.value)))}})()}),[e,t]),()=>e?e[Math.floor(Math.random()*e.length)]:f})(),[n,a]=d.exports.useState({isIdle:!1,lastActionTime:new Date,idleQuestionSubstringCounter:0,idleQuestion:"",hasAskedIdleQuestion:!1}),{isIdle:i,lastActionTime:o,idleQuestionSubstringCounter:u,hasAskedIdleQuestion:c,idleQuestion:p}=n;return d.exports.useEffect((()=>{if(!i||c)return;const r=setInterval((()=>{if(u>p.length)return a((e=>l(s({},e),{hasAskedIdleQuestion:!0}))),void t(p,!0);a((e=>l(s({},e),{idleQuestionSubstringCounter:u+1}))),e(p.substring(0,u))}),150);return()=>clearInterval(r)}),[a,e,n]),d.exports.useEffect((()=>{const e=setInterval((()=>{if(i)return;(new Date).getTime()-o.getTime()>3e4&&a((e=>l(s({},e),{isIdle:!0,hasAskedIdleQuestion:!1,idleQuestionSubstringCounter:0,idleQuestion:r()})))}),1e3);return()=>clearInterval(e)}),[a,o,i]),[n,a]},x=e=>"object"==typeof e,k=()=>({id:0,responseParts:[{id:0,value:b[Math.floor(b.length*Math.random())],type:"String"}],keywords:[]}),b=["Det ved jeg sgu ikke noget om.","Hvad er det for noget pis at fyre af?","Det ku du li at vide","Det er satme det dummeste jeg har hørt længe","Hold nu kæft","Spørg om noget andet","Hvorfor spørger du ikke om noget fornuftigt? Du spilder min tid."],w=/[.,/#!$%^&*;:{}=\-_`~()?]/g,y={xs:600,sm:800,md:1e3,lg:1200,xl:1600},v={dark:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#5F985D",dark:"#3F653E",light:"#A8C9A6"},third:{default:"#6E6362",dark:"#363030",light:"#BCB3B3"},white:"#F4F4F4",black:"#101218"},light:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#4E4A59",dark:"#312E38",light:"#A09AAC"},third:{default:"#6E6362",dark:"#363030",light:"#D9D4D4"},white:"#F4F4F4",black:"#101218"}},E=u.a`
    color: ${v.dark.white};
    text-decoration: none;
    position: relative;
    z-index: 0;

    :hover,
    :focus,
    :active {
        :after {
            transform: rotate(-2deg) scaleX(120%);
            border: none;
            background-color: ${v.dark.secondary.light};
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
        border-bottom: 4px dotted ${v.dark.secondary.default};
        transition: 0.3s all;
        transform: rotate(2deg);
        z-index: -1;
    }
`,$=({messages:e})=>c.createElement(A,null,e.map((e=>c.createElement(S,{key:e.time.toString(),messages:e})))),S=({messages:e})=>{const{time:t,response:r,question:n}=e;return c.createElement(c.Fragment,null,c.createElement(j,{time:t,question:n}),c.createElement(C,{time:t,response:r}))},j=({question:e,time:t})=>c.createElement(I,{justifyContent:"flex-start"},c.createElement(D,{backgroundColor:v.dark.secondary.dark},c.createElement(T,null,O(t),".",z(t)),c.createElement(Q,null,e))),C=({response:e,time:t})=>{let r;return r=x(e)?c.createElement(c.Fragment,null,e.responseParts.map(((e,t)=>"Link"===e.type?c.createElement(E,{href:e.src,key:t,target:"_blank"},e.value):c.createElement(F,{key:t},e.value)))):c.createElement(F,null,e),c.createElement(I,{justifyContent:"flex-end"},c.createElement(D,{backgroundColor:v.dark.third.dark},c.createElement(T,null,O(t),".",z(t)),c.createElement(Q,null,r)))},A=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,I=u.div`
    display: flex;
    flex-direction: row;
    justify-content: ${e=>e.justifyContent};
`,D=u.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 80%;
    background-color: ${e=>e.backgroundColor};
    color: ${v.dark.white};
    display: flex;
`,T=u.div`
    width: 50px;
    margin-right: 12px;
`,Q=u.div``,F=u.span``;function O(e){const t=e.getHours();return t<10?`0${t}`:t.toString()}function z(e){const t=e.getMinutes();return t<10?`0${t}`:t.toString()}const P=({response:e})=>{let t;return t=e&&x(e)?c.createElement(c.Fragment,null,e.responseParts.map(((e,t)=>"Link"===e.type?c.createElement(E,{href:e.src,key:t,target:"_blank"},e.value):c.createElement(q,{key:t},e.value)))):c.createElement(q,null,e),c.createElement(M,null,c.createElement(B,null,c.createElement(R,null,t),c.createElement(K,null)))},M=u.div`
    flex: 0 1 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`,B=u.div`
    background-color: ${v.dark.third.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: ${y.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${y.sm}px) {
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
        background-color: ${v.dark.third.default};
        transform-origin: top left;
        transform: rotate(45deg);
    }
`,R=u.p`
    width: 90%;
    height: 90%;
    margin: 0;
    color: ${v.dark.white};
`,q=u.span``,L=()=>c.createElement(G,null,c.createElement(N,null,c.createElement(W,null,"det er satme et godt spørgsmål...")),c.createElement(V,{sizePct:8,verticalOffset:5,keyframes:H(15)}),c.createElement(V,{sizePct:7,verticalOffset:-30,keyframes:H(10)}),c.createElement(V,{sizePct:5,verticalOffset:0,keyframes:H(5)})),H=e=>p`
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
`,N=u.div`
    flex: 0 0 80%;
    height: 90%;
    border-radius: 80px;
    background-color: ${v.dark.third.default};

    animation: ${H(20)} 3s linear infinite;

    position: relative;

    :before,
    :after {
        content: '';
        background-color: ${v.dark.third.default};
        border-radius: 50%;
        position: absolute;
    }
    :before {
        width: 50px;
        height: 50px;
        top: -25px;
        left: 200px;
        box-shadow: -225px 50px 0 -12px ${v.dark.third.default}, 80px 5px 0 0px ${v.dark.third.default};
    }
    :after {
        bottom: -10px;
        right: 26px;
        width: 30px;
        height: 30px;
        box-shadow: 40px -34px 0 0 ${v.dark.third.default}, -100px 0 0 30px ${v.dark.third.default},
            -150px 10px 0 6px ${v.dark.third.default}, -200px -5px 0 10px ${v.dark.third.default};
    }
`,V=u.div`
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
        background-color: ${v.dark.third.default};

        top: ${e=>e.verticalOffset}px;
    }
`,W=u.p`
    color: ${v.dark.white};
`;const X=({isThinking:e,lastResponse:t,lastActionTime:r,isAsking:n})=>{const[a,i]=d.exports.useState(!1);return d.exports.useEffect((()=>{const e=new Date,t=n&&e.getTime()-r.getTime()<3e3;if(t!==a&&i(t),!t)return;const o=setTimeout((()=>i(!1)),3e3);return()=>clearTimeout(o)}),[r,a,i,n]),c.createElement(_,null,e?c.createElement(L,null):c.createElement(P,{response:t}),c.createElement(J,null,c.createElement(U,{shouldNod:a})))},_=u.div`
    display: flex;
    flex-direction: row;
    margin-left: 8px;
    width: calc(100%-8px); ;
`,U=u.div`
    background-image: url('${e=>e.shouldNod?"/ask-daniel/assets/daniel-thinking.8616aa71.gif":"/ask-daniel/assets/daniel-avatar.090ca183.png"}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 30%;
    border: 8px solid ${v.dark.third.default};
`,J=u.div`
    flex: 0 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Y=({onSuggestionSelected:e,currentQuestion:t,isThinking:r})=>{const{getMatches:n}=(()=>{const[e,t]=d.exports.useState();return d.exports.useEffect((()=>{e||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetSuggestedQuestions?"+new URLSearchParams({userId:g}));if(e.ok){const r=await e.json();t(r)}})()}),[e,t]),{getMatches:t=>{const r=null!=e?e:[];return t?r.filter((e=>e.value.toLowerCase().includes(t.toLowerCase()))):r}}})();if(r||!t)return null;const a=n(t);return 0===a.length?null:c.createElement(Z,null,c.createElement(ee,null,a.map((t=>c.createElement(te,{suggestion:t.value,key:t.id,askedByMe:t.askedByMe,onSuggestionSelected:e})))))},Z=u.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
`,ee=u.div`
    max-width: 100%;
    max-height: 100%;
    background-color: ${v.dark.black};

    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
`,te=({suggestion:e,onSuggestionSelected:t,askedByMe:r})=>{const[n,a]=d.exports.useState(!1),i=n?r=>{"Enter"===r.key&&(r.preventDefault(),t(e))}:void 0;return c.createElement(re,{tabIndex:0,onClick:()=>t(e),onFocus:()=>a(!0),onBlur:()=>a(!1),onKeyDown:i},e,r?" (*asked by you)":"")},re=u.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 100%;
    background-color: ${v.dark.secondary.default};
    color: ${v.dark.white};
    display: flex;

    :hover,
    :active,
    :focus {
        background-color: ${v.dark.secondary.light};
        cursor: pointer;
        outline: none;
    }
`,ne=({onValueChange:e,onSubmitQuestion:t,value:r,isThinking:n,lastQuestion:a})=>c.createElement(ae,null,c.createElement(ie,null,c.createElement(oe,null),c.createElement(se,{onChange:t=>{n||e(t.target.value)},autoFocus:!0,onKeyDown:e=>{"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),t(r))},value:r,placeholder:a,"aria-label":"Textarea for question input"}),c.createElement(Y,{currentQuestion:r,isThinking:n,onSuggestionSelected:r=>{e(r),t(r,!0)}}))),ae=u.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 8px;
    width: calc(100%-8px); ;
`,ie=u.div`
    background-color: ${v.dark.secondary.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    position: relative;

    @media (max-width: ${y.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${y.sm}px) {
        border-radius: 20px;
    }
`,oe=u.div`
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
        background-color: ${v.dark.secondary.default};
        transform-origin: top right;
        transform: rotate(-45deg);
    }
`,se=u.textarea`
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    color: ${v.dark.white};
    ::placeholder {
        color: ${v.dark.third.light};
    }
`,le=()=>{const[e,t]=d.exports.useState(""),[r,n]=d.exports.useState(!1),[a,i]=d.exports.useState([]),{getResponse:o}=(()=>{const[e,t]=d.exports.useState();return d.exports.useEffect((()=>{e||(async()=>{const e=await fetch("https://ask-daniel.azurewebsites.net/api/GetResponses");if(e.ok){const r=await e.json();t(r)}})()}),[e,t]),{getResponse:function(t){const r=t.replace(w,"").split(" ").map((e=>e.toLowerCase()));if(!e)return k();const n=e.map((e=>l(s({},e),{matchedKeywordCount:e.keywords.filter((e=>r.includes(e))).length}))),a=Math.max(...n.map((e=>e.matchedKeywordCount)));return n.find((e=>e.matchedKeywordCount===a&&e.matchedKeywordCount>0))||k()}}})(),u=(e,t)=>{n(!0),t||(async e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e,userId:g})},r=await fetch("https://ask-daniel.azurewebsites.net/api/AddQuestion",t);await r.json()})(e),setTimeout((()=>x(e)),2500)},[p,m]=h(t,u),{lastActionTime:f}=p,x=e=>{const r=o(e);i([{question:e,response:r,time:new Date},...a]),t(""),n(!1)};let b;const y=!!e,v=[...a];return y||r||(b=v.shift()),c.createElement(de,null,c.createElement(ne,{onValueChange:e=>{m((e=>l(s({},e),{isIdle:!1,lastActionTime:new Date}))),t(e)},value:null!=e?e:"",onSubmitQuestion:u,isThinking:r,lastQuestion:null==b?void 0:b.question}),c.createElement(X,{lastActionTime:f,isThinking:r,lastResponse:null==b?void 0:b.response,isAsking:y}),c.createElement(ue,null,c.createElement($,{messages:v})))},de=u.div`
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

    background-color: ${v.dark.primary.default};

    // Default grid 2 x 2
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 60%;

    @media (max-width: ${y.md}px) {
        // Small grid 1 x 3
        grid-template-columns: 100%;
        grid-template-rows: 20% 20% 60%;

        div,
        p,
        textarea {
            font-size: 22px;
        }
    }

    @media (max-width: ${y.sm}px) {
        div,
        p,
        textarea {
            font-size: 18px;
        }
    }
`,ue=u.div`
    justify-self: center;
    width: 100%;
    max-width: 800px;

    @media (min-width: ${y.md}px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
    }
`;function ce(){return c.createElement(le,null)}m.render(c.createElement(c.StrictMode,null,c.createElement(ce,null)),document.getElementById("root"));
