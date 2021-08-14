var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&o(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{C as d,q as m,R as u,W as c,a as g}from"./vendor.e15a6dac.js";const p={getResponse:function(e){if(!e)return"";const t=e.replace(x,"").split(" ").map((e=>e.toLowerCase())),r=h.map((e=>s(l({},e),{matchedKeywordCount:e.keywords.filter((e=>t.includes(e))).length}))),a=Math.max(...r.map((e=>e.matchedKeywordCount))),n=r.find((e=>e.matchedKeywordCount===a&&e.matchedKeywordCount>0));return n?n.message:v[Math.floor(v.length*Math.random())]},getIdleQuestion:function(){return k[Math.floor(Math.random()*k.length)]}};const f=e=>Array.isArray(e),k=["Har du hørt om Rasmus Dybkjær?","Er du god til at flyve med svævefly?","Arbejder du meget med data?","Parkerer du nogensinde ulovligt?"],h=[{message:'Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg "wow!". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!',keywords:["rasmus","dybkjær","kompetent","smuk","flot"]},{message:"Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk.",keywords:["flyve","svæve","svævefly","rejse"]},{message:[{value:"Jeg er helt tosset med data. Jeg er faktisk en "},{value:"datagud 😎👴🙌",src:"https://www.kratosbi.com/data-god-daniel-otykier",type:"Link"}],keywords:["data","datagud","gud"]},{message:[{value:"Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til "},{value:"QPark",src:"https://www.q-park.dk/da/kontakt-os/",type:"Link"},{value:" så der kommer orden i sagerne"}],keywords:["parkering","qpark","parkeringsplads","parkere","parkerer","ulovligt"]},{message:"Anti-vaxxers skal dø!",keywords:["vaxx","vaccine","vaxxer","corona","covid","antivaxxer","antivaxxers"]},{message:[{value:"Jeg "},{value:"elsker atomkraft.",src:"https://www.atomkraft-jatak.dk/",type:"Link"},{value:" Jeg er jo ikke dum."}],keywords:["energi","klima","atomkraft"]},{message:"Tabular Editor er fantastisk",keywords:["tabular","datamodel"]},{message:"Kom så allesammen, gentag efter mig: Hva’ vil vi ha’? mRNA!",keywords:["vaxx","vaccine","vaxxer","corona","covid","mrna","genetik","antivaxxer","antivaxxers"]},{message:"Dan Jørgensen er dælme sølle for en klimaminister. Stop nu idiotiet og lad videnskaben komme til.",keywords:["klima","klimaminister","videnskab","politik","jørgensen","dan"]},{message:"Er du bange for at blive forgiftet med vaccinepartikler? Så gør som alle andre frie folk og tag mundbind på!",keywords:["vaxx","vaccine","vaxxer","corona","covid","mundbind","antivaxxer","antivaxxers"]},{message:"Jeg er vild med frokost. Vi spiser bunkevis af karbonader her i Jylland... nam nam. Ska vi spise noget nu?",keywords:["mad","sulten","frokost"]},{message:"Klimaforandringer kommer på sigt til at være den mest ødelæggende, omkostningsfulde og menneskelivskrævende katastrofe vi nogensinde har været vidner til. Den får pandemien til at ligne en væltet cykel til sammenligning",keywords:["klimaforandringer","katastrofe","klima"]},{message:"At “lave sin egen research” er som at lave sine egne vandrør. Det bliver bedst hvis man er VVS’er.",keywords:["research","pseudovidenskab","antivaxxer","videnskab","forskning"]}],v=["Det ved jeg sgu ikke noget om.","Hvad er det for noget pis at fyre af?","Det ku du li at vide","Det er satme det dummeste jeg har hørt længe","Hold nu kæft","Spørg om noget andet","Hvorfor spørger du ikke om noget fornuftigt? Du spilder min tid."],x=/[.,/#!$%^&*;:{}=\-_`~()?]/g;const b={xs:600,sm:800,md:1e3,lg:1200,xl:1600},y={dark:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#5F985D",dark:"#3F653E",light:"#A8C9A6"},third:{default:"#6E6362",dark:"#363030",light:"#BCB3B3"},white:"#F4F4F4",black:"#101218"},light:{primary:{default:"#394053",dark:"#212531",light:"#9DA5BE"},secondary:{default:"#4E4A59",dark:"#312E38",light:"#A09AAC"},third:{default:"#6E6362",dark:"#363030",light:"#D9D4D4"},white:"#F4F4F4",black:"#101218"}},w=m.a`
    color: ${y.dark.white};
    text-decoration: none;
    position: relative;
    z-index: 0;

    :hover,
    :focus {
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
`,E=({messages:e})=>u.createElement(D,null,e.map((e=>u.createElement($,{key:e.time.toString(),messages:e})))),$=({messages:e})=>{const{time:t,response:r,question:a}=e;return u.createElement(u.Fragment,null,u.createElement(j,{time:t,question:a}),u.createElement(A,{time:t,response:r}))},j=({question:e,time:t})=>u.createElement(S,{justifyContent:"flex-start"},u.createElement(C,{backgroundColor:y.dark.secondary.dark},u.createElement(T,null,F(t),".",O(t)),u.createElement(I,null,e))),A=({response:e,time:t})=>{let r;return r=f(e)?u.createElement(u.Fragment,null,e.map(((e,t)=>"Link"===e.type?u.createElement(w,{href:e.src,key:t,target:"_blank"},e.value):u.createElement(Q,{key:t},e.value)))):u.createElement(Q,null,e),u.createElement(S,{justifyContent:"flex-end"},u.createElement(C,{backgroundColor:y.dark.third.dark},u.createElement(T,null,F(t),".",O(t)),u.createElement(I,null,r)))},D=m.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,S=m.div`
    display: flex;
    flex-direction: row;
    justify-content: ${e=>e.justifyContent};
`,C=m.div`
    padding: 4px 12px;
    margin: 4px;
    border-radius: 8px;
    max-width: 80%;
    background-color: ${e=>e.backgroundColor};
    color: ${y.dark.white};
    display: flex;
`,T=m.div`
    width: 50px;
    margin-right: 12px;
`,I=m.div``,Q=m.span``;function F(e){const t=e.getHours();return t<10?`0${t}`:t.toString()}function O(e){const t=e.getMinutes();return t<10?`0${t}`:t.toString()}const P=({response:e})=>{let t;return t=e&&f(e)?u.createElement(u.Fragment,null,e.map(((e,t)=>"Link"===e.type?u.createElement(w,{href:e.src,key:t,target:"_blank"},e.value):u.createElement(H,{key:t},e.value)))):u.createElement(H,null,e),u.createElement(z,null,u.createElement(K,null,u.createElement(J,null,t),u.createElement(q,null)))},z=m.div`
    flex: 0 1 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`,K=m.div`
    background-color: ${y.dark.third.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: ${b.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${b.sm}px) {
        border-radius: 20px;
    }
`,q=m.div`
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
`,J=m.p`
    width: 90%;
    height: 90%;
    margin: 0;
    color: ${y.dark.white};
`,H=m.span``,R=()=>u.createElement(B,null,u.createElement(L,null,u.createElement(N,null,"det er satme et godt spørgsmål...")),u.createElement(V,{sizePct:8,verticalOffset:5,keyframes:M(15)}),u.createElement(V,{sizePct:7,verticalOffset:-30,keyframes:M(10)}),u.createElement(V,{sizePct:5,verticalOffset:0,keyframes:M(5)})),M=e=>c`
    0% {
        visibility: hidden;
    }
    ${e}% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
`,B=m.div`
    flex: 0 1 80%;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`,L=m.div`
    flex: 0 0 80%;
    height: 90%;
    border-radius: 80px;
    background-color: ${y.dark.third.default};

    animation: ${M(20)} 3s linear infinite;

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
`,V=m.div`
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
`,N=m.p`
    color: ${y.dark.white};
`;const X=({isThinking:e,lastResponse:t,lastActionTime:r,isAsking:a})=>{const[n,i]=d.exports.useState(!1);return d.exports.useEffect((()=>{const e=new Date,t=a&&e.getTime()-r.getTime()<3e3;if(t!==n&&i(t),!t)return;const o=setTimeout((()=>i(!1)),3e3);return()=>clearTimeout(o)}),[r,n,i,a]),u.createElement(_,null,e?u.createElement(R,null):u.createElement(P,{response:t}),u.createElement(G,null,u.createElement(W,{shouldNod:n})))},_=m.div`
    display: flex;
    flex-direction: row;
    margin-left: 8px;
    width: calc(100%-8px); ;
`,W=m.div`
    background-image: url('${e=>e.shouldNod?"/assets/daniel-thinking.8616aa71.gif":"/assets/daniel-avatar.090ca183.png"}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 30%;
    border: 8px solid ${y.dark.third.default};
`,G=m.div`
    flex: 0 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`,U=({onValueChange:e,onSubmitQuestion:t,value:r,isThinking:a,lastQuestion:n})=>u.createElement(Y,null,u.createElement(Z,null,u.createElement(ee,null),u.createElement(te,{onChange:t=>{a||e(t.target.value)},autoFocus:!0,onKeyDown:e=>{"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),t(r))},value:r,placeholder:n,"aria-label":"Textarea for question input"}))),Y=m.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 8px;
    width: calc(100%-8px); ;
`,Z=m.div`
    background-color: ${y.dark.secondary.default};
    width: 90%;
    height: 90%;
    border-radius: 50px;
    position: relative;

    @media (max-width: ${b.md}px) {
        border-radius: 30px;
    }
    @media (max-width: ${b.sm}px) {
        border-radius: 20px;
    }
`,ee=m.div`
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
`,te=m.textarea`
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
`,re=()=>{const[e,t]=d.exports.useState(""),[r,a]=d.exports.useState(!1),[n,i]=d.exports.useState([]),o=e=>{a(!0),setTimeout((()=>f(e)),2500)},[m,c]=((e,t)=>{const[r,a]=d.exports.useState({isIdle:!1,lastActionTime:new Date,idleQuestionSubstringCounter:0,idleQuestion:"",hasAskedIdleQuestion:!1}),{isIdle:n,lastActionTime:i,idleQuestionSubstringCounter:o,hasAskedIdleQuestion:m,idleQuestion:u}=r;return d.exports.useEffect((()=>{if(!n||m)return;const r=setInterval((()=>{if(o>u.length)return a((e=>s(l({},e),{hasAskedIdleQuestion:!0}))),void t(u);a((e=>s(l({},e),{idleQuestionSubstringCounter:o+1}))),e(u.substring(0,o))}),150);return()=>clearInterval(r)}),[a,e,r]),d.exports.useEffect((()=>{const e=setInterval((()=>{n||(new Date).getTime()-i.getTime()>3e4&&a((e=>s(l({},e),{isIdle:!0,hasAskedIdleQuestion:!1,idleQuestionSubstringCounter:0,idleQuestion:p.getIdleQuestion()})))}),1e3);return()=>clearInterval(e)}),[a,i,n]),[r,a]})(t,o),{lastActionTime:g}=m,f=e=>{const r=p.getResponse(e);i([{question:e,response:r,time:new Date},...n]),t(""),a(!1)};let k;const h=!!e,v=[...n];return h||r||(k=v.shift()),u.createElement(ae,null,u.createElement(U,{onValueChange:e=>{c((e=>s(l({},e),{isIdle:!1,lastActionTime:new Date}))),t(e)},value:null!=e?e:"",onSubmitQuestion:o,isThinking:r,lastQuestion:null==k?void 0:k.question}),u.createElement(X,{lastActionTime:g,isThinking:r,lastResponse:null==k?void 0:k.response,isAsking:h}),u.createElement(ne,null,u.createElement(E,{messages:v})))},ae=m.div`
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

    @media (max-width: ${b.md}px) {
        // Small grid 1 x 3
        grid-template-columns: 100%;
        grid-template-rows: 20% 20% 60%;

        div,
        p,
        textarea {
            font-size: 22px;
        }
    }

    @media (max-width: ${b.sm}px) {
        div,
        p,
        textarea {
            font-size: 18px;
        }
    }
`,ne=m.div`
    justify-self: center;
    width: 100%;
    max-width: 800px;

    @media (min-width: ${b.md}px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
    }
`;function ie(){return u.createElement(re,null)}g.render(u.createElement(u.StrictMode,null,u.createElement(ie,null)),document.getElementById("root"));
