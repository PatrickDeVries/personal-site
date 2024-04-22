import{a as p,T as C,g as v,m as T,r as E,j as d,i as z,k as R,n as W,f as B,b as N,B as j,I as L}from"./index-ghoGLPje.js";var u=(e=>(e.One="ONE",e.Two="TWO",e.Three="THREE",e.Four="FOUR",e))(u||{}),i=(e=>(e.Solid="SOLID",e.Stripe="STRIPE",e.Even="EVEN",e.Odd="ODD",e))(i||{}),g=(e=>(e.SolidEven="SOLID_EVEN",e.SolidOdd="SOLID_ODD",e.StripeEven="STRIPE_EVEN",e.StripeOdd="STRIPE_ODD",e))(g||{});const m=e=>e===i.Odd?"Odds":e===i.Solid?"Solids":e===i.Even?"Evens":"Stripes",G=(e,n)=>n[e]?n[e]:`Player ${e.toLowerCase()}`,$=e=>{if(!e)return"";let n=e%10,l=e%100;return n===1&&l!==11?e+"st":n===2&&l!==12?e+"nd":n===3&&l!==13?e+"rd":e+"th"},Q=(e,n)=>{const l={[i.Even]:e.filter(o=>o%2===0),[i.Odd]:e.filter(o=>o%2!==0),[i.Solid]:e.filter(o=>o<=8),[i.Stripe]:e.filter(o=>o>=9)},r=Object.values(i).reduce((o,t)=>l[t].length>0&&n.includes(t)?[...o,t]:o,[]);return r.length>0?r:n},I=e=>{const n=Object.values(e).reduce((l,r)=>l+ +(r.length===1),0);return n<4?(Object.values(u).forEach(r=>{e[r].length===1&&Object.values(u).filter(o=>o!==r).forEach(o=>{e[o]=e[o].filter(t=>t!==e[r][0])})}),Object.values(e).reduce((r,o)=>r+ +(o.length===1),0)>n?I(e):e):e},D=e=>{const n=Object.keys(e).filter(l=>e[l].length===2);return{[g.SolidEven]:n.filter(l=>[i.Solid,i.Even].every(r=>e[l].includes(r))),[g.SolidOdd]:n.filter(l=>[i.Solid,i.Odd].every(r=>e[l].includes(r))),[g.StripeEven]:n.filter(l=>[i.Stripe,i.Even].every(r=>e[l].includes(r))),[g.StripeOdd]:n.filter(l=>[i.Stripe,i.Odd].every(r=>e[l].includes(r)))}},A=e=>{if(Object.keys(e).filter(o=>e[o].length===2).length<=1)return e;const l=D(e),r=Object.keys(l).find(o=>l[o].length>1);return r&&(Object.keys(e).filter(o=>!l[r].includes(o)).forEach(o=>{e[o]=e[o].filter(t=>!e[l[r][0]].includes(t))}),e=I(e)),e},F=e=>{let n={...e};return n=I(n),n=A(n),n},H=e=>{const n=Object.values(u).find(t=>e[t].length===1&&e[t].includes(i.Solid)),l=Object.values(u).find(t=>e[t].length===1&&e[t].includes(i.Stripe)),r=Object.values(u).find(t=>e[t].length===1&&e[t].includes(i.Even)),o=Object.values(u).find(t=>e[t].length===1&&e[t].includes(i.Odd));return{[i.Solid]:n,[i.Stripe]:l,[i.Even]:r,[i.Odd]:o}},S=(e,n,l)=>{let r=!1;return Object.values(i).forEach(o=>{if(l[o]===e)switch(o){case i.Solid:r=Object.entries(n).filter(([t])=>Number(t)<9).every(([,t])=>t==="sunk"||t==="queued");break;case i.Stripe:r=Object.entries(n).filter(([t])=>Number(t)>8).every(([,t])=>t==="sunk"||t==="queued");break;case i.Even:r=Object.entries(n).filter(([t])=>Number(t)%2===0).every(([,t])=>t==="sunk"||t==="queued");break;case i.Odd:r=Object.entries(n).filter(([t])=>Number(t)%2!==0).every(([,t])=>t==="sunk"||t==="queued");break}}),r},_=p.div.withConfig({displayName:"Wrapper",componentId:"sc-pvlmyp-0"})(["position:relative;flex:1;"]),V=p.div.withConfig({displayName:"GraphLabels",componentId:"sc-pvlmyp-1"})(["display:grid;grid-template:auto 1fr 1fr / auto 1fr 1fr;grid-template-areas:'. "," ","' '"," g g' '"," g g';"],i.Solid,i.Stripe,i.Even,i.Odd),U=p.div.withConfig({displayName:"GraphBody",componentId:"sc-pvlmyp-2"})(["position:relative;grid-area:g;background-color:",";display:grid;grid-template:1fr 1fr / 1fr 1fr;"],({theme:e})=>e.backgroundHighlight),O=p.div.withConfig({displayName:"GridHeader",componentId:"sc-pvlmyp-3"})(["display:flex;align-items:center;justify-content:center;grid-area:",";padding:1rem;text-align:center;font-size:1.4rem;","{font-size:1rem;}",""],({$ballType:e})=>e,C,({$ballType:e})=>(e===i.Even||e===i.Odd)&&v(["writing-mode:vertical-lr;transform:scale(-1,-1);padding-block-end:0;"])),k=p.div.withConfig({displayName:"GridCell",componentId:"sc-pvlmyp-4"})(["width:100%;display:flex;align-items:center;justify-content:center;text-align:center;font-size:1.4rem;border:1px solid ",";&::after{content:'';display:block;padding-bottom:100%;}"],({theme:e})=>e.secondary),M=p.div.withConfig({displayName:"Label",componentId:"sc-pvlmyp-5"})(["position:absolute;width:50%;height:50%;top:",";left:",";display:flex;align-items:center;justify-content:center;transition-property:top,left;transition-duration:1s;transition-timing-function:ease-in-out;> span{padding:1rem;max-width:calc(100% - 2px);background-color:",";text-align:center;font-size:1.8rem;"," ","{font-size:1.2rem;}}",""],({$location:e,$index:n})=>e===i.Solid||e===i.Stripe||e==="hidden"?"25%":e===i.Odd?"50%":e===i.Even?"0":e===g.SolidEven||e===g.StripeEven?n===0?"-12.5%":n===1?"12.5%":"0":n===0?"37.5%":n===1?"62.5%":"50%",({$location:e})=>e===i.Even||e===i.Odd||e==="hidden"?"25%":e===g.StripeEven||e===g.StripeOdd||e===i.Stripe?"50%":"0",({theme:e})=>e.backgroundHighlight,({$rank:e,theme:n})=>e!==void 0&&v(["color:",";"],T((e-1)/3,n.danger,n.primary)),C,({$location:e})=>e==="hidden"&&v(["display:none;"])),J=(e,n,l)=>{const r=Object.values(i).find(t=>n[t]===e);if(r)return r;const o=Object.values(g).find(t=>l[t].includes(e));return o||"hidden"},X=(e,n)=>{const l=Object.keys(n).find(r=>n[r].includes(e));return!l||n[l].length===1?-1:n[l][0]===e?0:1},Y=({game:e,decided:n})=>{const l=E.useMemo(()=>D(e.roles),[e.roles]);return d.jsx(_,{children:d.jsxs(V,{children:[d.jsx("div",{}),d.jsx(O,{$ballType:i.Solid,children:m(i.Solid)}),d.jsx(O,{$ballType:i.Stripe,children:m(i.Stripe)}),d.jsx(O,{$ballType:i.Even,children:m(i.Even)}),d.jsx(O,{$ballType:i.Odd,children:m(i.Odd)}),d.jsxs(U,{children:[d.jsx(k,{children:Object.values(u).map(r=>d.jsx(M,{$location:J(r,n,l),$index:X(r,l),$rank:e.rankings[r],children:d.jsxs("span",{children:[G(r,e.names),e.rankings[r]&&d.jsxs("span",{children:[" - ",$(e.rankings[r])]})]})},`${g.SolidEven}-${r}`))}),d.jsx(k,{}),d.jsx(k,{}),d.jsx(k,{})]})]})})},y={names:{[u.One]:"",[u.Two]:"",[u.Three]:"",[u.Four]:""},balls:{1:"table",2:"table",3:"table",4:"table",5:"table",6:"table",7:"table",8:"table",9:"table",10:"table",11:"table",12:"table",13:"table",14:"table",15:"table"},roles:{[u.One]:Object.values(i),[u.Two]:Object.values(i),[u.Three]:Object.values(i),[u.Four]:Object.values(i)},shots:[],rankings:{}},a=z({name:"sseo",initialState:y,version:0,migrations:{},...R}),Z=W({decided:e=>H(e(a).roles)}),K=p.div.withConfig({displayName:"Wrapper",componentId:"sc-geon8w-0"})(["margin:0 auto;width:100%;padding:1rem 3rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:2rem;","{flex-direction:column;align-items:center;padding:1rem;}color:",";"],C,({theme:e})=>e.text),ee=p.div.withConfig({displayName:"LeftSection",componentId:"sc-geon8w-1"})(["flex:1;display:flex;flex-direction:column;gap:2rem;> button{align-self:flex-start;}"]),te=p.div.withConfig({displayName:"RightSection",componentId:"sc-geon8w-2"})(["flex:1;width:100%;"]),ne=["#F6DD4A","#0E348A","#B2342B","#381F74","#E77943","#2F6A50","#611915","#000000"],ie=p.header.withConfig({displayName:"Header",componentId:"sc-geon8w-3"})(["display:flex;gap:1rem;align-items:center;font-size:1.2rem;"]),re=p.div.withConfig({displayName:"PlayerWrapper",componentId:"sc-geon8w-4"})(["display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;font-size:1.2rem;> div{display:flex;flex-direction:column;gap:0.5rem;text-indent:1rem;> div{display:flex;gap:1rem;align-items:center;text-indent:0;> label{width:19rem;}}}"]),P=p.div.withConfig({displayName:"BallsWrapper",componentId:"sc-geon8w-5"})(["display:flex;gap:1rem;flex-wrap:wrap;font-size:1.2rem;"]),w=p.div.withConfig({displayName:"PoolBall",componentId:"sc-geon8w-6"})(["position:relative;width:2em;height:2em;border-radius:50%;background-color:",";box-sizing:border-box;"," display:flex;place-content:center;align-items:center;overflow:hidden;user-select:none;"," ::after{content:'';position:absolute;box-sizing:border-box;top:0;width:2em;aspect-ratio:1;border-radius:50%;border:1px solid black;}> div{width:50%;aspect-ratio:1;border-radius:50%;background-color:white;color:black;font-size:0.6em;border:1px solid black;display:flex;place-content:center;align-items:center;}"],({$num:e})=>ne[(e-1)%8],({$isSunk:e})=>!e&&v(["cursor:pointer;"]),({$num:e})=>e>8&&v(["::before{content:'';box-sizing:border-box;position:absolute;top:15%;width:100%;height:70%;border-top:1px solid black;border-bottom:1px solid black;box-shadow:0 0 0 1rem white;}"])),se=p.div.withConfig({displayName:"ConfirmQueue",componentId:"sc-geon8w-7"})(["display:flex;gap:1rem;flex-wrap:wrap;align-items:center;font-size:1.2rem;> select{padding:0.75rem 0.5rem;border:1px solid ",";border-radius:0.25rem;outline:none;color:",";background-color:",";&:focus{border-color:",";}}"],({theme:e})=>e.focus,({theme:e})=>e.text,({theme:e})=>e.background,({theme:e})=>e.secondary),le=()=>{const e=B(),[n,l]=E.useState(u.One),[r,o]=E.useState(!1),t=N(a),{decided:x}=N(Z);return d.jsxs(K,{children:[d.jsxs(ee,{children:[d.jsxs(ie,{children:[d.jsx("h1",{children:"Solids vs Stripes vs Evens vs Odds "}),d.jsx(j,{onClick:()=>{Object.assign(a.balls,y.balls),Object.assign(a.roles,y.roles),a.shots=[],a.rankings={},l(u.One)},color:e.focus,children:"New game"})]}),Object.values(u).map(s=>d.jsxs(re,{children:[d.jsxs("div",{children:[`Player ${s.toLowerCase()} - ${t.roles[s].map(c=>m(c)).join(" | ")}`,d.jsxs("div",{children:[d.jsx(L,{placeholder:"Player name",type:"text",value:t.names[s],onChange:c=>{a.names[s]=c.target.value}}),d.jsx(j,{color:e.primary,$variant:"outline",onClick:()=>l(s),disabled:t.rankings[s]!==void 0,children:"Select"})]})]}),t.shots.filter(({player:c})=>c===s).map(({balls:c})=>c.map(f=>d.jsx(w,{$num:f,$isSunk:!0,children:d.jsx("div",{children:f})},`ball-${f}`)))]},s)),d.jsx("div",{children:"Remaining - click a ball to queue"}),d.jsx(P,{children:Object.entries(t.balls).filter(([,s])=>s==="table").map(([s])=>{const c=+s;return d.jsx(w,{title:"Click to add to queue",$num:c,onClick:()=>{a.balls[c]="queued"},children:d.jsx("div",{children:s})},`ball-${s}`)})}),d.jsxs(se,{children:[d.jsx("div",{children:"Queue"}),d.jsx("select",{title:"Select Player",value:n,onChange:s=>l(s.target.value),children:Object.values(u).map((s,c)=>d.jsx("option",{label:t.names[s]||`Player ${c+1}`,value:s,disabled:t.rankings[s]!==void 0},s))}),d.jsx(j,{$variant:"outline",color:e.focus,disabled:!Object.values(t.balls).some(s=>s==="queued"),onClick:()=>{const s=Object.entries(t.balls).filter(([,f])=>f==="queued").map(([f])=>Number(f));a.shots.push({player:n,balls:s,roles:t.roles,rankings:t.rankings,lost:r}),s.forEach(f=>{a.balls[f]="sunk"}),a.roles=F({...t.roles,[n]:Q(s,t.roles[n])});let c=!1;if(S(n,a.balls,x)){c=!0;let f=[1,2,3,4];Object.values(a.rankings).forEach(b=>{f=f.filter(h=>h!==b)}),r?a.rankings[n]=f.at(-1):a.rankings[n]=f.at(0),l(b=>Object.values(u).find(h=>typeof a.rankings[h]>"u"&&h!==n)??b)}Object.values(u).forEach(f=>{if(typeof a.rankings[f]>"u"&&(!c||f!==n)&&S(f,a.balls,x)){let b=[1,2,3,4];Object.values(a.rankings).forEach(h=>{b=b.filter(q=>q!==h)}),a.rankings[f]=b.at(0)}}),o(!1)},children:"Confirm"})]}),Object.entries(t.balls).filter(([,s])=>s==="queued").length>0&&d.jsxs(P,{children:[Object.entries(t.balls).filter(([,s])=>s==="queued").map(([s])=>{const c=Number(s);return d.jsx(w,{title:"Click to remove from queue",$num:c,onClick:()=>{a.balls[c]="table"},children:d.jsx("div",{children:s})},`ball-${s}`)}),S(n,t.balls,x)&&d.jsx(L,{type:"checkbox",label:"called wrong pocket / scratched",checked:r,onChange:s=>o(s.target.checked)})]}),t.shots.length>0&&d.jsx(j,{$variant:"outline",color:e.danger,onClick:()=>{const s=t.shots.at(-1);s&&(Object.entries(a.balls).forEach(([c,f])=>{f==="queued"&&(a.balls[Number(c)]="table")}),s.balls.forEach(c=>{a.balls[c]="queued"}),Object.assign(a.roles,s.roles),a.rankings={},Object.assign(a.rankings,s.rankings),o(s.lost),l(s.player),a.shots.pop())},children:"Undo Last Shot"})]}),d.jsx(te,{children:d.jsx(Y,{game:t,decided:x})})]})};export{le as default};
