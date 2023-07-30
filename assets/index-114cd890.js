import{r as m,j as e,a as ie}from"./react-e3f22801.js";import{c as oe}from"./react-dom-ca9bc2d4.js";import{L as ce,c as de}from"./react-router-dom-4201b085.js";import{a as ue,O as he,R as fe}from"./react-router-8ba3ec2c.js";import{T as N}from"./flowbite-react-5e689fe5.js";import"./react-indiana-drag-scroll-533871e5.js";import{$ as G}from"./jquery-e66bc7ee.js";import{Q as xe,a as me}from"./@tanstack-8b34a394.js";import"./scheduler-765c72db.js";import"./@remix-run-a4f399d2.js";import"./react-icons-c518e3e7.js";import"./@floating-ui-2bd93df1.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./tailwind-merge-1166cefb.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const h of i)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function c(i){const h={};return i.integrity&&(h.integrity=i.integrity),i.referrerPolicy&&(h.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?h.credentials="include":i.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function n(i){if(i.ep)return;i.ep=!0;const h=c(i);fetch(i.href,h)}})();const O=m.createContext(),pe=({children:x})=>{const[a,c]=m.useState("Construct FA");return e.jsx(O.Provider,{value:{navBarSelect:a,setNavBarSelect:c},children:x})},ge=()=>{const{navBarSelect:x}=m.useContext(O);return e.jsx("div",{className:`min-[1880px]:px-96
    lg:px-16
    md:px-6 px-6 min-h-[64px] w-full py-6 pl-6 bg-slate-500 text-white font-semibold text-2xl`,children:x})},be=()=>{const{navBarSelect:x,setNavBarSelect:a}=m.useContext(O);ue();const c=[{title:"Construct FA",to:"/AutomataMidterm/"},{title:"Classify FA",to:"/AutomataMidterm/classify"},{title:"Validate String",to:"/AutomataMidterm/validate"},{title:"Minimize DFA",to:"/AutomataMidterm/minimized"}];return e.jsxs("nav",{className:"fixed w-full z-50",children:[e.jsx("div",{className:`min-[1880px]:px-96
        lg:px-16
        md:px-6 px-6 bg-blue-500 p-4 flex items-center justify-start list-none gap-x-5 text-white`,children:c.map((n,i)=>e.jsx(ce,{to:n.to,onClick:()=>{a(n.title)},className:`${n.title===x&&"bg-white p-2 rounded-md text-black"}`,children:n.title},i))}),e.jsx(ge,{})]})},je=()=>e.jsxs("div",{className:"min-h-screen flex flex-col overflow-auto",children:[e.jsx(be,{}),e.jsx("main",{className:`
          min-[1880px]:px-96
          lg:px-16
          md:px-6 md:pb-2 px-6 mt-48`,children:e.jsx(he,{})})]}),M=m.createContext(),Se=({children:x})=>{const[a,c]=m.useState({}),[n,i]=m.useState(0),[h,g]=m.useState(0),[u,b]=m.useState(!1),[C,w]=m.useState(!1),[j,f]=m.useState(!1),[r,v]=m.useState({faStates:[],faAlphabets:[],faStartState:"",faFinalStates:[],transitionSets:Array.from({length:n},(s,t)=>Array.from({length:h},(o,l)=>({transitState:`q${t}`,transitAlphabet:String.fromCharCode(l+97),transitResult:[],startState:!0,finalState:!0})))}),[R,D]=m.useState(""),Q=()=>{r.faStates=[],r.faStartState="q0",r.faFinalStates=[],v({...r})},P=()=>{r.transitionSets=Array.from({length:n},(s,t)=>Array.from({length:h},(o,l)=>({transitState:`q${t}`,transitAlphabet:String.fromCharCode(l+97),transitResult:[],startState:r.faStartState===`q${t}`,finalState:r.faFinalStates.includes(`q${t}`)}))),v({...r})},J=s=>{if(c({...a,stateError:""}),Q(),P(),v({...r}),Number(s.target.value)<=0&&(i(0),Q()),Number(s.target.value)>0){i(Number(s.target.value));for(let t=0;t<Number(s.target.value);t++)r.faStates.push(`q${t}`),r.transitionSets=Array.from({length:Number(s.target.value)},(o,l)=>Array.from({length:h},(d,p)=>({transitState:`q${l}`,transitAlphabet:String.fromCharCode(p+97),transitResult:[],startState:`q${l}`===r.faStartState,finalState:!1}))),v({...r,faStartState:"q0"})}},W=()=>{if(c({...a,nfaError:""}),u){const s=r.faAlphabets.indexOf("$");r.faAlphabets.splice(s,1),b(!1),v({...r}),E(),P()}u||(b(!0),r.faAlphabets.push("$"),r.transitionSets=Array.from({length:n},(s,t)=>Array.from({length:r.faAlphabets.length},(o,l)=>({transitState:`q${t}`,transitAlphabet:l!==r.faAlphabets.length-1?String.fromCharCode(l+97):"$",transitResult:[],startState:r.faStartState===`q${t}`,finalState:r.faFinalStates.includes(`q${t}`)}))),E(),v({...r}))},_=()=>{b(!1),w(!1),r.faAlphabets=[],v({...r})},U=s=>{if(c({...a,alphabetError:""}),_(),P(),v({...r}),Number(s.target.value)<=0&&(g(0),_()),Number(s.target.value)>0&&Number(s.target.value)<=26){g(Number(s.target.value));for(let t=0;t<Number(s.target.value);t++)r.faAlphabets.push(String.fromCharCode(t+97)),r.transitionSets=Array.from({length:n},(o,l)=>Array.from({length:Number(s.target.value)},(d,p)=>({transitState:`q${l}`,transitAlphabet:String.fromCharCode(p+97),transitResult:[],startState:`q${l}`===r.faStartState,finalState:r.faFinalStates===`q${l}`}))),v({...r})}else Number(s.target.value)>=27&&(c({...a,alphabetError:"Cannot exceed 26 alphabets"}),_(),P())},Y=s=>{const{transitionSets:t}=r;t.forEach(o=>{o.forEach(l=>{l.transitState!==s?l.startState=!1:l.startState=!0})}),v({...r,faStartState:s})},$=()=>{const{transitionSets:s,faFinalStates:t}=r;t.forEach(o=>{s.forEach(l=>{l.filter(d=>d.transitState===o).forEach(d=>d.finalState=!0)})})},y=s=>{const{transitionSets:t}=r;t.forEach(o=>{o.forEach(l=>{l.transitState===s&&(l.finalState=!1)})})},q=s=>{const{value:t,checked:o}=s.target,{faFinalStates:l}=r;if(o)l.includes(t)||(l.push(t),$());else{const d=l.indexOf(t);l.splice(d,1),y(t)}v({...r})},E=()=>{const{transitionSets:s,faAlphabets:t}=r;let o=!1,l=0;t.includes("$")?(w(!0),o=!0):s.forEach(d=>d.forEach(p=>{l+=p.transitResult.length,l!==r.faStates.length*r.faAlphabets.length?(w(!0),o=!0):(w(!1),o=!1)})),o||w(!1)},X=(s,t,o,l)=>{const{checked:d}=l.target,{transitionSets:p}=r,{row:S}=t,{col:A}=o,I=p[S][A];d&&!I.transitResult.includes(s)?(I.transitResult.push(s),E()):(I.transitResult.splice(I.transitResult.indexOf(s),1),E()),v({...r})},Z=s=>{c({...a,stringError:""}),f(!1);const{value:t}=s.target;D(t)},z=()=>{const{faAlphabets:s}=r;let t=R.length-1,o=!0;for(;t>=0;){if(!s.includes(R[t]))return!1;t--}return o};function B(){const{transitionSets:s}=r;let t=[];return s.forEach(o=>{o.forEach(l=>{l.startState&&t.push(l)})}),t}const T=s=>{const{transitionSets:t}=r;let o=[];return t.forEach(l=>{l.forEach(d=>{d.transitState===s?(d.startState=!0,o.push(d)):d.startState=!1})}),o};let F=[B()],k=!1;const H=(s,t)=>{let o=s,l=t;if(o.length===0&&!k){F=[T(r.faStartState)],l.every(d=>r.faFinalStates.includes(d)?(f(r.faFinalStates.includes(d)),!1):!0),l=[];return}if(c({...a,stringError:""}),r.faFinalStates.length<=0){c({...a,stringError:"Missing Final States"});return}z()?(k=!1,l=[],F.forEach(d=>d.forEach(p=>{p.transitAlphabet===o[0]&&p.transitResult.forEach(S=>{l.includes(S)||l.push(S)}),p.transitAlphabet==="$"&&p.transitResult.length>0&&p.transitResult.forEach(S=>{k=!0,l.includes(S)||l.push(S)})})),k||(l.forEach(d=>{F.push(T(d))}),F.forEach(d=>{d.forEach(p=>{p.transitAlphabet==="$"&&p.transitResult.length>0&&p.transitResult.forEach(S=>{k=!0,l.includes(S)||l.push(S)})})}),k&&(F=[],l.forEach(d=>{F.push(T(d))}),H(o,l))),o=o.slice(1),k&&(F=[],l.forEach(d=>{F.push(T(d))}),H(o,l)),F=[],l.forEach(d=>{F.push(T(d))}),H(o,l)):(c({...a,stringError:"Some input alphabets are not included in your alphabet set"}),f(!1))},K=()=>{if(c({...a,stringError:""}),r.faFinalStates.length<=0){c({...a,stringError:"Missing Final States"});return}if(!z())c({...a,stringError:"Some input alphabets are not included in your alphabet set"}),f(!1);else{let s=0,t=B(),o;for(;s<=R.length-1;)t.some(l=>l.transitAlphabet===R[s])&&(o=t.find(l=>l.transitAlphabet===R[s]),t.forEach(l=>l.startState=!1)),t=T(o.transitResult[0]),s++;t=T(r.faStartState),f(r.faFinalStates.includes(o.transitResult[0]))}},ee=()=>{const{faStates:s,faAlphabets:t,faStartState:o,faFinalStates:l,transitionSets:d}=r;console.log(B()),console.log("States set: "),console.log(s),console.log("Alphabets set: "),console.log(t),console.log("Start state: "),console.log(o),console.log("Transitions set: "),console.log(d),console.log("Final states: "),console.log(l)};return e.jsx(M.Provider,{value:{validateNFA:H,handleTransition:X,isAccepted:j,setIsAccepted:f,inputString:R,setInputString:D,handleString:Z,validateDFA:K,epsilonCheck:u,setEpsilonCheck:b,nfa:C,setNfa:w,setRows:i,setCols:g,adjustEpsilon:W,error:a,setError:c,handleFinalState:q,fa:r,setFa:v,handleStartState:Y,generateAlphabets:U,generateStates:J,submitForm:ee},children:x})},se=()=>{const{fa:x,generateStates:a,error:c}=m.useContext(M),{faStates:n}=x;return e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:[e.jsxs("label",{className:"flex gap-1 items-center",htmlFor:"state",children:[e.jsx("span",{children:"State:"}),e.jsx("input",{min:"0",type:"number",required:!0,onChange:i=>{a(i)},value:n.length,className:"border-2 border-blue-500 px-2 py-1 w-full",id:"state",placeholder:"Number of States..."})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx("div",{className:"grid grid-cols-4 gap-4",children:n==null?void 0:n.map((i,h)=>e.jsx("span",{className:"text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:i},h))})})]})},ae=()=>{const{fa:x,generateAlphabets:a,error:c,adjustEpsilon:n,epsilonCheck:i}=m.useContext(M),{faAlphabets:h}=x;return e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:[e.jsxs("label",{className:"flex items-center gap-1",htmlFor:"alphabet",children:[e.jsx("span",{children:"Alphabet:"}),e.jsx("input",{required:!0,onChange:g=>{a(g)},value:h.length,className:"border-2 border-blue-500 px-2 py-1 w-full",type:"number",id:"alphabet",placeholder:"Number of Alphabets"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"grid grid-cols-4 gap-4",children:h==null?void 0:h.map((g,u)=>e.jsxs("span",{className:"text-center text-gray-950 font-semibold text-sm rounded-[20px] bg-gray-400",children:[" ",g]},u))}),h.length>0&&e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{checked:i,onChange:g=>n(g),className:"border-2 border-blue-500",type:"checkbox"}),e.jsxs("label",{className:"text-gray-500 text-sm",htmlFor:"",children:["Include Epsilon? ",e.jsx("span",{className:"font-semibold",children:"($)"})]})]})]}),e.jsx("span",{className:`${c?"text-red-500 text-xs":"hidden"}`,children:c&&c.alphabetError})]})},le=()=>{const{fa:x,handleStartState:a}=m.useContext(M),{faStates:c,faStartState:n}=x;if(c.length>0)return e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center items-center",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx("div",{children:"Start State"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:c==null?void 0:c.map((i,h)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("input",{onChange:()=>{a(i)},checked:n===i,type:"checkbox"}),e.jsx("label",{htmlFor:"",children:i})]},h))})]}),e.jsx("div",{className:"w-[40%] whitespace-nowrap py-0.5 text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:n})]})},re=()=>{const{fa:x,handleFinalState:a}=m.useContext(M),{faStates:c,faFinalStates:n}=x;if(c.length>0)return e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx("div",{children:"Final State"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:c==null?void 0:c.filter(i=>i!=="Trap").map((i,h)=>e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{checked:n.includes(i),type:"checkbox",onChange:g=>{a(g)},value:i,id:i}),e.jsx("label",{htmlFor:i,children:i})]},h))})]}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:n==null?void 0:n.map((i,h)=>e.jsx("span",{className:"whitespace-nowrap py-0.5 text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:i},h))})]})},te=()=>{const{fa:x}=m.useContext(M),{transitionSets:a}=x;if(a.length>0)return e.jsx("div",{className:"h-full p-4 w-full box-border flex flex-col items-center border-blue-500 border-2 rounded-tl-md rounded-tr-md",children:e.jsx("div",{className:"grid grid-cols-5 gap-6 w-fit",children:a==null?void 0:a.map((c,n)=>e.jsx("div",{className:"h-full p-4 w-full flex flex-col border-blue-500 border-2 rounded-tl-md rounded-tr-md gap-2",children:c.map((i,h)=>e.jsxs("div",{className:"w-fit text-white bg-blue-950 text-center px-2 py-1 rounded-md",children:[i.startState&&e.jsxs("span",{className:"text-xs text-center",children:["Start state ",e.jsx("br",{})]}),i.finalState&&e.jsxs("span",{className:"text-xs text-center",children:["Final State ",e.jsx("br",{})]}),i.transitState,"  ->  ",i.transitAlphabet,"  = ",i.transitResult.map((g,u)=>e.jsxs("span",{children:[g,i.transitResult.length-1!==u&&", "]},u))]},h))},n))})})},ne=()=>{const{fa:x,handleTransition:a}=m.useContext(M),{faStates:c,faAlphabets:n,faStartState:i,faFinalStates:h,transitionSets:g}=x;if(c.length>0||n.length>0)return e.jsxs("div",{className:"p-4 flex w-full border-2 rounded-tl-md rounded-tr-md border-blue-500 flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"font-semibold",children:"Transition Table"}),e.jsxs("ul",{className:"text-xs text-gray-500",children:[e.jsx("li",{children:"* The Header is the resulting state"}),e.jsx("li",{children:"* The check boxes are the alphabets for transition"})]})]}),e.jsxs(N,{children:[e.jsxs(N.Head,{children:[e.jsxs(N.HeadCell,{children:["Start and ",e.jsx("br",{})," Final States"]}),e.jsx(N.HeadCell,{children:"States"}),n==null?void 0:n.map((u,b)=>e.jsx(N.HeadCell,{children:u},b))]}),e.jsx(N.Body,{className:"divide-y",children:c==null?void 0:c.map((u,b)=>e.jsxs(N.Row,{className:"bg-white dark:border-gray-700 dark:bg-gray-800",children:[e.jsxs(N.Cell,{children:[u===i&&e.jsxs("span",{className:"whitespace-nowrap",children:["Start State: ",i," ",e.jsx("br",{})]}),h.length>0&&h.filter(C=>C===u).map((C,w)=>e.jsxs("div",{children:["Final State: ",C]},w))]}),e.jsx(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white",children:u}),n==null?void 0:n.map((C,w)=>e.jsx(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white",children:c==null?void 0:c.map((j,f)=>{var r;return e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{checked:(r=g[b][w])==null?void 0:r.transitResult.includes(j),onChange:v=>{a(j,{row:b,transitState:u},{col:w,transitAlphabet:C},v)},type:"checkbox"}),e.jsx("label",{htmlFor:"",children:j})]},f)})},w))]},b))})]})]})},Ne=()=>{const{submitForm:x}=m.useContext(M);return e.jsxs("main",{className:"flex flex-col gap-4",children:[e.jsx("section",{className:"w-full",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"h-full flex gap-4 w-full",children:e.jsxs("div",{className:"w-full grid grid-cols-4 gap-4",children:[e.jsx(se,{}),e.jsx(ae,{}),e.jsx(le,{}),e.jsx(re,{})]})}),e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx(ne,{}),e.jsx(te,{})]})]})}),e.jsx("button",{className:"transition duration-200 w-fit bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600",onClick:()=>{x()},children:"Submit"})]})},V=m.createContext(),ve=({children:x})=>{const[a,c]=m.useState([]),[n,i]=m.useState([]),[h,g]=m.useState(Array.from({length:1},()=>Array.from({length:1},()=>"q0"))),[u,b]=m.useState({states:a,alphabets:n,startState:[],finalStates:[],amountState:a.length,amountAlphabet:n.length,transitions:h}),[C,w]=m.useState({});let j=[],f=[];const[r,v]=m.useState(!1),[R,D]=m.useState(),Q=(s,t,o="q0")=>{g(Array.from({length:s},()=>Array.from({length:t},()=>o))),b({...u,transitions:Array.from({length:s},()=>Array.from({length:t},()=>o))})},P=(s,t,o)=>{let l=[...h];l[s][t]=o,g(l),b({...u,transitions:l})},J=(s=1)=>{for(;a.length>0;)a.pop(),b({...u,states:a,amountState:a.length});for(let t=0;t<s;t++)c(a,a.push(`q${t}`)),b({...u,states:a,amountState:a.length})},W=(s=1)=>{for(;n.length>0;)n.pop(),b({...u,alphabets:n,amountAlphabet:n.length});for(let t=0;t<s;t++)i(n,n.push(`${t}`)),b({...u,alphabets:n,amountAlphabet:n.length})},_=s=>{u.startState.pop();const{value:t}=s.target;u.startState.includes(t)||u.startState.push(t),b({...u})},U=()=>{for(;f.length>0;)f.pop();for(let s=0;s<a.length;s++){const t={state:a[s],transition:h[s]};f.push(t)}},Y=()=>{for(;j.length>0;)j.pop();let s=[],t=0,o,l;for(;t<a.length;){if(!u.startState.includes(a[t])){for(o=0;o<f.length;o++)if(a[t]!==f[o].state){for(l=0;l<n.length;l++)if(a[t]==f[o].transition[l]){o=a.length;break}}o===a.length&&l===n.length&&s.push(a[t])}t++}let d=[];f.map(S=>{s.includes(S.state)||d.push(S)}),f=d;let p=[];a.map(S=>{s.includes(S)||p.push(S)}),c(p),j=p},$=[],y=[],q=[],E=[],X=()=>{for(;q.length>0;)q.pop();for(let s=0;s<j.length;s++)for(let t=1;t<j.length;t++)j[s]!==j[t]&&s!==t&&(k(q,j[s],j[t])||q.push([j[s],j[t]]))};function Z(s,t){return!!(u.finalStates.includes(s)^u.finalStates.includes(t))}function z(s,t){return f.find(o=>o.state===s).transition[`${t}`]}function B(){for(;y.length>0;)y.pop()}function T(){let s=!1;y.map(t=>{for(let o=0;o<n.length;o++)if(k($,z(t[0],o),z(t[1],o))){$.push([t[0],t[1]]),s=!0;break}}),B(),q.map(t=>{k($,t[0],t[1])||y.push([t[0],t[1]])}),s&&T()}function F(){for(;$.length>0;)$.pop()}function k(s,t,o){let l=0;for(;l<s.length&&!(s[l][0]+s[l][1]===t+o||s[l][0]+s[l][1]===o+t);)l++;return l!==s.length}const H=()=>{for(Y(),X(),F(),B(),q.map(d=>{Z(d[0],d[1])?$.push([d[0],d[1]]):y.push([d[0],d[1]])}),T();E.length>0;)E.pop();let s=0,t=[];for(;s<j.length;){let d=0;if(!t.includes(j[s])){for(d=0;d<y.length&&!(j[s]===y[d][0]||j[s]===y[d][1]);d++);if(d===y.length){let p=[];for(let A=0;A<n.length;A++)p.push(z(j[s],A));let S={state:j[s],transitionTable:p};E.push(S)}else for(let p=0;p<2;p++)t.includes(y[d][p])||t.push(y[d][p])}s++}let o=[],l=0;for(;l<t.length;){let d=!1;for(let p=0;p<o.length;p++)if(o[p].includes(t[l])){d=!0;break}if(!d){let p=[];for(let S=0;S<y.length;S++)if(y[S].includes(t[l]))for(let A=0;A<2;A++)p.includes(y[S][A])||p.push(y[S][A]);o.push(p)}l++}for(let d=0;d<o.length;d++){let p=[];for(let A=0;A<n.length;A++)p.push(z(o[d][0],A));let S={state:o[d],transitionTable:p};E.push(S)}D(E)},K=()=>{U(),H(),console.log("DFA"),console.log(u),console.log("Before Minimized"),console.log(f),console.log("After minimized: "),console.log(E)},ee=s=>{const{value:t,checked:o}=s.target;if(o)u.finalStates.includes(t)||u.finalStates.push(t);else{const l=u.finalStates.indexOf(t);u.finalStates.splice(l,1)}b({...u})};return e.jsx(V.Provider,{value:{newStates:j,states:a,setStates:c,alphabets:n,setAlphabets:i,generateStates:J,generateAlphabets:W,setDfa:b,dfa:u,handleStartState:_,handleFinalState:ee,transitionTable:h,setTransitionTable:g,handleTransistionTable:P,initializeTransitionTable:Q,transitions:f,handleSubmit:K,handleTransitions:U,findInaccessibleState:Y,minimizedTransistionTable:E,showModal:r,setShowModal:v,error:C,setError:w,minimizedResult:R,setMinimizeResult:D},children:x})},we=()=>{const{states:x,alphabets:a,handleTransistionTable:c}=m.useContext(V);return e.jsxs("div",{className:"p-4 flex w-full rounded-tl-md rounded-tr-md  flex-col gap-2 bg-gray-200",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"font-semibold",children:"Transition Table"}),e.jsxs("ul",{className:"text-xs text-gray-500",children:[e.jsx("li",{children:"* The Header is the set of alphabets for transition"}),e.jsx("li",{children:"* The select box is the resulting state"})]})]}),e.jsxs(N,{children:[e.jsxs(N.Head,{children:[e.jsx(N.HeadCell,{children:"States"}),a==null?void 0:a.map((n,i)=>e.jsx(N.HeadCell,{children:n},i))]}),e.jsx(N.Body,{className:"divide-y",children:x==null?void 0:x.map((n,i)=>e.jsxs(N.Row,{className:"bg-white dark:border-gray-700 dark:bg-gray-800",children:[e.jsx(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white",children:n}),a==null?void 0:a.map((h,g)=>e.jsx(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white",children:e.jsx("select",{name:"transition",id:"transition",onChange:u=>{c(i,g,u.target.value)},children:x==null?void 0:x.map((u,b)=>e.jsx("option",{value:u,children:u},b))})},g))]},i))})]})]})},ye=()=>{const{minimizedResult:x,alphabets:a,dfa:c}=m.useContext(V);return e.jsx("div",{children:e.jsxs(N,{children:[e.jsxs(N.Head,{children:[e.jsx(N.HeadCell,{children:"States"}),a==null?void 0:a.map((n,i)=>e.jsx(N.HeadCell,{children:n},i))]}),e.jsx(N.Body,{className:"divide-y",children:x==null?void 0:x.map((n,i)=>e.jsxs(N.Row,{className:"bg-white dark:border-gray-700 dark:bg-gray-800",children:[e.jsxs(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white flex",children:[e.jsxs("div",{children:[c.finalStates.includes(n.state)&&"Final State: ",c.startState.includes(n.state)&&"Start State: "]}),e.jsxs("div",{children:["[ ",n.state," ]"]})]}),a==null?void 0:a.map((h,g)=>e.jsx(N.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white",children:n.transitionTable[h]},g))]},i))})]})})},Ce=()=>{const{showModal:x,setShowModal:a}=m.useContext(V);if(x)return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e.jsx("div",{className:"relative w-auto my-6 mx-auto min-w-[500px] max-w-3xl",children:e.jsxs("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[e.jsx("div",{className:"flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t",children:e.jsx("h3",{className:"text-3xl font-semibold",children:"Minimization Result"})}),e.jsx("div",{children:e.jsx(ye,{})}),e.jsx("div",{className:"flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b",children:e.jsx("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:c=>{a(!1),location.reload()},children:"Close"})})]})})}),e.jsx("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})},Ae=()=>{var j;const{generateStates:x,states:a,dfa:c,generateAlphabets:n,alphabets:i,handleStartState:h,handleFinalState:g,initializeTransitionTable:u,handleSubmit:b,setShowModal:C}=m.useContext(V),{setNavBarSelect:w}=m.useContext(O);return m.useEffect(()=>{w("Minimize DFA")}),m.useEffect(()=>{n(),x()},[]),e.jsxs("main",{className:"flex flex-col gap-4",children:[e.jsx("section",{className:"w-full",children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{className:"h-full flex gap-4 w-full",children:e.jsxs("div",{className:"w-full grid grid-cols-4 gap-4",children:[e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:[e.jsxs("label",{className:"flex gap-1 items-center",htmlFor:"state",children:[e.jsx("span",{children:"State:"}),e.jsx("input",{min:1,defaultValue:1,type:"number",required:!0,max:5,onChange:f=>{x(f.target.value),u(f.target.value,i.length)},className:"border-2 border-blue-500 px-2 py-1 w-full",id:"state",placeholder:"Number of States..."})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[a==null?void 0:a.map((f,r)=>e.jsx("span",{className:"text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:f},r))," "]})]}),e.jsxs("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:[e.jsxs("label",{className:"flex items-center gap-1",htmlFor:"alphabet",children:[e.jsx("span",{children:"Alphabet:"}),e.jsx("input",{required:!0,min:"1",defaultValue:"1",onChange:f=>{n(f.target.value),u(a.length,f.target.value)},max:"5",type:"number",id:"alphabet",placeholder:"Number of Alphabets",className:"border-2 border-blue-500 px-2 py-1 w-full"})]}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:i==null?void 0:i.map((f,r)=>e.jsxs("span",{className:"text-center text-gray-950 font-semibold text-sm rounded-[20px] bg-gray-400",children:[" ",f]},r))})]}),a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx("div",{children:"Start State"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:a==null?void 0:a.map((f,r)=>e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{type:"checkbox",onChange:v=>{h(v)},checked:(c==null?void 0:c.startState[0])==f,value:f,id:f}),e.jsx("label",{htmlFor:f,children:f})]},r))}),e.jsx("div",{className:"w-[50%] whitespace-nowrap py-0.5 text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:c.startState[0]})]})}),e.jsx("div",{className:"h-full p-4 border-2 rounded-tl-md rounded-tr-md border-blue-500 w-full shadow-lg flex flex-col gap-2 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx("div",{children:"Final State"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:a==null?void 0:a.map((f,r)=>e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{type:"checkbox",onChange:v=>{g(v)},value:f,id:f}),e.jsx("label",{htmlFor:f,children:f})]},r))}),e.jsx("div",{className:"w-full grid grid-cols-4 gap-4",children:(j=c.finalStates)==null?void 0:j.map((f,r)=>e.jsx("span",{className:"whitespace-nowrap py-0.5 text-center text-blue-600 font-semibold text-sm rounded-[20px] bg-blue-300",children:f},r))})]})})]})]})})})}),e.jsx(we,{}),e.jsx(Ce,{}),e.jsx("button",{className:"transition duration-200 w-fit bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600",onClick:f=>{f.stopPropagation(),f.preventDefault(),b(),C(!0)},children:"Submit"})]})},L=()=>e.jsxs("div",{children:[e.jsx("p",{children:"An error has occurred"}),e.jsx("a",{href:"/AutomataMidterm/",children:"Back home"})]}),Ee=()=>{const{setNavBarSelect:x}=m.useContext(O),{fa:a,nfa:c}=m.useContext(M),{faStates:n,faAlphabets:i,faStartState:h,faFinalStates:g}=a;return m.useEffect(()=>{x("Classify FA")}),e.jsxs("main",{className:"flex flex-col gap-4",children:[e.jsxs("section",{className:"flex flex-col gap-2 w-1/2",children:[e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"font-semibold",children:"Your States Q: "}),e.jsx("p",{children:n==null?void 0:n.map((u,b)=>e.jsxs("span",{children:[u," ",n.length-1!==b&&", "]},b))})]}),e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"font-semibold",children:"Your Alphabets: "}),e.jsx("p",{children:i==null?void 0:i.map((u,b)=>e.jsxs("span",{children:[u,i.length-1!==b&&", "]},b))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Start State:"})," ",h]}),e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"font-semibold",children:"Final state:  "}),e.jsx("p",{children:g==null?void 0:g.map((u,b)=>e.jsxs("span",{children:[u,g.length-1!==b&&", "]},b))})]}),e.jsx("div",{className:"bg-blue-950 rounded-md px-12 py-2 text-white",children:e.jsx("span",{children:`This is ${c?"an NFA":"a DFA"}`})})]}),e.jsx("section",{className:"",children:e.jsx(te,{})})]})},Fe=()=>{const{setNavBarSelect:x}=m.useContext(O),a=m.useRef(null);m.useEffect(()=>{var r;x("Validate String"),window.scrollTo({behavior:"smooth",top:0}),(r=a.current)==null||r.focus()});const{nfa:c,error:n,handleString:i,inputString:h,validateDFA:g,validateNFA:u,isAccepted:b}=m.useContext(M),[C,w]=m.useState(!1),[j,f]=m.useState(!1);return e.jsx("main",{className:"flex flex-col w-full gap-4",children:e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsxs("section",{className:"flex items-center",children:[e.jsx("div",{className:"flex flex-col gap-1 pr-4",children:e.jsxs("div",{className:"w-fit flex items-center gap-2",children:[e.jsx("label",{htmlFor:"",children:"Input String: "}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("input",{className:"py-1",ref:a,onKeyDown:({key:r})=>{r==="Enter"&&(c?u(h,[]):g())},value:h,onChange:i,type:"text",placeholder:"Enter string..."}),e.jsx("span",{className:`${!n.stringError&&"hidden"} text-red-500 text-xs`,children:n&&n.stringError})]}),e.jsx("button",{onClick:r=>{c?u(h,[]):g()},className:"bg-blue-300 text-blue-500 px-6 py-1 rounded-md",children:"submit"})]})}),h.length>0&&e.jsx("div",{className:"border-blue-500 border-l-2 pl-4",children:e.jsxs("span",{className:"font-semibold",children:[h," is ",b?"accepted":"not accepted"]})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(te,{}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:r=>{r.stopPropagation(),w(!C)},className:"transition duration-200 bg-slate-500 w-fit px-8 py-2 rounded-[20px] text-white text-opacity-70 hover:bg-slate-600",children:"Toggle transition table"}),e.jsx("button",{onClick:r=>{r.stopPropagation(),f(!j)},className:"transition duration-200 bg-slate-500 w-fit px-8 py-2 rounded-[20px] text-white text-opacity-70 hover:bg-slate-600",children:"Toggle FA set"})]}),C&&e.jsx(ne,{})]}),j&&e.jsxs("div",{className:"grid grid-cols-4 gap-4 w-full",children:[e.jsx(se,{}),e.jsx(ae,{}),e.jsx(le,{}),e.jsx(re,{})]})]})})},ke=de([{path:"/AutomataMidterm/",element:e.jsx(je,{}),children:[{path:"/AutomataMidterm/",element:e.jsx(Ne,{}),errorElement:e.jsx(L,{})},{path:"/AutomataMidterm/minimized",element:e.jsx(Ae,{}),errorElement:e.jsx(L,{})},{path:"/AutomataMidterm/classify",element:e.jsx(Ee,{}),errorElement:e.jsx(L,{})},{path:"/AutomataMidterm/validate",element:e.jsx(Fe,{}),errorElement:e.jsx(L,{})},{path:"*",element:e.jsx(L,{})}]}]);G(document).on("focus","input[type=number]",function(x){G(this).on("wheel.disableScroll",function(a){a.preventDefault()})});G("form").on("blur","input[type=number]",function(x){G(this).off("wheel.disableScroll")});const Te=new xe;oe.createRoot(document.getElementById("root")).render(e.jsx(ie.StrictMode,{children:e.jsx(me,{client:Te,children:e.jsx(pe,{children:e.jsx(Se,{children:e.jsx(ve,{children:e.jsx(fe,{router:ke})})})})})}));
